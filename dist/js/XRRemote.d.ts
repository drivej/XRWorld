import * as THREE from 'three';
type BaseRemoteEvent<T> = THREE.Event & {
    type: T;
} & {
    target: THREE.XRHandSpace;
};
export declare enum XRRemoteEventType {
    SELECT_START = "selectstart",
    SELECT_END = "selectend",
    MOVE = "move",
    CONNECTED = "connected",
    DISCONNECTED = "disconnected"
}
export type XRRemoteEvent = {
    ref: XRRemote;
    type: XRRemoteEventType;
    target: THREE.XRTargetRaySpace;
};
export declare class XRRemote<U extends Record<string, unknown> = Record<string, unknown>> {
    raycaster: THREE.Raycaster;
    controller: THREE.XRTargetRaySpace;
    grip: THREE.XRGripSpace;
    controllerIndex: number;
    isBuilt: boolean;
    isConnected: boolean;
    isSelecting: boolean;
    userData: U;
    constructor(controllerIndex: number, renderer: THREE.WebGLRenderer, scene: THREE.Scene | THREE.Object3D);
    buildController(data: {
        targetRayMode: string;
    }): THREE.Line<THREE.BufferGeometry, THREE.LineBasicMaterial> | THREE.Mesh<THREE.BufferGeometry, THREE.MeshBasicMaterial> | undefined;
    getSelectedObject(children: THREE.Object3D<THREE.Event>[], recursive?: boolean): THREE.Intersection<THREE.Object3D<THREE.Event>>;
    on(eventType: XRRemoteEventType, callback: (event: XRRemoteEvent) => void): XRRemote;
    off(eventType: XRRemoteEventType, callback: (event: XRRemoteEvent) => void): XRRemote;
    lastPosition: THREE.Vector3;
    moveVector: THREE.Vector3;
    onConnected(event: BaseRemoteEvent<'connected'>): void;
    onDisconnected(event: BaseRemoteEvent<'disconnected'>): void;
    private _onSelectStart;
    private _onSelectEnd;
}
export {};
//# sourceMappingURL=XRRemote.d.ts.map