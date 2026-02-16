import { Vector2 } from 'three';
import { CustomEventCallback, CustomEventManager, CustomEventOptions } from './CustomEventManager';
type Payload = {
    mouse: MouseController;
};
export declare class MouseController {
    element: HTMLElement;
    rect: DOMRect;
    position: Vector2;
    relative: Vector2;
    down: {
        relative: Vector2;
        position: Vector2;
    };
    move: {
        relative: Vector2;
        position: Vector2;
    };
    drag: {
        relative: Vector2;
        position: Vector2;
    };
    up: {
        relative: Vector2;
        position: Vector2;
    };
    isDown: boolean;
    isOver: boolean;
    eventManager: CustomEventManager<Payload>;
    initializedEvents: Record<string, boolean>;
    clientX: number;
    clientY: number;
    constructor(element: HTMLElement);
    initEvent(eventType: string): void;
    on(eventType: 'up' | 'down' | 'move' | 'leave' | 'enter', callback: CustomEventCallback<Payload>, options?: CustomEventOptions): void;
    off(eventType: 'up' | 'down' | 'move' | 'leave' | 'enter', callback: CustomEventCallback<Payload>): void;
    onEnter(callback: CustomEventCallback<Payload>, options?: CustomEventOptions): MouseController;
    onLeave(callback: CustomEventCallback<Payload>, options?: CustomEventOptions): MouseController;
    onDown(callback: CustomEventCallback<Payload>, options?: CustomEventOptions): MouseController;
    onMove(callback: CustomEventCallback<Payload>, options?: CustomEventOptions): MouseController;
    onUp(callback: CustomEventCallback<Payload>, options?: CustomEventOptions): MouseController;
    onClick(callback: CustomEventCallback<Payload>, options?: CustomEventOptions): MouseController;
    onResize(): void;
    updatePointer(event: MouseEvent, updateClient?: boolean): void;
    _onPointerEnter(event: MouseEvent): void;
    _onPointerLeave(event: MouseEvent): void;
    _onPointerDown(event: MouseEvent): void;
    _onPointerMove(event: MouseEvent): void;
    _onPointerUp(event: MouseEvent): void;
}
export {};
//# sourceMappingURL=MouseController.d.ts.map