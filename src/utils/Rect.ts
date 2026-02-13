export class Rect {
  x = 0;
  y = 0;
  width = 1;
  height = 1;
  bottom = 1;
  right = 1;

  constructor(config: Partial<Rect> = {}) {
    this.copy(config);
  }

  copy(config: Partial<Rect>) {
    Object.assign(config);
    this.refresh();
  }

  refresh() {
    this.right = this.x + this.width;
    this.bottom = this.y + this.height;
  }

  expand(delta: number) {
    this.x -= delta;
    this.y -= delta;
    this.width += delta;
    this.height += delta;
    this.refresh();
  }

  containsPoint(point: { x: number; y: number }) {
    return point.x > this.x && point.y > this.y && point.y < this.bottom && point.x < this.right;
  }
}
