import * as THREE from 'three';
// import { degToRad } from 'three/src/math/MathUtils';
import imgCityBlock from '../../assets/images/city-block.jpg';
// import { rand } from '../../js/Utils';
// import { XRWorld } from '../../js/XRWorld';
// import { Grid } from '../../utils/Grid';
import { Grid, rand, XRWorld } from '@drivej/xrworld';
import { Building } from './Building';

const metersPerFoot = 0.3048;
const laneWidth = 12 * metersPerFoot;
const shoulderWidth = 8 * metersPerFoot;
const cityBlockWidth = 265 * metersPerFoot;
const cityBlockDepth = cityBlockWidth; //900 * metersPerFoot;
const sidewalkWidth = 12 * metersPerFoot;
export const buildingFloorHeight = 4.5;
const curbHeight = 2;
// const cityCellWidth = cityBlockWidth + sidewalkWidth * 2 + laneWidth * 2 + shoulderWidth * 2;

interface CityConfig {
  rows?: number;
  columns?: number;
}

  const sideMaterial = new THREE.MeshStandardMaterial({
    color:0xCCCCCC,
    // roughness: 1.0,
    // metalness: 0.0
  });

export function createCityStreets(grid:Grid<any>){//y = 0, size = 13, repeat = 256) {

  const texture = new THREE.TextureLoader().load(imgCityBlock, () => {
    texture.needsUpdate = true;
  });
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  // texture.offset = new THREE.Vector2(grid.colWidth, grid.rowWidth)

  // texture.repeat.set(~~(width / asset.width), ~~(height / asset.height)); // width, height
  texture.repeat.set(grid.columns, grid.rows); // width, height

  const material = new THREE.MeshStandardMaterial({ map: texture });

  // let map = generateRandomCanvasTexture();
  // texture.repeat.set(repeat, repeat);
  texture.anisotropy = 16;
  // map.wrapT = THREE.RepeatWrapping;
  // map.wrapS = THREE.RepeatWrapping;
  // const geo = new THREE.PlaneGeometry(grid.width, grid.height);
  const geo = new THREE.BoxGeometry(grid.width, 1, grid.height);
  // const mat = new THREE.MeshLambertMaterial({ map:texture });
  // right, left, top, bottom, front, back
  const mesh = new THREE.Mesh(geo, [sideMaterial, sideMaterial, material, sideMaterial, sideMaterial, sideMaterial]);
  // mesh.position.set(0, 0.5, 0);
  // mesh.rotation.set(Math.PI / -2, 0, 0);
  return mesh;
}

export class City extends THREE.Group {
  buildings: THREE.Object3D[] = [];

  constructor(config: CityConfig = { rows: 10, columns: 10 }) {
    super();

    const grid = new Grid(
      config.rows, //
      config.columns,
      cityBlockWidth + sidewalkWidth * 2 + laneWidth * 2 + shoulderWidth * 2,
      cityBlockDepth + sidewalkWidth * 2 + laneWidth * 2 + shoulderWidth * 2
    );

    const streets = createCityStreets(grid);
    streets.position.set(grid.width * 0.5 - (grid.colWidth * 0.5), 0.5, grid.height * 0.5 - (grid.colWidth * 0.5))
    this.add(streets);
    this.buildings.push(streets);

    grid.cells.forEach((cell) => {
      const cityBlock = new THREE.Object3D();
      cityBlock.position.setX(cell.x);
      cityBlock.position.setZ(cell.y);

      // const sidewalk = roundedRect({ width: cityBlockWidth + sidewalkWidth * 2, height: cityBlockDepth + sidewalkWidth * 2, depth: curbHeight });
      // sidewalk.position.y = 0.5
      // cityBlock.add(sidewalk);
      
      const height = buildingFloorHeight * (20 + Math.pow(Math.random() * Math.pow(100, 1/3), 3));
      // const height = buildingFloorHeight * rand(4, 120, true);
      let buildingWidth = rand(cityBlockWidth * 0.5, cityBlockWidth, true);
      // buildingWidth = ~~(buildingWidth / 30) * 30;
      let buildingDepth = rand(cityBlockDepth * 0.5, cityBlockDepth, true);
      // buildingDepth = ~~(buildingDepth / 30) * 30;

      const building = new Building({ width: buildingWidth, height, depth: buildingDepth });
      // building.position.setX((cityBlockWidth - buildingWidth) * [-0.5, 0.5][rand(0, 1, true)]);
      // building.position.setZ((cityBlockDepth - buildingDepth) * [-0.5, 0.5][rand(0, 1, true)]);
      // building.position.y += curbHeight + 0.5;

      cityBlock.add(building);
      this.buildings.push(building);

      this.add(cityBlock);
    });
  }
}

// lane 12ft

