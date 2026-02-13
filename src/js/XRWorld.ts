import * as THREE from 'three';
// import { FirstPersonControls } from './FirstPersonControls2';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { VRButton } from 'three/examples/jsm/webxr/VRButton';
// import { FirstPersonControls } from './FirstPersonControls2';
import { XRBackground } from './XRBackground';
import { XREventManager } from './XREventManager';
import { XRHand } from './XRHand';
import { XRMouse } from './XRMouse';
import { XRRemote } from './XRRemote';

// futre state: https://www.halfbaked.city/tutorials/user-inputs-part-3

// const clock = new THREE.Clock();
const tempMatrix = new THREE.Matrix4();

// interface IObjectInfoItem<T = Record<string, string | number>> {
//   object: THREE.Object3D;
//   action?: string;
//   data: T;
// }

// interface IObjectInfo {
//   faceCamera: THREE.Mesh<THREE.BufferGeometry, THREE.Material | THREE.MeshStandardMaterial>[];
//   pointerDown: THREE.Mesh<THREE.BufferGeometry, THREE.Material | THREE.MeshStandardMaterial>[];
//   click: THREE.Mesh<THREE.BufferGeometry, THREE.Material | THREE.MeshStandardMaterial>[];
// }

export class XRWorld {
  clock = new THREE.Clock();
  scene: THREE.Scene;
  // container: HTMLDivElement;
  camera: THREE.PerspectiveCamera;
  // room: THREE.Object3D; // THREE.LineSegments<THREE.BufferGeometry, THREE.LineBasicMaterial>;
  dolly: THREE.Object3D; // THREE.LineSegments<THREE.BufferGeometry, THREE.LineBasicMaterial>;
  dummyCam: THREE.Object3D;
  renderer: THREE.WebGLRenderer;
  tmpPosition = new THREE.Vector3();
  sessionActive = false;
  rightHand: XRHand;
  leftHand: XRHand;
  rightController: XRRemote;
  leftController: XRRemote;
  selectedObjectRight!: THREE.Mesh<THREE.BufferGeometry, THREE.MeshStandardMaterial>;
  selectedObjectLeft!: THREE.Mesh<THREE.BufferGeometry, THREE.MeshStandardMaterial>;
  controls!: OrbitControls;
  animateRequest!: number;
  mouse!: XRMouse;
  raycaster = new THREE.Raycaster();
  background: XRBackground;
  VRSessionActive = false;
  audioListener: THREE.AudioListener;
  eventManager: XREventManager;
  mouseInitialized: boolean = false;
  globalForces = new THREE.Vector3(0, -0.1, 0);
  friction = 0.95;
  controllersInitialized = false;
  handsInitialized: boolean = false;
  // fpc!: FirstPersonControls;
  private _session!: XRSession | null;
  vrButton: HTMLElement;

  constructor() {
    this.getCameraObject = this.getCameraObject.bind(this);

    // this.container = document.createElement('div');
    // document.body.appendChild(this.container);

    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x111111);

    this.background = new XRBackground(this);

