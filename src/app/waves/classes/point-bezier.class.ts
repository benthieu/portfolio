export class PointBezier {
  public x: number;
  public y: number;
  public x1: number;
  public y1: number;
  public x2: number;
  public y2: number;
  constructor(x: number, y: number, x1: number, y1: number, x2: number, y2: number) {
    this.x = x;
    this.y = y;
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
  }

  toString(): string {
      return `${this.x1},${this.y1},${this.x2},${this.y2},${this.x},${this.y}`;
  }
}
