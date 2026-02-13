import { XRMouse } from './XRMouse';
import { XRRemote } from './XRRemote';
import { XRWorld } from './XRWorld';

export type XREventTarget = THREE.Mesh<THREE.BufferGeometry, THREE.MeshStandardMaterial>;

export enum XREventType {
  SELECT_START = 'selectStart',
  SELECT_END = 'selectEnd',
  CLICK = 'click',
  DOWN = 'down',
  OVER = 'over',
  OUT = 'out',
  UP = 'up',
  ENTER = 'enter',
  LEAVE = 'leave',
  MOVE = 'move'
}

export interface XREvent<T = XREventObject> {
  type: XREventType;
  target: T;
  intersection?: THREE.Intersection<THREE.Object3D<THREE.Event>>;
}

export interface XREventEntry {
  object: XREventTarget;
  callback(event: XREvent): void;
}

type XREventOptions = { once?: boolean; isClick?: boolean };

type XREventObject = THREE.Object3D<THREE.Event>; //{ id: number };

// type XRObjectId = number;

// interface XREventLookup {
//   [XREventType]:{
//     [number]:any;//{object:XREventObject; callback:(event: {type:XREventType; target:XREventObject}): void}
//   }
// }

export class XREventManager {
  world: XRWorld;
  lookup: Partial<Record<XREventType, Record<number, { object: XREventObject; callback: XREventEntry['callback']; options: XREventOptions }>>> = {};
  lookupChildren: Partial<Record<XREventType, XREventObject[]>> = {};
  currentTargets: Partial<Record<XREventType, XREventObject>> = {};
  maxClickDistance = 7;

  constructor(world: XRWorld) {
    this.world = world;
  }

  initController(remote: XRRemote) {
    remote;
    // remote.onSelectStart = () => {
    //   console.log('initController onSelectStart');
    //   const target = null;//remote.getSelectedObject(this.getObjects(XREventType.DOWN), false);
    //   this.trigger(target?.object, XREventType.DOWN, target);
    // };

    // remote.onSelectEnd = () => {
    //   console.log('initController onSelectEnd');
    //   const target = null;//remote.getSelectedObject(this.getObjects(XREventType.UP), false);
    //   this.trigger(target?.object, XREventType.UP, target);
    // };

    // remote.onMove = (info) => {
    //   const target = remote.getSelectedObject(this.getObjects(XREventType.UP), false);
    //   this.trigger(target?.object, XREventType.UP, target);
    // };
  }

  initMouse(mouse: XRMouse) {
    mouse.onMove = () => {
      const target = mouse.getSelectedObject(this.getObjects(XREventType.MOVE), false);
      if (target) {
        this.trigger(target?.object, XREventType.MOVE, target);
      }
    };

    mouse.onDown = () => {
      const target = mouse.getSelectedObject(this.getObjects(XREventType.DOWN), false);
      if (target) {
        this.trigger(target?.object, XREventType.DOWN, target);
      }
      this.onMouseDown();
    };

    mouse.onUp = () => {
      const target = mouse.getSelectedObject(this.getObjects(XREventType.UP), false);
      if (target) {
        this.trigger(target?.object, XREventType.UP, target);
      }
      this.onMouseUp();
    };
  }

  onMouseDown = () => {
    //
  };
  onMouseUp = () => {
    //
  };

  renderEvents(delta: number) {
    //
    delta;
  }

  initEvent(eventType: XREventType) {
    if (!Object.prototype.hasOwnProperty.call(this.lookup, eventType)) {
      this.lookup[eventType] = this.lookup?.[eventType] ?? {};
      this.lookupChildren[eventType] = this.lookupChildren[eventType] ?? [];
    }
  }

  on(object: XREventObject, eventType: XREventType, callback: XREventEntry['callback'], options: XREventOptions = {}) {
    this.initEvent(eventType);
    this.lookup[eventType]![object.id] = { object, callback, options };
    this.lookupChildren[eventType]!.push(object);
    object.userData.selectable = true;

    if (eventType === XREventType.CLICK) {
      this.on(object, XREventType.DOWN, () => {
        //
      });
      this.on(
        object,
        XREventType.UP,
        () => {
          //
        },
        { isClick: true }
      );
    }
    if (eventType === XREventType.ENTER) {
      this.on(object, XREventType.MOVE, () => {
        //
      });
    }
  }

  off(object: XREventObject, eventType: XREventType, callback?: XREventEntry['callback']) {
    this.initEvent(eventType);
    if (this.lookup[eventType]) delete this.lookup[eventType][object.id];
    this.lookupChildren[eventType]!.push(object); // wrong
    callback;
  }

  getObjects(eventType: XREventType) {
    return this.lookupChildren?.[eventType] ?? [];
  }

  // TODO: enter and leave not quite there
  trigger(object: XREventObject, eventType: XREventType, intersection?: THREE.Intersection<THREE.Object3D<THREE.Event>>) {
    if (object) {
      const found = this.lookup?.[eventType]?.[object.id];
      if (found) {
        if (found.callback) found.callback({ type: eventType, target: object, intersection });
        this.currentTargets[eventType] = object;
        if (found.options?.once === true) {
          this.off(object, eventType);
        }
        if (eventType === XREventType.UP) {
          if (found.options?.isClick === true) {
            const distanceMoved = this.world.mouse.mouseUp.distanceTo(this.world.mouse.mouseDown);
            if (distanceMoved < this.maxClickDistance) {
              if (this.currentTargets[XREventType.DOWN] === object) {
                this.trigger(object, XREventType.CLICK, intersection);
              }
            }
          }
        }
        if (eventType === XREventType.MOVE) {
          if (this.currentTargets[XREventType.ENTER] !== object) {
            if (this.currentTargets[XREventType.ENTER]) {
              this.trigger(this.currentTargets[XREventType.ENTER], XREventType.LEAVE, intersection);
              this.currentTargets[XREventType.ENTER] = undefined;
            }
            this.trigger(object, XREventType.ENTER, intersection);
          }
        }
      }
    } else {
      if (eventType === XREventType.MOVE) {
        if (this.currentTargets[XREventType.ENTER]) {
          this.trigger(this.currentTargets[XREventType.ENTER], XREventType.LEAVE);
          this.currentTargets[XREventType.ENTER] = undefined;
        }
      }
    }
  }
}
