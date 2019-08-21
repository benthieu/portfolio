import { Component, OnInit } from '@angular/core';
import {PointBezier} from './classes/point-bezier.class';
import {PointSimple} from './classes/point-simple.class';

@Component({
  selector: 'app-waves',
  templateUrl: './waves.component.html',
  styleUrls: ['./waves.component.scss']
})
export class WavesComponent implements OnInit {
  firstPath: string;
  secondPath: string;
  thirdPath: string;

  constructor() { }

  ngOnInit() {
    this.firstPath = this.calculate();
    this.secondPath = this.calculate();
    this.thirdPath = this.calculate();
    setInterval(() => {
      this.firstPath = this.calculate();
      this.secondPath = this.calculate();
      this.thirdPath = this.calculate();
    }, 3000);
  }

  private calculate(): string {
    let path = 'M';
    const points = Array<PointSimple>();
    const pointsBezier = Array<PointBezier>();
    // generate random points on the y axis
    for (let i = 0; i < 11; i++) {
      const randomHeight = 100 + Math.round(Math.random() * 120);
      points.push(new PointSimple((1440 / 10 * i), randomHeight));
    }
    // add first point and init first bezier
    path += points[0].toString() + 'C';
    let x1 = points[0].x;
    let x2 = 0;
    let y1 = points[0].y;
    let y2 = 0;
    for (let i = 0; i < 10; i++) {
      const point = points[i + 1];
      const lastPoint = points[i];
      // mirror last bezier control point
      x1 = lastPoint.x + 40;
      y1 = lastPoint.y - (y2 - lastPoint.y);
      // generate new bezier control point
      x2 = point.x - 40;
      console.log('x2', x2);
      y2 = 100 + Math.round(Math.random() * 120);
      console.log('y2', y2);
      const pointBezier = new PointBezier(point.x, point.y, x1, y1, x2, y2);
      pointsBezier.push(pointBezier);
    }
    path += pointsBezier.join('C');
    path += 'L' + points[10].toString();
    // finish the path with the bounding rect
    path += 'L1440,320L1420,320L0,320';
    path += 'Z';
    return path;
  }
}