// function createStreet(){
//   const geometry = new THREE.BoxGeometry(cityCellWidth, 1, cityCellWidth);
//   const texture = new THREE.TextureLoader().load(imgCityBlock, () => {
//     texture.needsUpdate = true;
//   });
//   const materialTop = new THREE.MeshStandardMaterial({ map: texture });
//   const material = new THREE.MeshStandardMaterial({
//     color:0xCCCCCC,
//     // roughness: 1.0,
//     // metalness: 0.0
//   });
//   // right, left, top, bottom, front, back
//   const box = new THREE.Mesh(geometry, [material, material, materialTop, material, material]);
//   // spawn.position.fromArray(position);
//   // spawn.geometry.computeBoundingSphere();
//   return box;
// }

export function generateCity(world: XRWorld, rows = 10, columns = 10) {
  const group = new THREE.Group();
  const buildings: Building[] = [];
  const grid = new Grid(rows, columns, cityBlockWidth + sidewalkWidth * 2 + laneWidth * 2 + shoulderWidth * 2, cityBlockDepth + sidewalkWidth * 2 + laneWidth * 2 + shoulderWidth * 2);

  grid.cells.forEach((cell) => {
    const cityBlock = new THREE.Object3D();
    cityBlock.position.setX(cell.x);
    cityBlock.position.setZ(cell.y);
    // cityBlock.castShadow = true;

    // const street = createStreet();
    // cityBlock.add(street);

    // const sidewalk = roundedRect({ width: cityBlockWidth + sidewalkWidth * 2, height: cityBlockDepth + sidewalkWidth * 2, depth: curbHeight });
    // cityBlock.add(sidewalk);
    // sidewalk.receiveShadow = true;

    // const s = createSphere({color:0xFF660FF, radius:1});
    // s.position.set(0,0,0);
    // cityBlock.add(s);

    const height = buildingFloorHeight * rand(4, 40, true);
    let buildingWidth = rand(cityBlockWidth * 0.5, cityBlockWidth, true);
    buildingWidth = ~~(buildingWidth / 30) * 30;
    let buildingDepth = rand(cityBlockDepth * 0.5, cityBlockDepth, true);
    buildingDepth = ~~(buildingDepth / 30) * 30;

    const building = new Building({ width: buildingWidth, height, depth: buildingDepth });
    building.position.setX((cityBlockWidth - buildingWidth) * [-0.5, 0.5][rand(0, 1, true)]);
    building.position.setZ((cityBlockDepth - buildingDepth) * [-0.5, 0.5][rand(0, 1, true)]);
    building.position.y += curbHeight;
    // building.castShadow = true;
    // building.position.setZ(cell.y);

    cityBlock.add(building);
    // world.scene.add(b);
    buildings.push(building);

    group.add(cityBlock);

    // world.eventManager.on(building, XREventType.CLICK, (event) => {
    // webHand = webHand === 0 ? 1 : 0;
    // if (webHand === 0) {
    //   spiderman.launchStrandLeft(event.intersection.point);
    // } else {
    //   spiderman.launchStrandRight(event.intersection.point);
    // }
    // console.log(event);
    // spiderman.launchStrandLeft(event.intersection.point);
    // });
  });
  world.scene.add(group);
  return buildings;
}

// function roundedRect({ width = 10, height = 10, depth = 1 }: { width?: number; height?: number; depth?: number }) {
//   const x = 0;
//   const y = 0;
//   // const width = 1;
//   // const height = 1.2;
//   const radius = 0.2;

//   // Create card shape
//   const shape = new THREE.Shape()
//     .moveTo(x, y + radius)
//     .lineTo(x, y + height - radius)
//     .quadraticCurveTo(x, y + height, x + radius, y + height)
//     .lineTo(x + width - radius, y + height)
//     .quadraticCurveTo(x + width, y + height, x + width, y + height - radius)
//     .lineTo(x + width, y + radius)
//     .quadraticCurveTo(x + width, y, x + width - radius, y)
//     .lineTo(x + radius, y)
//     .quadraticCurveTo(x, y, x, y + radius);

//   // Create card mesh
//   const extrudeSettings = {
//     // steps: 2,
//     depth,
//     bevelEnabled: false
//     // bevelThickness: 1,
//     // bevelSize: 1,
//     // bevelOffset: 0,
//     // bevelSegments: 1
//   };

//   const geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);
//   // const geometry = new THREE.ShapeGeometry(shape);
//   const material = new THREE.MeshStandardMaterial({ color: 0x666666 });
//   const mesh = new THREE.Mesh(geometry, material);
//   mesh.rotateX(degToRad(90));
//   mesh.position.setX(-width * 0.5);
//   mesh.position.setZ(-height * 0.5);
//   mesh.position.setY(extrudeSettings.depth);
//   return mesh;
//   // scene.add(mesh);
// }
