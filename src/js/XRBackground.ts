import * as THREE from 'three';
import { lerp } from 'three/src/math/MathUtils';
import { XRWorld } from './XRWorld';

export class XRBackground {
  bgMesh: THREE.Mesh<THREE.BoxGeometry, THREE.ShaderMaterial> | null = null;
  world: XRWorld;

  constructor(world: XRWorld) {
    this.world = world;
  }

  // build(images: string | string[], type: 'scene' | 'skybox' | '360' = 'scene') {
  //   switch(type){
  //     case 'skybox' :
  //       this.buildSkyBox(images);
  //       break;
  //     case '360' :
  //       this.build360Background(images);
  //       break;
  //     case 'scene' :
  //       this.buildSceneBackground(images);
  //       break;
  //   }

  //   if (Array.isArray(images) && images.length === 6) {
  //     this.buildSkyBox(images);
  //   } else if (typeof images === 'string') {
  //     this.build360Background(images);
  //   }
  // }

  // remove previos background
  remove() {
    this.world.scene.background = null;
    if (this.bgMesh) {
      this.world.scene.remove(this.bgMesh);
      this.bgMesh = null;
    }
  }

  // more efficient
  buildSkyBox(images: string[]) {
    this.remove();
    const size = ~~lerp(this.world.camera.near, this.world.camera.far, 0.5);
    const geometry = new THREE.BoxGeometry(size, size, size);
    const mesh = new THREE.Mesh(
      geometry,
      images.map((img) => {
        return new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load(img), side: THREE.BackSide });
      })
    );
    this.world.scene.add(mesh);
  }

  buildSceneBackground(images: string[]) {
    const loader = new THREE.CubeTextureLoader();
    const texture = loader.load(images);
    texture.transformUv(new THREE.Vector2(100, 0.5));
    this.world.scene.background = texture;
  }

  // TODO: handle cross style skybox
  // buildSkyBox2(image:string){
  //   for ( var i = 0; i < 6; i ++ ) {
  //     t[i] = THREE.ImageUtils.loadTexture( imgData ); //2048x256
  //     t[i].repeat.x  = 1 / 8;
  //     t[i].offset.x = i / 8;
  //   }
  // }

  // less efficient
  build360Background(image: string) {
    this.remove();
    const loader = new THREE.TextureLoader();
    const texture = loader.load(image);
    texture.magFilter = THREE.LinearFilter;
    texture.minFilter = THREE.LinearFilter;

    // const shader = THREE.ShaderLib.equirect;
    const material = new THREE.ShaderMaterial({
      // fragmentShader: shader.fragmentShader,
      // vertexShader: shader.vertexShader,
      // uniforms: shader.uniforms,
      // depthWrite: false,
      side: THREE.BackSide
    });
    // material.uniforms.tEquirect.value = texture;
    const size = ~~lerp(this.world.camera.near, this.world.camera.far, 0.5);
    const plane = new THREE.BoxGeometry(size, size, size);
    this.bgMesh = new THREE.Mesh(plane, material);
    this.world.scene.add(this.bgMesh);
  }
}
