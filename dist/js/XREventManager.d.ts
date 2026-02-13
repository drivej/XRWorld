import { XRMouse } from './XRMouse';
import { XRRemote } from './XRRemote';
import { XRWorld } from './XRWorld';
export type XREventTarget = THREE.Mesh<THREE.BufferGeometry, THREE.MeshStandardMaterial>;
export declare enum XREventType {
    SELECT_START = "selectStart",
    SELECT_END = "selectEnd",
    CLICK = "click",
    DOWN = "down",
    OVER = "over",
    OUT = "out",
    UP = "up",
    ENTER = "enter",
    LEAVE = "leave",
    MOVE = "move"
}
export interface XREvent<T = XREventObject> {
    type: XREventType;
    target: T;
    intersection?: THREE.Intersection<THREE.Object3D<THREE.Event>>;
}
export interface XREventEntry {
    object: XREventTarget;
    callback(event: XREvent): void;
}
type XREventOptions = {
    once?: boolean;
    isClick?: boolean;
};
type XREventObject = THREE.Object3D<THREE.Event>;
export declare class XREventManager {
    world: XRWorld;
    lookup: Partial<Record<XREventType, Record<number, {
        object: XREventObject;
        callback: XREventEntry['callback'];
        options: XREventOptions;
    }>>>;
    lookupChildren: Partial<Record<XREventType, XREventObject[]>>;
    currentTargets: Partial<Record<XREventType, XREventObject>>;
    maxClickDistance: number;
    constructor(world: XRWorld);
    initController(remote: XRRemote): void;
    initMouse(mouse: XRMouse): void;
    onMouseDown: () => void;
    onMouseUp: () => void;
    renderEvents(delta: number): void;
    initEvent(eventType: XREventType): void;
    on(object: XREventObject, eventType: XREventType, callback: XREventEntry['callback'], options?: XREventOptions): void;
    off(object: XREventObject, eventType: XREventType, callback?: XREventEntry['callback']): void;
    getObjects(eventType: XREventType): XREventObject[];
    trigger(object: XREventObject, eventType: XREventType, intersection?: THREE.Intersection<THREE.Object3D<THREE.Event>>): void;
}
export {};
//# sourceMappingURL=XREventManager.d.ts.map