    this.camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 2000);
    this.camera.position.set(0, 1.6, 0);

    this.audioListener = new THREE.AudioListener();
    this.camera.add(this.audioListener);
    // this.camera.addEventListener('connected', (e) => console.log('camera connected', e.type, e));
    // this.scene.add(this.camera);

    this.dolly = new THREE.Object3D();
    // this.dolly.position.z = 5;
    this.dolly.add(this.camera);
    this.scene.add(this.dolly);
    this.dummyCam = new THREE.Object3D();
    this.camera.add(this.dummyCam);

    // this.fpc = new FirstPersonControls(this.camera, this.container);
    // this.fpc.lookSpeed = 0.2;
    // this.fpc.movementSpeed = 5;
    // this.fpc.constrainVertical = true;
    // this.fpc.activeLook = true;
    // this.fpc.mouseDragOn = true;

    // this.room = new THREE.Object3D(); // new THREE.LineSegments(new BoxLineGeometry(10, 10, 10, 10, 10, 10).translate(0, 5, 0), new THREE.LineBasicMaterial({ color: 0x808080 }));
    // this.scene.add(this.room);

    // lighting
    this.scene.add(new THREE.HemisphereLight(0x606060, 0x404040));
    const light = new THREE.DirectionalLight(0xffffff);
    light.position.set(1, 1, 1).normalize();
    // light.castShadow = true;
    this.scene.add(light);

    light.shadow.mapSize.width = 512; // default
    light.shadow.mapSize.height = 512; // default
    light.shadow.camera.near = 0.5; // default
    light.shadow.camera.far = 1500; // default

    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    this.renderer.setPixelRatio(window.devicePixelRatio);
    // this.renderer.setSize(window.innerWidth, window.innerHeight);
    // this.renderer.setClearColor(0x222222, 1);
    this.renderer.outputEncoding = THREE.sRGBEncoding;
    this.renderer.xr.enabled = true;
    // this.renderer.xr.getSession().end();
    // this.container.appendChild(this.renderer.domElement);

    this.renderer.xr.addEventListener('sessionstart', this.onSessionStart.bind(this));
    this.renderer.xr.addEventListener('sessionend', this.onSessionEnd.bind(this));

    this.rightHand = new XRHand(1, this.renderer, this.dolly);
    this.leftHand = new XRHand(0, this.renderer, this.dolly);

    this.rightController = new XRRemote(1, this.renderer, this.dolly);
    this.leftController = new XRRemote(0, this.renderer, this.dolly);

    // this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    // // this.controls.enableDamping = true;
    // this.controls.enablePan = false;
    // this.controls.enableZoom = false;
    // this.controls.update();

    this.eventManager = new XREventManager(this);

    // window.addEventListener('resize', this.onWindowResize.bind(this));
    // this.onWindowResize();
    // document.body.appendChild(VRButton.createButton(this.renderer));
    this.vrButton = VRButton.createButton(this.renderer);
    this.render();

    this.startAnimate();
  }

  set gravity(val: number) {
    this.globalForces.setY(val);
  }

  get gravity() {
    return this.globalForces.y;
  }

  orbitControlsActive = false;

  initOrbitControls() {
    if (!this.orbitControlsActive) {
      this.orbitControlsActive = true;
      this.controls = new OrbitControls(this.camera, this.renderer.domElement);
      // this.controls.enableDamping = true;
      // this.controls.enablePan = false;
      // this.controls.enableZoom = false;
      this.controls.update();
    }
  }

  initMouse() {
    if (!this.mouseInitialized) {
      this.mouseInitialized = true;
      this.mouse = new XRMouse(this.renderer.domElement, this.camera);
      this.eventManager.initMouse(this.mouse);
    }
  }

  initControllers() {
    if (!this.controllersInitialized) {
      console.log('initControllers');
      this.controllersInitialized = true;
      this.eventManager.initController(this.leftController);
      this.eventManager.initController(this.rightController);
      // this.scene.add(this.leftController.controller);
      // this.scene.add(this.rightController.controller);
      // this.scene.add(this.leftController.grip);
      // this.scene.add(this.rightController.grip);
    }
  }

  disposeControllers() {
    console.log('disposeControllers');
    this.controllersInitialized = false;
    // this.scene.add(this.leftController.controller);
    // this.scene.add(this.rightController.controller);
    // this.scene.add(this.leftController.grip);
    // this.scene.add(this.rightController.grip);
  }

  initHands() {
    if (!this.handsInitialized) {
      this.handsInitialized = true;
      this.scene.add(this.rightHand.controller);
      this.scene.add(this.leftHand.controller);
    }
  }

  disposeHands() {
    this.scene.remove(this.rightHand.controller);
    this.scene.remove(this.leftHand.controller);
  }

  keyInfo: Record<string, { isDown: boolean; downTime: number; speed: 0 }> = {
    ArrowRight: { isDown: false, downTime: 0, speed: 0 },
    ArrowLeft: { isDown: false, downTime: 0, speed: 0 },
    ArrowUp: { isDown: false, downTime: 0, speed: 0 },
    ArrowDown: { isDown: false, downTime: 0, speed: 0 }
  };

  initArrows() {
    document.addEventListener('keydown', this.handleKeyDown.bind(this));
    document.addEventListener('keyup', this.handleKeyDown.bind(this));
  }

  handleKeyDown(e: KeyboardEvent) {
    switch (e.key) {
      case 'ArrowRight':
      case 'ArrowLeft':
      case 'ArrowUp':
      case 'ArrowDown':
        switch (e.type) {
          case 'keydown':
            // prevent key repeats
            if (!this.keyInfo[e.key].isDown) {
              this.keyInfo[e.key].isDown = true;
              this.keyInfo[e.key].downTime = Date.now();
              this.keyInfo[e.key].speed = 0;
            }
            break;
          case 'keyup':
            if (this.keyInfo[e.key].isDown) {
              this.keyInfo[e.key].isDown = false;
              this.keyInfo[e.key].speed = 0;
            }
            break;
        }
    }
  }

  getCameraObject(context: { children: THREE.Object3D<THREE.Event>[] } = this.scene): THREE.Object3D<THREE.Event> | null {
    if (this.camera) {
      tempMatrix.identity().extractRotation(this.camera.matrixWorld); // TODO: change to finger tip
      this.raycaster.ray.origin.setFromMatrixPosition(this.camera.matrixWorld);
      this.raycaster.ray.direction.set(0, 0, -1).applyMatrix4(tempMatrix);
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
    }
    return null;
  }

  lookAt(object: THREE.Object3D) {
    const p = new THREE.Vector3();
    object.getWorldPosition(p);
    this.camera.lookAt(p);
  }

  // delta is the fraction of a section that has passed since the last render
  beforeRender = (_delta: number) => {
    //
  };

  onSessionStart() {
    this._session = this.renderer.xr.getSession() as XRSession;
    console.log('onSessionStart');

    // let inputSources = this._session.inputSources;
    //     for(let i = 0; i < inputSources.length; i++) {
    //         if(inputSources[i].handedness == "right") {
    //             this._rightXRInputSource = inputSources[i];
    //         } else if(inputSources[i].handedness == "left") {
    //             this._leftXRInputSource = inputSources[i];
    //         }
    //     }

    this.controls.enabled = false;
    this.VRSessionActive = true;
    this.endAnimate();
    this.renderer.setAnimationLoop(this.render.bind(this));
  }

  onSessionEnd() {
    console.log('onSessionEnd');
    this._session = null;
    this.controls.enabled = true;
    this.VRSessionActive = false;
    this.startAnimate();
    this.renderer.setAnimationLoop(null);
  }

  startAnimate() {
    console.log('startAnimate');
    // this.animateRequest = requestAnimationFrame(this.render.bind(this));
    this.animate();
  }

  animate() {
    this.animateRequest = requestAnimationFrame(this.animate.bind(this));
    this.render();
  }

  endAnimate() {
    console.log('endAnimate');
    cancelAnimationFrame(this.animateRequest);
  }

  // onWindowResize() {
  //   const width = window.innerWidth;
  //   const height = window.innerHeight;
  //   this.camera.aspect = width / height;
  //   this.camera.updateProjectionMatrix();
  //   this.renderer.setSize(width, height);
  //   // this.fpc?.handleResize();
  // }

  setSize(width: number, height: number) {
    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(width, height);
  }

  setSelectedObjectRight(obj: THREE.Mesh<THREE.BufferGeometry, THREE.MeshStandardMaterial>) {
    if (obj === this.selectedObjectRight) return;
    if (this.selectedObjectRight) {
      this.selectedObjectRight.material.color.setHex(this.selectedObjectRight.userData.color);
    }
    this.selectedObjectRight = obj;
    if (obj) {
      obj.material.color.setHex(0xff6600);
    }
  }

  setSelectedObjectLeft(obj: THREE.Mesh<THREE.BufferGeometry, THREE.MeshStandardMaterial>) {
    if (obj === this.selectedObjectLeft) return;
    if (this.selectedObjectLeft) {
      this.selectedObjectLeft.material.color.setHex(this.selectedObjectLeft.userData.color);
    }
    this.selectedObjectLeft = obj;
    if (obj) {
      obj.material.color.setHex(0xff6600);
    }
  }

  setSelectedObjectMouse() {
    //
  }

  direction = new THREE.Vector3();

  render() {
    const delta = this.clock.getDelta();
    this.beforeRender(delta);

    // if (this.keyInfo['ArrowUp'].isDown === true) {
    //   this.keyInfo['ArrowUp'].speed += 0.01;
    //   // this.camera.translateX(this.keyInfo['ArrowUp'].speed);

    //   // this.controls.target.getWorldDirection(this.direction);
    //   // this.direction.q
    //   // this.direction.multiplyScalar(this.keyInfo['ArrowUp'].speed);

    //   // this.controls.target.add(this.direction);
    //   // this.controls.target.add(this.direction);
    // }

    // if (this.objectInfo.faceCamera.length > 0) {
    //   this.camera.getWorldPosition(this.tmpPosition);
    //   // this.objectInfo.faceCamera.forEach((o) => o.lookAt(this.tmpPosition));
    //   this.objectInfo.faceCamera.forEach((o) => {
    //     // o.object.lookAt(this.tmpPosition);
    //     // const quaternion = new THREE.Quaternion();
    //     // quaternion.slerpQuaternions
    //     const f = (o.userData?.speed ?? 50) * delta;
    //     const dx = this.camera.quaternion.x - o.quaternion.x;
    //     const tx = o.quaternion.x + dx / f; //o.quaternion.x + (Math.abs(dx)>degToRad(1) ?  dx/2 : 1)
    //     const dy = this.camera.quaternion.y - o.quaternion.y;
    //     const ty = o.quaternion.y + dy / f; //o.quaternion.x + (Math.abs(dx)>degToRad(1) ?  dx/2 : 1)
    //     const dz = this.camera.quaternion.z - o.quaternion.z;
    //     const tz = o.quaternion.z + dz / f; //o.quaternion.x + (Math.abs(dx)>degToRad(1) ?  dx/2 : 1)
    //     const dw = this.camera.quaternion.w - o.quaternion.w;
    //     const tw = o.quaternion.w + dw / f; //o.quaternion.x + (Math.abs(dx)>degToRad(1) ?  dx/2 : 1)

    //     // o.object.quaternion.set(tx, ty, tz, tw);

    //     // o.quaternion.lerp
    //     o.quaternion.rotateTowards(this.camera.quaternion, 0.01 * delta);
    //   });
    // }

    // if (this.objectInfo.click.length > 0) {
    //   this.camera.getWorldPosition(this.tmpPosition);
    //   this.objectInfo.faceCamera.forEach((o) => o.lookAt(this.tmpPosition));
    // }

    this.renderer.render(this.scene, this.camera);
    // this.fpc?.update(delta);
    if (this.orbitControlsActive === true) this.controls.update();
  }
}
