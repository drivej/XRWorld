import * as THREE from 'three';
// import { XRControllerModelFactory } from 'three/examples/jsm/webxr/XRControllerModelFactory';
import { XRHandModelFactory } from 'three/examples/jsm/webxr/XRHandModelFactory';

const handModelFactory = new XRHandModelFactory();
// const controllerModelFactory = new XRControllerModelFactory();
const tempMatrix = new THREE.Matrix4();

type BaseHandEvent<T> = THREE.Event & {
  type: T;
} & {
  target: THREE.XRHandSpace;
};

// interface HandEvent {
//   CONNECTED: BaseHandEvent<'connected'>;
//   DISCONNECTED: BaseHandEvent<'disconnected'>;
// }

export class XRHand {
  raycaster = new THREE.Raycaster();
  controllerIndex;
  controller: THREE.XRHandSpace;
  grip: THREE.XRGripSpace | undefined;
  isSelecting = false;
  tmpVector1 = new THREE.Vector3();
  tmpVector2 = new THREE.Vector3();
  scene: THREE.Scene | THREE.Object3D;
  grabbing: boolean = false;
  connected = false;
  self = this;

  constructor(controllerIndex: number, renderer: THREE.WebGLRenderer, scene: THREE.Scene | THREE.Object3D) {
    // const self = this;
    this.controllerIndex = controllerIndex;
    this.getSelectedObject = this.getSelectedObject.bind(this);
    this.onSelectStart = this.onSelectStart.bind(this);
    this.onSelectEnd = this.onSelectEnd.bind(this);
    this._onMove = this._onMove.bind(this);
    this.onConnected = this.onConnected.bind(this);
    this.onDisconnected = this.onDisconnected.bind(this);

    // this.fingerTip = this.getPart(XRHandParts.MIDDLE.TIP).bind(this);

    this.controller = renderer.xr.getHand(controllerIndex); // 0=>right 1=>left
    // this.controller.addEventListener('selectstart', this.onSelectStart.bind(this));
    // this.controller.addEventListener('selectend', this.onSelectEnd.bind(this));
    // this.controller.addEventListener('move', this.onMove.bind(this));
    // this.controller.addEventListener('pinchstart', this._onPinchStart.bind(this));
    // this.controller.addEventListener('pinchend', this._onPinchEnd.bind(this));
    this.controller.userData.built = false;
    this.controller.addEventListener('connected', this.onConnected);
    this.controller.addEventListener('disconnected', this.onDisconnected);
    // this.controller.addEventListener('connected', (event) => {
    //   console.log('hand', controllerIndex, 'connected');
    //   // const indexTip = this.controller.joints['index-finger-tip'];
    //   // console.log('indexTip', indexTip);
    //   // indexTip.add(self.buildController(event.data));
    //   if (this.controller.userData.built === false) {
    //     console.log('joints', Object.keys(this.controller.joints));
    //     if (this.controller.joints.hasOwnProperty(XRHandParts.INDEX.JOINT1)) {
    //       this.getPart(XRHandParts.INDEX.JOINT1).add(self.buildController(event.data));
    //       this.controller.userData.built = true;
    //     }
    //   }
    // });
    // this.controller.addEventListener('disconnected', () => {
    // console.log('hand', controllerIndex, 'disconnected');
    // TODO: this is not reappearing
    // this.remove(this.children[0]);
    // });

    this.controller.add(handModelFactory.createHandModel(this.controller));

    // scene.add(this.controller);
    this.scene = scene;
  }

  buildController(data: { targetRayMode: string }) {
    let geometry: THREE.BufferGeometry, material: THREE.LineBasicMaterial | THREE.MeshBasicMaterial;

    switch (data.targetRayMode) {
      case 'tracked-pointer':
        console.log('add line to hand');
        geometry = new THREE.BufferGeometry();
        geometry.setAttribute('position', new THREE.Float32BufferAttribute([0, 0, 0, 0, 0, -1], 3));
        geometry.setAttribute('color', new THREE.Float32BufferAttribute([0.5, 0.5, 0.5, 0, 0, 0], 3));
        material = new THREE.LineBasicMaterial({ vertexColors: true, blending: THREE.AdditiveBlending });
        return new THREE.Line(geometry, material);

      case 'gaze':
        geometry = new THREE.RingGeometry(0.02, 0.04, 32).translate(0, 0, -1);
        material = new THREE.MeshBasicMaterial({ opacity: 0.5, transparent: true });
        return new THREE.Mesh(geometry, material);
    }
  }

