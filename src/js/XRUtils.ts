import gsap from 'gsap';
import * as THREE from 'three';
import { BoxLineGeometry } from 'three/examples/jsm/geometries/BoxLineGeometry';
// import { GUI } from 'three/examples/jsm/libs/lil-gui.module.min';
import { Grid } from '../utils/Grid';
import { ThemeColors } from './ThemeColors';
import { rand } from './Utils';

export type VelocityObject = THREE.Mesh<THREE.BufferGeometry, THREE.Material> & { userData?: UserData };

export function randomColor() {
  return Math.random() * 0xffffff;
}

interface ObjectOptions {
  radius?: number;
  color?: number;
  position?: number[];
  opacity?: number;
}

export interface UserData {
  velocity: THREE.Vector3;
  physics: boolean;
  selectable: boolean;
  color: number;
}

export function createSphere({ radius = rand(0.1, 0.3), color = randomColor(), position = [0, 0, 0], opacity = 1 }: ObjectOptions = {}) {
  // const radius = Math.random() * 0.3;
  // const fill = Math.floor(Math.random() * 0xffffff);
  const sphereGeometry = new THREE.SphereGeometry(radius, 32, 32);
  const sphereMaterial = new THREE.MeshLambertMaterial({ color, opacity, transparent: opacity < 1 });
  // const sphereMaterial = new THREE.MeshBasicMaterial({ color: fill, opacity:0.5, transparent:true });
  const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
  sphere.position.fromArray(position); // .set(rand(-5, 5), rand(-5, 5), rand(-5, 5));
  sphere.userData.color = sphereMaterial.color.getHex();
  sphere.userData.physics = false;
  sphere.userData.selectable = false;
  sphere.userData.velocity = new THREE.Vector3();
  return sphere as THREE.Mesh<THREE.SphereGeometry, THREE.MeshLambertMaterial> & { userData?: UserData };
}

export function createBox({ radius = rand(0.1, 0.5), color = randomColor(), position = [0, 0, 0], opacity = 1 }: ObjectOptions = {}) {
  const SphereRadius = radius;
  const geometry = new THREE.BoxGeometry(SphereRadius, SphereRadius, SphereRadius);
  const material = new THREE.MeshStandardMaterial({
    color,
    roughness: 1.0,
    metalness: 0.0,
    opacity,
    transparent: opacity < 1
  });
  const spawn = new THREE.Mesh(geometry, material);
  spawn.position.fromArray(position);
  spawn.geometry.computeBoundingSphere();
  return spawn;
}

export function createGridRoom(size = 10) {
  return new THREE.LineSegments(
    new BoxLineGeometry(size, size, size, size, size, size).translate(0, size * 0.5, 0), //
    new THREE.LineBasicMaterial({ color: 0x808080 })
  );
}

export function generateRandomCanvasTexture() {
  const g = new Grid<{ active: boolean }>(64, 64, 16);
  const colors = [
    // ThemeColors.turquiose, //
    // ThemeColors.turquiose_light,
    // ThemeColors.lichen,
    // ThemeColors.pink,
    // ThemeColors.purple,
    // ThemeColors.red,
    // ThemeColors.orange,
    ThemeColors.yellow
  ];

  const cvs = document.createElement('canvas');
  const ctx = cvs.getContext('2d')!;
  ctx.canvas.width = g.width;
  ctx.canvas.height = g.height;
  ctx.fillStyle = '#000';
  ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  ctx.fillStyle = '#FFF';

  let i = ~~(g.cells.length * 0.5);

  while (i--) {
    ctx.globalAlpha = Math.random() * 0.01;
    ctx.fillStyle = colors[rand(0, colors.length - 1, true)]; //'#' + (~~(Math.random() * 0xffffff)).toString(16);
    const cell = g.getRandomCell(
      (cell) => !cell.data.active,
      (cell) => (cell.data.active = true)
    );
    if (cell) {
      ctx.fillRect(cell.x, cell.y, cell.width, cell.height);
    }
  }

  i = ~~(g.cells.length * 0.01);
  ctx.fillStyle = [ThemeColors.pink, ThemeColors.purple][rand(0, 1, true)];
  while (i--) {
    ctx.globalAlpha = Math.random() * 0.1;
    ctx.fillStyle = [ThemeColors.pink, ThemeColors.purple][rand(0, 1, true)];
    const cell = g.getRandomCell(
      (cell) => !cell.data.active,
      (cell) => (cell.data.active = true)
    );
    if (cell) {
      ctx.fillRect(cell.x, cell.y, cell.width, cell.height);
    }
  }

  return new THREE.CanvasTexture(cvs);
}

