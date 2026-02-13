import * as THREE from 'three';
import { XRWorld } from './XRWorld';
export declare class XRBackground {
    bgMesh: THREE.Mesh<THREE.BoxGeometry, THREE.ShaderMaterial> | null;
    world: XRWorld;
    constructor(world: XRWorld);
    remove(): void;
    buildSkyBox(images: string[]): void;
    buildSceneBackground(images: string[]): void;
    build360Background(image: string): void;
}
//# sourceMappingURL=XRBackground.d.ts.map