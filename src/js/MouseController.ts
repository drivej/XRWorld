import { Vector2 } from 'three';
import { CustomEventCallback, CustomEventManager, CustomEventOptions } from './CustomEventManager';

type MouseControllerPayload = { mouse: MouseController };

export type MouseControllerEvent = CustomEvent<MouseControllerPayload>;
export class MouseController {
  element: HTMLElement;
  rect: DOMRect;
  position = new Vector2(-9999999999, -9999999999);
  relative = new Vector2(-9999999999, -9999999999);
  down = { relative: new Vector2(), position: new Vector2() };
  move = { relative: new Vector2(), position: new Vector2() };
  drag = { relative: new Vector2(), position: new Vector2() };
  up = { relative: new Vector2(), position: new Vector2() };
  isDown = false;
  isOver = false;
  eventManager = new CustomEventManager<MouseControllerPayload>();
  initializedEvents: Record<string, boolean> = {};
  clientX = 0;
  clientY = 0;

  constructor(element: HTMLElement) {
    this.element = element;
    this.rect = this.element.getBoundingClientRect();
    window.addEventListener('resize', this.onResize.bind(this), false);
    window.addEventListener('wheel', this.onResize.bind(this), false);
  }

  initEvent(eventType: string) {
    if (!Object.hasOwnProperty.call(this.initializedEvents, eventType)) {
      this.initializedEvents[eventType] = true;
      switch (eventType) {
        case 'enter':
          this.element.addEventListener('pointerenter', this._onPointerEnter.bind(this), false);
          break;
        case 'down':
          this.element.addEventListener('pointerdown', this._onPointerDown.bind(this), false);
          break;
        case 'move':
          document.addEventListener('pointermove', this._onPointerMove.bind(this), false);
          break;
        case 'up':
          this.element.addEventListener('pointerup', this._onPointerUp.bind(this), false);
          break;
        case 'leave':
          this.element.addEventListener('pointerleave', this._onPointerLeave.bind(this), false);
          break;
      }
    }
  }

  on(eventType: 'up' | 'down' | 'move' | 'leave' | 'enter', callback: CustomEventCallback<MouseControllerPayload>, options: CustomEventOptions = {}) {
    this.initEvent(eventType);
    this.eventManager.on(eventType, callback, options);
  }

  off(eventType: 'up' | 'down' | 'move' | 'leave' | 'enter', callback?: CustomEventCallback<MouseControllerPayload>) {
    this.eventManager.off(eventType, callback);
  }

  onEnter(callback: CustomEventCallback<MouseControllerPayload>, options?: CustomEventOptions): MouseController {
    this.on('enter', callback, options);
    return this;
  }

  onLeave(callback: CustomEventCallback<MouseControllerPayload>, options?: CustomEventOptions): MouseController {
    this.on('leave', callback, options);
    return this;
  }

  onDown(callback: CustomEventCallback<MouseControllerPayload>, options?: CustomEventOptions): MouseController {
    this.on('down', callback, options);
    return this;
  }

  onMove(callback: CustomEventCallback<MouseControllerPayload>, options?: CustomEventOptions): MouseController {
    this.on('move', callback, options);
    return this;
  }

  onUp(callback: CustomEventCallback<MouseControllerPayload>, options?: CustomEventOptions): MouseController {
    this.on('up', callback, options);
    return this;
  }

  onClick(callback: CustomEventCallback<MouseControllerPayload>, options: CustomEventOptions = {}): MouseController {
    // Initialize down and up events so drag tracking works
    this.initEvent('down');
    this.initEvent('up');

    this.eventManager.on(
      'up',
      (e) => {
        if (e.mouse.drag.position.length() < 10) {
          callback(e);
        }
      },
      options
    );
    return this;
  }

  onResize() {
    this.rect = this.element.getBoundingClientRect();
    document.dispatchEvent(new MouseEvent('pointermove', { clientX: this.clientX, clientY: this.clientY }));
  }

  updatePointer(event: MouseEvent, updateClient = true) {
    if (updateClient) {
      this.clientX = event.clientX;
      this.clientY = event.clientY;
    }
    this.position.x = event.clientX - this.rect.left;
    this.position.y = event.clientY - this.rect.top;
    this.relative.x = (this.position.x / this.rect.width) * 2 - 1;
    this.relative.y = -(this.position.y / this.rect.height) * 2 + 1;
    this.isOver = this.position.x >= 0 && this.position.y >= 0 && this.position.x <= this.rect.width && this.position.y <= this.rect.height;
  }

  _onPointerEnter(event: MouseEvent) {
    event.preventDefault();
    this.isOver = true;
    this.eventManager.trigger('enter', { mouse: this });
  }

  _onPointerLeave(event: MouseEvent) {
    event.preventDefault();
    this.isOver = false;
    this.eventManager.trigger('leave', { mouse: this });
  }

  _onPointerDown(event: MouseEvent) {
    event.preventDefault();
    this.updatePointer(event);
    this.down.relative.copy(this.relative);
    this.down.position.copy(this.position);
    this.isDown = true;
    this.eventManager.trigger('down', { mouse: this });
    this.drag.relative.set(0, 0);
    this.drag.position.set(0, 0);
  }

  _onPointerMove(event: MouseEvent) {
    event.preventDefault();
    this.updatePointer(event);
    this.move.relative.copy(this.relative);
    this.move.position.copy(this.position);
    this.drag.position.subVectors(this.move.position, this.down.position);
    this.drag.relative.subVectors(this.move.relative, this.down.relative);
    this.eventManager.trigger('move', { mouse: this });
  }

  _onPointerUp(event: MouseEvent) {
    event.preventDefault();
    this.updatePointer(event);
    this.up.relative.copy(this.relative);
    this.up.position.copy(this.position);
    this.drag.position.subVectors(this.up.position, this.down.position);
    this.drag.relative.subVectors(this.up.relative, this.down.relative);
    this.isDown = false;
    this.eventManager.trigger('up', { mouse: this });
    this.relative.x = -9999999999;
    this.relative.y = -9999999999;
  }
}
