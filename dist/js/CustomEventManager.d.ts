export type CustomEvent<P> = {
    type: string;
} & P;
export type CustomEventOptions = {
    once?: boolean;
};
export type CustomEventCallback<P> = (event: CustomEvent<P>) => void;
export type CustomEventItem<P> = {
    callback: CustomEventCallback<P>;
    options: CustomEventOptions;
};
export declare class CustomEventManager<P = Record<string, unknown>> {
    lookup: Record<string, CustomEventItem<P>[]>;
    initEvent(eventType: string): void;
    on(eventType: string, callback: CustomEventCallback<P>, options: CustomEventOptions): void;
    off(eventType: string, callback?: CustomEventCallback<P>): void;
    trigger(eventType: string, payload?: P): void;
}
//# sourceMappingURL=CustomEventManager.d.ts.map