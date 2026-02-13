export type CustomEvent<P> = { type: string } & P;
export type CustomEventOptions = { once?: boolean };
export type CustomEventCallback<P> = (event: CustomEvent<P>) => void;
export type CustomEventItem<P> = { callback: CustomEventCallback<P>; options: CustomEventOptions };

export class CustomEventManager<P = Record<string, unknown>> {
  lookup: Record<string, CustomEventItem<P>[]> = {};

  initEvent(eventType: string) {
    if (!Object.hasOwnProperty.call(this.lookup, eventType)) {
      this.lookup[eventType] = this.lookup?.[eventType] ?? [];
    }
  }

  on(eventType: string, callback: CustomEventCallback<P>, options: CustomEventOptions) {
    this.initEvent(eventType);
    this.lookup[eventType].push({ callback, options });
  }

  off(eventType: string, callback?: CustomEventCallback<P>) {
    this.initEvent(eventType);
    if (callback) {
      const i = this.lookup[eventType].findIndex((e) => e.callback === callback);
      if (i > -1) {
        this.lookup[eventType].splice(i, 1);
      }
    } else {
      this.lookup[eventType] = [];
    }
  }

  trigger(eventType: string, payload?: P) {
    this.initEvent(eventType);
    this.lookup[eventType].forEach((e) => e.callback({ type: eventType, ...(payload ?? {}) } as CustomEvent<P>));
  }
}
