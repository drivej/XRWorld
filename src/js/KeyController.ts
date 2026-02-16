import * as THREE from 'three';
import { degToRad } from 'three/src/math/MathUtils';
import { CustomEventCallback, CustomEventManager, CustomEventOptions } from './CustomEventManager';

export enum KeyboardKeys {
  ArrowUp = 'ArrowUp',
  ArrowDown = 'ArrowDown',
  ArrowLeft = 'ArrowLeft',
  ArrowRight = 'ArrowRight',
  Space = ' '
}

interface KeyboardKeyInfo {
  isDown: boolean;
  userData: Record<string, any>;
}

export type KeyboardControllerPayload = { keyboard: KeyController; key: string };

export class KeyController {
  status: Record<KeyboardKeys | string, KeyboardKeyInfo> = {
    [KeyboardKeys.ArrowUp]: { isDown: false, userData: { axis: new THREE.Vector3(0, 0, 0), angle: 0 } },
    [KeyboardKeys.ArrowDown]: { isDown: false, userData: { axis: new THREE.Vector3(0, 1, 0), angle: degToRad(180) } },
    [KeyboardKeys.ArrowLeft]: { isDown: false, userData: { axis: new THREE.Vector3(0, 1, 0), angle: degToRad(90) } },
    [KeyboardKeys.ArrowRight]: { isDown: false, userData: { axis: new THREE.Vector3(0, 1, 0), angle: degToRad(-90) } }
  };
  arrowIsDown = false;
  eventManager = new CustomEventManager<KeyboardControllerPayload>();

  constructor() {
    document.addEventListener('keydown', this._onKeyDown.bind(this));
    document.addEventListener('keyup', this._onKeyUp.bind(this));
  }

  initStatus(key: KeyboardKeys | string) {
    if (!this.status.hasOwnProperty(key)) {
      this.status[key] = { isDown: false, userData: { axis: new THREE.Vector3(0, 0, 0), angle: 0 } };
    }
  }

  on(eventType: 'up' | 'down', callback: CustomEventCallback<KeyboardControllerPayload>, options: CustomEventOptions = {}): KeyController {
    this.eventManager.on(eventType, callback, options);
    return this;
  }

  off(eventType: 'up' | 'down', callback?: CustomEventCallback<KeyboardControllerPayload>): KeyController {
    this.eventManager.off(eventType, callback);
    return this;
  }

  onPress(key: KeyboardKeys | string, callback: CustomEventCallback<KeyboardControllerPayload>, options?: CustomEventOptions): KeyController {
    this.on(
      'down',
      (e) => {
        if (e.key === key) {
          callback(e);
        }
      },
      options
    );
    return this;
  }

  onRelease(key: KeyboardKeys | string, callback: CustomEventCallback<KeyboardControllerPayload>, options?: CustomEventOptions): KeyController {
    this.on(
      'up',
      (e) => {
        if (e.key === key) {
          callback(e);
        }
      },
      options
    );
    return this;
  }

  _onKeyDown(e: KeyboardEvent) {
    this.initStatus(e.key);
    this.status[e.key].isDown = true;
    this.eventManager.trigger('down', { keyboard: this, key: e.key });
  }

  _onKeyUp(e: KeyboardEvent) {
    this.initStatus(e.key);
    this.status[e.key].isDown = false;
    this.eventManager.trigger('up', { keyboard: this, key: e.key });
  }

  isDown(key: KeyboardKeys | string) {
    return this.status[key].isDown;
  }
}
