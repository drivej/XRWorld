export declare class Rect {
    x: number;
    y: number;
    width: number;
    height: number;
    bottom: number;
    right: number;
    constructor(config?: Partial<Rect>);
    copy(config: Partial<Rect>): void;
    refresh(): void;
    expand(delta: number): void;
    containsPoint(point: {
        x: number;
        y: number;
    }): boolean;
}
//# sourceMappingURL=Rect.d.ts.map