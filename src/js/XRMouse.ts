import * as THREE from 'three';

export class XRMouse {
  camera: THREE.PerspectiveCamera;
  canvas: HTMLCanvasElement;
  rect: DOMRect;
  raycaster = new THREE.Raycaster();
  mouse = { x: -9999999999, y: -9999999999 };
  mouseMove = new THREE.Vector2();
  mouseDown = new THREE.Vector2();
  mouseUp = new THREE.Vector2();
  isDown = false;
  target = null;
  // INTERSECTED;
  onDown: (obj: XRMouse) => void = () => void 0;
  onMove: (obj: XRMouse) => void = () => void 0;
  onUp: (obj: XRMouse) => void = () => void 0;

  constructor(canvas: HTMLCanvasElement, camera: THREE.PerspectiveCamera) {
    this.canvas = canvas;
    this.camera = camera;
    this.rect = this.canvas.getBoundingClientRect();
    window.addEventListener('mousedown', this.onDocumentMouseDown.bind(this), false);
    window.addEventListener('mouseup', this.onDocumentMouseUp.bind(this), false);
    window.addEventListener('mousemove', this.onDocumentMouseMove.bind(this), false);
    window.addEventListener('resize', this.onResize.bind(this), false);
  }

  onResize() {
    this.rect = this.canvas.getBoundingClientRect();
  }

  updateMouse(event: MouseEvent) {
    const x = event.clientX - this.rect.left;
    const y = event.clientY - this.rect.top;
    this.mouse.x = (x / this.rect.width) * 2 - 1;
    this.mouse.y = -(y / this.rect.height) * 2 + 1;
    return { x, y };
  }

  onDocumentMouseDown(event: MouseEvent) {
    event.preventDefault();
    const p = this.updateMouse(event);
    this.mouseDown.set(p.x, p.y);
    this.isDown = true;
    this.onDown(this);
  }

  onDocumentMouseUp(event: MouseEvent) {
    event.preventDefault();
    const p = this.updateMouse(event);
    this.mouseUp.set(p.x, p.y);
    this.isDown = false;
    this.onUp(this);
    this.mouse.x = -9999999999;
    this.mouse.y = -9999999999;
  }

  onDocumentMouseMove(event: MouseEvent) {
    event.preventDefault();
    const p = this.updateMouse(event);
    this.mouseMove.set(p.x, p.y);
    this.onMove(this);
  }

  // THREE.Mesh<THREE.BufferGeometry, THREE.MeshStandardMaterial>
  getSelectedObject(children: THREE.Object3D<THREE.Event>[], recursive = false): null | THREE.Intersection<THREE.Object3D<THREE.Event>> {
    this.raycaster.setFromCamera(this.mouse, this.camera);
    const intersects = this.raycaster.intersectObjects(children, recursive);
    let INTERSECTED = null;
    if (intersects.length > 0) {
      INTERSECTED = intersects[0]; //.object;
    }
    return INTERSECTED;
  }
}
