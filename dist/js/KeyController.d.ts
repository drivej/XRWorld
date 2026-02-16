import { CustomEventCallback, CustomEventManager, CustomEventOptions } from './CustomEventManager';
export declare enum KeyboardKeys {
    ArrowUp = "ArrowUp",
    ArrowDown = "ArrowDown",
    ArrowLeft = "ArrowLeft",
    ArrowRight = "ArrowRight",
    Space = " "
}
interface KeyboardKeyInfo {
    isDown: boolean;
    userData: Record<string, any>;
}
export type KeyboardControllerPayload = {
    keyboard: KeyController;
    key: string;
};
export declare class KeyController {
    status: Record<KeyboardKeys | string, KeyboardKeyInfo>;
    arrowIsDown: boolean;
    eventManager: CustomEventManager<KeyboardControllerPayload>;
    constructor();
    initStatus(key: KeyboardKeys | string): void;
    on(eventType: 'up' | 'down', callback: CustomEventCallback<KeyboardControllerPayload>, options?: CustomEventOptions): KeyController;
    off(eventType: 'up' | 'down', callback?: CustomEventCallback<KeyboardControllerPayload>): KeyController;
    onPress(key: KeyboardKeys | string, callback: CustomEventCallback<KeyboardControllerPayload>, options?: CustomEventOptions): KeyController;
    onRelease(key: KeyboardKeys | string, callback: CustomEventCallback<KeyboardControllerPayload>, options?: CustomEventOptions): KeyController;
    _onKeyDown(e: KeyboardEvent): void;
    _onKeyUp(e: KeyboardEvent): void;
    isDown(key: KeyboardKeys | string): boolean;
}
export {};
//# sourceMappingURL=KeyController.d.ts.map