  getSelectedObject(context: { children: THREE.Object3D<THREE.Event>[] }): THREE.Object3D<THREE.Event> | null {
    // tempMatrix.identity().extractRotation(this.controller.matrixWorld); // TODO: change to finger tip
    // this.raycaster.ray.origin.setFromMatrixPosition(this.controller.matrixWorld);

    const pointer = this.getPart(XRHandParts.INDEX.JOINT1);

    if (pointer) {
      tempMatrix.identity().extractRotation(pointer.matrixWorld); // TODO: change to finger tip
      this.raycaster.ray.origin.setFromMatrixPosition(pointer.matrixWorld);

      this.raycaster.ray.direction.set(0, 0, -1).applyMatrix4(tempMatrix);
      // this.raycaster.intersectObjects(child, false);

      let i = context.children.length;
      let child: THREE.Object3D<THREE.Event>, intersects: string | THREE.Intersection<THREE.Object3D<THREE.Event>>[];
      while (i--) {
        child = context.children[i];
        if (child.userData.selectable === true) {
          intersects = this.raycaster.intersectObject(child, false);
          if (intersects.length > 0) {
            return child;
          }
        }
      }
      // const intersections = this.raycaster.intersectObjects(context.children, false);
      // // only select object with userData.selectable = true;
      // const passed = intersections.filter((i) => i.object.userData.selectable === true);
      // return passed.length > 0 ? passed[0].object : null;
    }

    return null;
  }

  collideObject(context: THREE.Object3D, indexTip: THREE.XRJointSpace): THREE.Object3D | null {
    console.log('collide', context?.children.length);
    const len = context?.children?.length ?? 0;
    for (let i = 0; i < len; i++) {
      const sphere = context.children[i];
      if (sphere.userData.selectable === true && sphere instanceof THREE.Mesh) {
        const distance = indexTip.getWorldPosition(this.tmpVector1).distanceTo(sphere.getWorldPosition(this.tmpVector2));
        if (distance < sphere.geometry.boundingSphere.radius * sphere.scale.x) {
          console.log('found mesh');
          return sphere;
        }
      }
    }

    return null;
  }

  onConnected(event: BaseHandEvent<'connected'>) {
    if (Object.keys(this.controller?.joints ?? {}).length > 5) {
      console.log('hand', this.controllerIndex, 'connected');
      this.connected = true;

      this.controller.addEventListener('selectstart', this.onSelectStart);
      this.controller.addEventListener('selectend', this.onSelectEnd);
      this.controller.addEventListener('move', this._onMove);
      // const indexTip = this.controller.joints['index-finger-tip'];
      // console.log('indexTip', indexTip);
      // indexTip.add(self.buildController(event.data));
      if (this.controller.userData.built === false) {
        console.log('joints', Object.keys(this.controller.joints));
        if (XRHandParts.INDEX.JOINT1 in this.controller.joints) {
          //this.controller.joints.hasOwnProperty(XRHandParts.INDEX.JOINT1)) {
          this.getPart(XRHandParts.INDEX.JOINT1)?.add(this.buildController(event.data)!);
          this.controller.userData.built = true;
          this.lastPosition.copy(this.controller.position);
        }
        // init move
      }
    }
  }

  onDisconnected(_event: BaseHandEvent<'disconnected'>) {
    this.connected = false;
    this.controller.removeEventListener('selectstart', this.onSelectStart);
    this.controller.removeEventListener('selectend', this.onSelectEnd);
    this.controller.removeEventListener('move', this._onMove);
    console.log('hand', this.controllerIndex, 'disconnected');
    // TODO: this is not reappearing
    // this.remove(this.children[0]);
  }

  lastPosition = new THREE.Vector3();
  moveVector = new THREE.Vector3();

  onMove(_info: { vector: THREE.Vector3 }) {
    //
  }

  _onMove() {
    console.log('pre move', this.controller.position.toArray().join());
    if (!this.lastPosition.equals(this.controller.position)) {
      // console.log('move', this.controller.position);
      this.moveVector.subVectors(this.controller.position, this.lastPosition);
      this.lastPosition.copy(this.controller.position);
      this.onMove({ vector: this.moveVector });
    }
  }

