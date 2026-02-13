export interface GridCell<T = Record<string, unknown>> {
    row: number;
    column: number;
    index: number;
    x: number;
    y: number;
    width: number;
    height: number;
    center: {
        x: number;
        y: number;
    };
    data: T;
}
export declare class Grid<T> {
    cells: GridCell<T>[];
    width: number;
    height: number;
    columns: number;
    rows: number;
    rowWidth: number;
    colWidth: number;
    constructor(rows?: number, columns?: number, rowWidth?: number, colWidth?: number);
    refreshCells(): void;
    setSize(width: number, height: number, fill?: 'cover' | 'contain'): void;
    getCellAtPoint(point: {
        x: number;
        y: number;
    }): GridCell<T> | null;
    getCellAt(colIndex: number, rowIndex: number): GridCell<T> | null;
    getRandomCell(filter?: (cell: GridCell<T>) => boolean, onSelect?: (cell: GridCell<T>) => void): GridCell<T> | null;
    getRow(rowIndex: number): GridCell<T>[];
    getCorner(corner: 'NW' | 'NE' | 'SE' | 'SW'): GridCell<T> | undefined;
}
//# sourceMappingURL=Grid.d.ts.map