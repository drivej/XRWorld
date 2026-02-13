import { createSphere, UserData } from '@drivej/xrworld';
import gsap from 'gsap';
import * as THREE from 'three';
import { Ease } from './Ease';
import { Ligament } from './Ligament';

export class WebShooter extends THREE.Object3D {
  fromPoint = new THREE.Vector3();
  toPoint = new THREE.Vector3();
  initialLength = 0;
  staticLength = 0;
  line = new THREE.Line(new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(), new THREE.Vector3()]), new THREE.LineBasicMaterial({ color: 0xcccccc }));
  _active = false;
  maxForce = 0.075;
  elasticity = 0.2;
  forceFactor = 0.03;
  currentPoint = new THREE.Vector3();
  currentVector = new THREE.Vector3();
  fromObject: THREE.Mesh<THREE.SphereGeometry, THREE.MeshLambertMaterial> & { userData?: UserData };
  toObject: THREE.Mesh<THREE.SphereGeometry, THREE.MeshLambertMaterial> & { userData?: UserData };
  webbing;
  speed = 500 / 1; // meters/second

  constructor() {
    super();
    this.fromObject = createSphere({ color: 0xccff00, radius: 0.2 });
    this.toObject = createSphere({ color: 0x00ffcc, radius: 0.2 });
    this.add(this.fromObject);
    this.add(this.toObject);
    this.webbing = new Ligament();
    this.add(this.webbing);
  }

  launch(fromPoint: THREE.Vector3, toPoint: THREE.Vector3) {
    this.fromPoint = fromPoint.clone();
    this.toPoint = toPoint.clone();
    this.initialLength = this.fromPoint.distanceTo(this.toPoint);
    this.staticLength = this.initialLength * this.elasticity;
    this.currentPoint = fromPoint.clone();
    this.active = false;

    // flying time
    gsap.to(this.currentPoint, {
      overwrite: true,
      x: this.toPoint.x,
      y: this.toPoint.y,
      z: this.toPoint.z,
      duration: this.distance() / this.speed,
      ease: Ease.power1.out,
      onComplete: () => {
        this.active = true;
      }
    });
  }

  direction() {
    return this.toPoint.clone().sub(this.fromPoint);
  }

  distance() {
    return this.fromPoint.distanceTo(this.toPoint);
  }

  getVector(fromPoint: THREE.Vector3) {
    const v = new THREE.Vector3();
    if (this.active) {
      this.fromPoint = fromPoint.clone();
      v.subVectors(this.fromPoint, this.toPoint);
      const d = v.length();
      const e = this.staticLength - d;
      v.normalize()
        .multiplyScalar(e * this.forceFactor)
        .clampLength(-this.maxForce, this.maxForce);
    }
    return v;
  }

  updateLine() {
    if (this.active) {
      const positions = this.line.geometry.attributes.position.array as Float32Array;
      positions[0] = this.fromPoint.x;
      positions[1] = this.fromPoint.y;
      positions[2] = this.fromPoint.z;
      positions[3] = this.currentPoint.x;
      positions[4] = this.currentPoint.y;
      positions[5] = this.currentPoint.z;
      this.line.geometry.attributes.position.needsUpdate = true;
    }
  }

  render() {
    this.webbing.to(this.toPoint);
  }

  set active(val: boolean) {
    this._active = val;
    if (val) {
      this.line.visible = true;
    } else {
      this.line.visible = false;
    }
  }

  get active() {
    return this._active;
  }

  release() {
    this.active = false;
    this.currentPoint.copy(this.fromPoint);
  }
}