export function createInfinitePlane(y = 0, size = 13, repeat = 256) {
  const map = generateRandomCanvasTexture();
  map.repeat.set(repeat, repeat);
  map.anisotropy = 1;
  map.wrapT = THREE.RepeatWrapping;
  map.wrapS = THREE.RepeatWrapping;
  const geo = new THREE.PlaneGeometry(Math.pow(2, size), Math.pow(2, size));
  const mat = new THREE.MeshLambertMaterial({ map });
  const mesh = new THREE.Mesh(geo, mat);
  mesh.position.set(0, y, 0);
  mesh.rotation.set(Math.PI / -2, 0, 0);
  return mesh;
}

export function createInfiniteColorPlane(y = 0, size = 13, _repeat = 256) {
  const geo = new THREE.PlaneGeometry(Math.pow(2, size), Math.pow(2, size));
  const mat = new THREE.MeshLambertMaterial({ color: 0x111111 });
  const mesh = new THREE.Mesh(geo, mat);
  mesh.position.set(0, y, 0);
  mesh.rotation.set(Math.PI / -2, 0, 0);
  return mesh;
}

export function drawLine(points: THREE.Vector3[], color = 0xff0000) {
  const material = new THREE.LineBasicMaterial({ color });
  const geometry = new THREE.BufferGeometry().setFromPoints(points);
  const line = new THREE.Line(geometry, material);
  return line;
}

// place a visual indicator of the origin and axis direction
// red => y, green  => x, blue -> z;
export function buildAxis() {
  const o = new THREE.Object3D();
  const l1 = drawLine([new THREE.Vector3(0, 0, 0), new THREE.Vector3(0, 10, 0)], 0xff0000);
  const l2 = drawLine([new THREE.Vector3(0, 0, 0), new THREE.Vector3(10, 0, 0)], 0x00ff00);
  const l3 = drawLine([new THREE.Vector3(0, 0, 0), new THREE.Vector3(0, 0, 10)], 0x0000ff);
  o.add(l1);
  o.add(l2);
  o.add(l3);
  return o;
}

const tmpPosition = new THREE.Vector3();

export function lookAtObject(looker: THREE.Object3D, o: THREE.Object3D, onComplete?: () => void) {
  if (looker === o) return;
  o.getWorldPosition(tmpPosition);
  lookAtPoint(looker, tmpPosition, onComplete);
}

export function lookAtPoint(looker: THREE.Object3D, o: THREE.Vector3, _onComplete?: () => void) {
  const startQuaternion = looker.quaternion.clone();
  looker.lookAt(o);
  const endQuaternion = looker.quaternion.clone();
  looker.quaternion.copy(startQuaternion);
  looker.userData.t = 0;
  easeQuaternium(looker, endQuaternion);
  gsap.to(looker.quaternion, { overwrite: 'auto', ease: 'power1.inOut', x: endQuaternion.x, y: endQuaternion.y, z: endQuaternion.z, w: endQuaternion.w });
}

export function easeQuaternium(object: THREE.Object3D, quaternion: THREE.Quaternion, duration = 1) {
  gsap.to(object.quaternion, { overwrite: 'auto', duration, ease: 'power1.inOut', x: quaternion.x, y: quaternion.y, z: quaternion.z, w: quaternion.w });
}

export function lookAtObjectInstant(looker: THREE.Object3D, o: THREE.Object3D) {
  gsap.killTweensOf(looker.userData);
  o.getWorldPosition(tmpPosition);
  looker.lookAt(tmpPosition);
}

// export function PointLightGUI(gui: GUI, object: THREE.PointLight) {
//   const folder = gui.addFolder(`Point Light: ${object.name}`);
//   folder.addColor({ color: object.color.getHex() }, 'color').onChange(function (val: number) {
//     object.color.setHex(val);
//   });
//   folder.add(object, 'intensity', 0, 10);
//   folder.add(object, 'distance', 50, 200);
//   folder.add(object, 'decay', 0, 100);
// }
//
// connect a tube from one point to another - requires object
//
// const geometry = geomTube(p1, p2);
// const cylinder = new THREE.Mesh(geometry, linkMaterial);
// world.scene.add(cylinder);
// tubes.push({ from: a1, to: a2, tube: cylinder });
//
// TODO: needs and update function that maintains the same geometry
const J = new THREE.Vector3(0, 1, 0);

const radius = 0.07;
const geomUnitCylinder = new THREE.CylinderGeometry(radius, radius, 1, 64, 1, true);
geomUnitCylinder.translate(0, 0.5, 0);
// const linkMaterial = new THREE.MeshStandardMaterial({ color: 0xffff00 });

export function geomTube(P: THREE.Vector3, Q: THREE.Vector3, geometry?: THREE.BufferGeometry) {
  const vec = Q.clone().sub(P);
  const h = vec.length();
  vec.normalize();
  const quaternion = new THREE.Quaternion().setFromUnitVectors(J, vec);
  geometry = geometry ?? (geomUnitCylinder.clone() as THREE.CylinderGeometry);
  geometry.scale(1, h, 1);
  geometry.applyQuaternion(quaternion);
  geometry.translate(P.x, P.y, P.z);
  return geometry;
}
