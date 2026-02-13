import * as THREE from 'three';
import { XRControllerModelFactory } from 'three/examples/jsm/webxr/XRControllerModelFactory';
// import { XRHandModelFactory } from 'three/examples/jsm/webxr/XRHandModelFactory';

// const handModelFactory = new XRHandModelFactory();
const controllerModelFactory = new XRControllerModelFactory();
const tempMatrix = new THREE.Matrix4();

type BaseRemoteEvent<T> = THREE.Event & {
  type: T;
} & {
  target: THREE.XRHandSpace;
};

export enum XRRemoteEventType {
  SELECT_START = 'selectstart',
  SELECT_END = 'selectend',
  MOVE = 'move',
  CONNECTED = 'connected',
  DISCONNECTED = 'disconnected'
}

export type XRRemoteEvent = {
  ref: XRRemote;
  type: XRRemoteEventType;
  target: THREE.XRTargetRaySpace;
};

export class XRRemote<U extends Record<string, unknown> = Record<string, unknown>> {
  raycaster = new THREE.Raycaster();
  controller: THREE.XRTargetRaySpace;
  grip: THREE.XRGripSpace;
  controllerIndex: number;
  isBuilt = false;
  isConnected = false;
  isSelecting = false;
  userData: U = {} as unknown as U;
  private eventListeners = new Map<string, Map<(event: XRRemoteEvent) => void, EventListener>>();

  constructor(controllerIndex: number, renderer: THREE.WebGLRenderer, scene: THREE.Scene | THREE.Object3D) {
    this.controllerIndex = controllerIndex;
    this.getSelectedObject = this.getSelectedObject.bind(this);
    this.controller = renderer.xr.getController(controllerIndex); // 0=>right 1=>left
    this.controller.addEventListener('selectstart', this._onSelectStart.bind(this));
    this.controller.addEventListener('selectend', this._onSelectEnd.bind(this));
    // this.controller.addEventListener('move', this._onMove.bind(this));
    this.controller.addEventListener('connected', this.onConnected.bind(this));
    this.controller.addEventListener('disconnected', this.onDisconnected.bind(this));
    this.grip = renderer.xr.getControllerGrip(controllerIndex);
    this.grip.add(controllerModelFactory.createControllerModel(this.grip));
    scene.add(this.controller);
    scene.add(this.grip);
  }

  buildController(data: { targetRayMode: string }) {
    let geometry: THREE.BufferGeometry, material: THREE.LineBasicMaterial | THREE.MeshBasicMaterial;

    switch (data.targetRayMode) {
      case 'tracked-pointer':
        geometry = new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(0, 0, 0), new THREE.Vector3(0, 0, -1), new THREE.Vector3(0, 0.5, -1)]);

        // material = new THREE.LineBasicMaterial({ vertexColors: true, blending: THREE.AdditiveBlending });
        // material.color.setHex(0xff6600);
        // const line = new THREE.Line(geometry, material);
        // line.name = 'line';
        // line.scale.z = 5;
        // return line;

        // geometry = new THREE.BufferGeometry();
        // geometry.setAttribute('position', new THREE.Float32BufferAttribute([0, 0, 0, 0, 0, -1], 3));
        geometry.setAttribute('color', new THREE.Float32BufferAttribute([0.5, 0.5, 0.5, 0, 0, 0], 3));
        material = new THREE.LineBasicMaterial({
          vertexColors: true,
          // blending: THREE.AdditiveBlending,
          color: 0xff6600
        });
        return new THREE.Line(geometry, material);

      case 'gaze':
        geometry = new THREE.RingGeometry(0.02, 0.04, 32).translate(0, 0, -1);
        material = new THREE.MeshBasicMaterial({ opacity: 0.5, transparent: true });
        return new THREE.Mesh(geometry, material);
    }
  }

  getSelectedObject(children: THREE.Object3D<THREE.Event>[], recursive = false): THREE.Intersection<THREE.Object3D<THREE.Event>> | null {
    tempMatrix.identity().extractRotation(this.controller.matrixWorld);
    this.raycaster.ray.origin.setFromMatrixPosition(this.controller.matrixWorld);
    this.raycaster.ray.direction.set(0, 0, -1).applyMatrix4(tempMatrix);
    const intersections = this.raycaster.intersectObjects(children, recursive);
    // only select object with userData.selectable = true;
    const passed = intersections.filter((i) => i.object.userData.selectable === true);
    return passed.length > 0 ? passed[0] : null;
  }

  // TODO: this won't remove the specific event
  on(eventType: XRRemoteEventType, callback: (event: XRRemoteEvent) => void): XRRemote {
    this.controller.addEventListener(eventType, (e) => callback({ ...e, ref: this }));
    return this;
  }

  off(eventType: XRRemoteEventType, callback: (event: XRRemoteEvent) => void): XRRemote {
    this.controller.removeEventListener(eventType, (e) => callback({ ...e, ref: this }));
    return this;
  }

  lastPosition = new THREE.Vector3();
  moveVector = new THREE.Vector3();

  // onMove(info: { vector: THREE.Vector3 }) {}

  // _onMove() {
  // this.onMove.call(this);
  // console.log('pre move', this.controller.position.toArray().join());
  // if (!this.lastPosition.equals(this.controller.position)) {
  //   // console.log('move', this.controller.position);
  //   this.moveVector.subVectors(this.controller.position, this.lastPosition);
  //   this.lastPosition.copy(this.controller.position);
  //   this.onMove({ vector: this.moveVector });
  // }
  // }

  onConnected(event: BaseRemoteEvent<'connected'>) {
    this.isConnected = true;
    // console.log('XRRemote.onConnected', this.controllerIndex, 'connected');
    // console.log('event', event);
    // const indexTip = this.controller.joints['index-finger-tip'];
    // console.log('indexTip', indexTip);
    // indexTip.add(self.buildController(event.data));
    if (this.isBuilt === false) {
      this.controller.add(this.buildController(event.data)!);
      this.isBuilt = true;
    }
    this.controller.visible = true;
  }

  onDisconnected(event: BaseRemoteEvent<'disconnected'>) {
    event;
    this.isConnected = false;
    this.controller.visible = false;
    // console.log('remote', this.controllerIndex, 'disconnected');
    // TODO: this is not reappearing
    // this.remove(this.children[0]);
  }

  private _onSelectStart() {
    // console.log('_onSelectStart');
    // this.controller.userData.isSelecting = true;
    this.isSelecting = true;
    // this.onSelectStart.call(this);
  }

  // onSelectStart() {
  //   console.log('onSelectStart');
  // }

  private _onSelectEnd() {
    // this.controller.userData.isSelecting = false;
    this.isSelecting = false;
    // this.onSelectEnd.call(this);
  }

  // onSelectEnd() {}
}
