import * as THREE from 'three';
type BaseHandEvent<T> = THREE.Event & {
    type: T;
} & {
    target: THREE.XRHandSpace;
};
export declare class XRHand {
    raycaster: THREE.Raycaster;
    controllerIndex: number;
    controller: THREE.XRHandSpace;
    grip: THREE.XRGripSpace | undefined;
    isSelecting: boolean;
    tmpVector1: THREE.Vector3;
    tmpVector2: THREE.Vector3;
    scene: THREE.Scene | THREE.Object3D;
    grabbing: boolean;
    connected: boolean;
    self: this;
    constructor(controllerIndex: number, renderer: THREE.WebGLRenderer, scene: THREE.Scene | THREE.Object3D);
    buildController(data: {
        targetRayMode: string;
    }): THREE.Line<THREE.BufferGeometry, THREE.LineBasicMaterial> | THREE.Mesh<THREE.BufferGeometry, THREE.MeshBasicMaterial> | undefined;
    getSelectedObject(context: {
        children: THREE.Object3D<THREE.Event>[];
    }): THREE.Object3D<THREE.Event> | null;
    collideObject(context: THREE.Object3D, indexTip: THREE.XRJointSpace): THREE.Object3D | null;
    onConnected(event: BaseHandEvent<'connected'>): void;
    onDisconnected(_event: BaseHandEvent<'disconnected'>): void;
    lastPosition: THREE.Vector3;
    moveVector: THREE.Vector3;
    onMove(_info: {
        vector: THREE.Vector3;
    }): void;
    _onMove(): void;
    pinchContext: THREE.Object3D | undefined;
    _onPinchStart(_event: THREE.Event & {
        type: 'pinchstart';
    } & {
        target: THREE.XRHandSpace;
    }): void;
    onPinchStart(_event: {
        type: 'pinchstart';
        target: THREE.Mesh;
    }): void;
    onPinchEnd(_event: {
        type: 'pinchend';
        target: THREE.Mesh;
    }): void;
    _onPinchEnd(event: THREE.Event & {
        type: 'pinchend';
    } & {
        target: THREE.XRHandSpace;
    }): void;
    onSelectStart(): void;
    onSelectEnd(): void;
    getPart(key: string): THREE.XRJointSpace | undefined;
    getLinearVelocity(renderer: THREE.WebGLRenderer): THREE.Vector3 | null;
}
export declare const XRHandParts: {
    WRIST: string;
    THUMB: {
        KNUCKLE: string;
        JOINT1: string;
        JOINT2: string;
        TIP: string;
    };
    INDEX: {
        KNUCKLE: string;
        JOINT1: string;
        JOINT2: string;
        JOINT3: string;
        TIP: string;
    };
    MIDDLE: {
        KNUCKLE: string;
        JOINT1: string;
        JOINT2: string;
        JOINT3: string;
        TIP: string;
    };
    RING: {
        KNUCKLE: string;
        JOINT1: string;
        JOINT2: string;
        JOINT3: string;
        TIP: string;
    };
    PINKY: {
        KNUCKLE: string;
        JOINT1: string;
        JOINT2: string;
        JOINT3: string;
        TOP: string;
    };
};
export {};
//# sourceMappingURL=XRHand.d.ts.map