  pinchContext: THREE.Object3D | undefined;

  _onPinchStart(
    _event: THREE.Event & {
      type: 'pinchstart';
    } & {
      target: THREE.XRHandSpace;
    }
  ) {
    console.log('pinch'); //, target.name)
    // const indexTip = this.controller.joints['index-finger-tip'];
    // const target = this.collideObject(this.pinchContext, indexTip);
    // console.log('target', target); //, target.name)
    // if (target) {
    //   // console.log('pinch', target.name)
    //   this.grabbing = true;
    //   indexTip.attach(target);
    //   this.controller.userData.selected = target;
    //   console.log('Selected', target);
    //   this.onPinchStart({ type: 'pinchstart', target });
    // }
  }

  onPinchStart(_event: { type: 'pinchstart'; target: THREE.Mesh }) {
    //
  }
  onPinchEnd(_event: { type: 'pinchend'; target: THREE.Mesh }) {
    //
  }

  _onPinchEnd(
    event: THREE.Event & {
      type: 'pinchend';
    } & {
      target: THREE.XRHandSpace;
    }
  ) {
    const controller = event.target;

    if (controller.userData.selected !== undefined) {
      const target = controller.userData.selected;
      // target.material.emissive.b = 0;
      this.scene.attach(target);

      controller.userData.selected = undefined;
      this.grabbing = false;
      this.onPinchEnd({ type: 'pinchend', target: target });
    }

    // scaling.active = false;
  }

  onSelectStart() {
    this.controller.userData.selectPosition = this.getPart(XRHandParts.INDEX.TIP)?.position.clone();
    this.controller.userData.selectVelocity = new THREE.Vector3();
    this.isSelecting = true;
  }

  onSelectEnd() {
    // this.controller.userData.isSelecting = false;
    this.isSelecting = false;
  }

  getPart(key: string) {
    return this.controller.joints[key as XRHandJoint];
  }

  getLinearVelocity(renderer: THREE.WebGLRenderer): THREE.Vector3 | null {
    const frame = renderer.xr.getFrame();
    if (!frame) return null;

    const referenceSpace = renderer.xr.getReferenceSpace();
    if (!referenceSpace) return null;

    // Wrist is the most stable joint for velocity
    const wrist = this.getPart(XRHandParts.WRIST);
    if (!wrist) return null;

    const pose = frame.getPose(wrist as unknown as XRSpace, referenceSpace);
    if (!pose || !pose.linearVelocity) return null;

    const v = pose.linearVelocity; // DOMPointReadOnly

    return new THREE.Vector3(v.x, v.y, v.z);
  }
}

export const XRHandParts = {
  WRIST: 'wrist',
  THUMB: {
    KNUCKLE: 'thumb-metacarpal',
    JOINT1: 'thumb-phalanx-proximal',
    JOINT2: 'thumb-phalanx-distal',
    TIP: 'thumb-tip'
  },
  INDEX: {
    KNUCKLE: 'index-finger-metacarpal',
    JOINT1: 'index-finger-phalanx-proximal',
    JOINT2: 'index-finger-phalanx-intermediate',
    JOINT3: 'index-finger-phalanx-distal',
    TIP: 'index-finger-tip'
  },
  MIDDLE: {
    KNUCKLE: 'middle-finger-metacarpal',
    JOINT1: 'middle-finger-phalanx-proximal',
    JOINT2: 'middle-finger-phalanx-intermediate',
    JOINT3: 'middle-finger-phalanx-distal',
    TIP: 'middle-finger-tip'
  },
  RING: {
    KNUCKLE: 'ring-finger-metacarpal',
    JOINT1: 'ring-finger-phalanx-proximal',
    JOINT2: 'ring-finger-phalanx-intermediate',
    JOINT3: 'ring-finger-phalanx-distal',
    TIP: 'ring-finger-tip'
  },
  PINKY: {
    KNUCKLE: 'pinky-finger-metacarpal',
    JOINT1: 'pinky-finger-phalanx-proximal',
    JOINT2: 'pinky-finger-phalanx-intermediate',
    JOINT3: 'pinky-finger-phalanx-distal',
    TIP: 'pinky-finger-tip'
  }
};
