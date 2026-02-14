import * as THREE from 'three';
export type VelocityObject = THREE.Mesh<THREE.BufferGeometry, THREE.Material> & {
    userData?: UserData;
};
export declare function randomColor(): number;
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
export declare function createSphere({ radius, color, position, opacity }?: ObjectOptions): THREE.Mesh<THREE.SphereGeometry, THREE.MeshLambertMaterial> & {
    userData?: UserData;
};
export declare function createBox({ radius, color, position, opacity }?: ObjectOptions): THREE.Mesh<THREE.BoxGeometry, THREE.MeshStandardMaterial>;
export declare function createGridRoom(size?: number): THREE.LineSegments<THREE.BufferGeometry, THREE.LineBasicMaterial>;
export declare function generateRandomCanvasTexture(): THREE.CanvasTexture;
export declare function createInfinitePlane(y?: number, size?: number, repeat?: number): THREE.Mesh<THREE.PlaneGeometry, THREE.MeshLambertMaterial>;
export declare function createInfiniteColorPlane({ y, size, color }?: {
    y?: number;
    size?: number;
    color?: THREE.ColorRepresentation;
}): THREE.Mesh;
export declare function drawLine(points: THREE.Vector3[], color?: number): THREE.Line<THREE.BufferGeometry, THREE.LineBasicMaterial>;
export declare function buildAxis(): THREE.Object3D<THREE.Event>;
export declare function lookAtObject(looker: THREE.Object3D, o: THREE.Object3D, onComplete?: () => void): void;
export declare function lookAtPoint(looker: THREE.Object3D, o: THREE.Vector3, _onComplete?: () => void): void;
export declare function easeQuaternium(object: THREE.Object3D, quaternion: THREE.Quaternion, duration?: number): void;
export declare function lookAtObjectInstant(looker: THREE.Object3D, o: THREE.Object3D): void;
export declare function geomTube(P: THREE.Vector3, Q: THREE.Vector3, geometry?: THREE.BufferGeometry): THREE.BufferGeometry;
export {};
//# sourceMappingURL=XRUtils.d.ts.map