import * as THREE from 'three';
export declare class XRMouse {
    camera: THREE.PerspectiveCamera;
    canvas: HTMLCanvasElement;
    rect: DOMRect;
    raycaster: THREE.Raycaster;
    mouse: {
        x: number;
        y: number;
    };
    mouseMove: THREE.Vector2;
    mouseDown: THREE.Vector2;
    mouseUp: THREE.Vector2;
    isDown: boolean;
    target: null;
    onDown: (obj: XRMouse) => void;
    onMove: (obj: XRMouse) => void;
    onUp: (obj: XRMouse) => void;
    constructor(canvas: HTMLCanvasElement, camera: THREE.PerspectiveCamera);
    onResize(): void;
    updateMouse(event: MouseEvent): {
        x: number;
        y: number;
    };
    onDocumentMouseDown(event: MouseEvent): void;
    onDocumentMouseUp(event: MouseEvent): void;
    onDocumentMouseMove(event: MouseEvent): void;
    getSelectedObject(children: THREE.Object3D<THREE.Event>[], recursive?: boolean): null | THREE.Intersection<THREE.Object3D<THREE.Event>>;
}
//# sourceMappingURL=XRMouse.d.ts.map