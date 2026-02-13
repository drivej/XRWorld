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

export class Grid<T> {
  cells: GridCell<T>[] = [];
  width = 0;
  height = 0;
  columns = 0;
  rows = 0;
  rowWidth = 10;
  colWidth = 10;

  constructor(rows = 10, columns = 10, rowWidth = 1, colWidth = 0) {
    this.rowWidth = rowWidth;
    this.colWidth = colWidth > 0 ? colWidth : rowWidth;
    this.columns = columns;
    this.rows = rows;
    this.width = this.colWidth * columns;
    this.height = this.rowWidth * rows;
    this.refreshCells();
  }

  refreshCells() {
    this.cells = Array.from({ length: this.rows * this.columns }).map((e, i) => {
      const row = ~~(i / this.columns);
      const column = i % this.columns;
      const x = this.colWidth * column;
      const y = this.rowWidth * row;
      return {
        row,
        column,
        x,
        y,
        center: { x: x + this.colWidth * 0.5, y: y + this.rowWidth * 0.5 },
        width: this.colWidth,
        height: this.rowWidth,
        index: i,
        data: {} as T
      };
    });
  }

  setSize(width: number, height: number, fill: 'cover' | 'contain' = 'cover') {
    this.columns = ~~(width / this.colWidth);
    this.rows = ~~(height / this.rowWidth);
    if (fill === 'cover') {
      this.colWidth = width / this.columns;
      this.rowWidth = height / this.rows;
    }
    this.width = width;
    this.height = height;
    this.refreshCells();
  }

  getCellAtPoint(point: { x: number; y: number }) {
    const colIndex = ~~(point.x / this.colWidth);
    const rowIndex = ~~(point.y / this.rowWidth);
    return this.getCellAt(colIndex, rowIndex);
  }

  getCellAt(colIndex: number, rowIndex: number) {
    const cellIndex = rowIndex * this.columns + colIndex;
    if (cellIndex < this.cells.length) {
      return this.cells[cellIndex];
    }
    return null;
  }

  getRandomCell(filter: (cell: GridCell<T>) => boolean = () => true, onSelect: (cell: GridCell<T>) => void = () => void 0): GridCell<T> | null {
    const subset = this.cells.filter(filter);
    if (subset.length > 0) {
      const i = ~~(subset.length * Math.random());
      if (onSelect) onSelect(subset[i]);
      return subset[i];
    } else {
      return null;
    }
  }

  getRow(rowIndex: number) {
    const sliceIn = this.columns * rowIndex;
    const sliceOut = sliceIn + this.columns;
    return this.cells.slice(sliceIn, sliceOut);
  }

  getCorner(corner: 'NW' | 'NE' | 'SE' | 'SW') {
    switch (corner) {
      case 'NW':
        return this.cells[0];
      case 'NE':
        return this.cells[this.columns - 1];
      case 'SW':
        return this.getRow(this.rows - 1)[0];
      case 'SE':
        return this.getRow(this.rows - 1).pop();
    }
  }
}
