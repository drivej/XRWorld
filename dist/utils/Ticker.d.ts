export declare class Ticker {
    ticking: boolean;
    doTick: () => void;
    constructor(doTick: () => void);
    start(): void;
    tick(): void;
    stop(): void;
}
//# sourceMappingURL=Ticker.d.ts.map