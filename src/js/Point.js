// import { interpolate, _rad, rad } from './Utils';

// export default class Point {
//   constructor(x, y, z) {
//     this.x = x == null ? 0 : x;
//     this.y = y == null ? 0 : y;
//     this.z = z == null ? 0 : z;
//   }

//   length(len) {
//     if(len!==null && !isNaN(len)){
//       // TODO: this could be optimized
//       return this.normalize().scale(len);
//     }
//     return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
//   }

//   setLength(len) {
//     return this.normalize().scale(len);
//   }

//   interpolate(toPoint, p) {
//     return new Point(interpolate(this.x, toPoint.x, p), interpolate(this.y, toPoint.y, p), interpolate(this.z, toPoint.z, p));
//   }

//   normalize() {
//     let len = this.length();
//     return len==0 ? this : this.scale(1/len);
//     // this.x *= len;
//     // return new Point(this.x / len, this.y / len, this.z / len);
//   }

//   angle() {
//     // return Math.atan2(this.y, this.x) * _rad;
//     return Math.atan2(this.y, this.x);
//   }

//   clone() {
//     return new Point(this.x, this.y, this.z);
//   }

//   set(x, y, z) {
//     this.x = x;
//     this.y = y;
//     this.z = z;
//     return this;
//   }

//   setX(x) {
//     this.x = x;
//     return this;
//   }

//   setY(y) {
//     this.y = y;
//     return this;
//   }

//   setZ(z) {
//     this.z = z;
//     return this;
//   }

//   apply(p) {
//     this.x = p.x;
//     this.y = p.y;
//     this.z = p.z;
//     return this;
//   }

//   add(p) {
//     this.x += p.x;
//     this.y += p.y;
//     this.z += p.z;
//     return this;
//   }

//   subtract(p) {
//     this.x -= p.x;
//     this.y -= p.y;
//     this.z -= p.z;
//     return this;
//   }

//   multiply(p) {
//     this.x *= p.x;
//     this.y *= p.y;
//     this.z *= p.z;
//     return this;
//   }

//   scale(s) {
//     this.x *= s;
//     this.y *= s;
//     this.z *= s;
//     return this;
//   }

//   floor() {
//     this.x = this.x | 0;
//     this.y = this.y | 0;
//     this.z = this.z | 0;
//     return this;
//   }

//   round() {
//     this.x = (this.x + 0.5) | 0;
//     this.y = (this.y + 0.5) | 0;
//     this.z = (this.z + 0.5) | 0;
//     return this;
//   }

//   toString() {
//     return 'Point(' + this.x.toFixed(2) + ', ' + this.y.toFixed(2) + ', ' + this.z.toFixed(2) + ') '+Math.round(this.angleXY()*_rad);
//   }

//   rotateXY(delta) {
//     let len = this.length();
//     let angle = this.angle() + delta * rad;
//     this.x = Math.cos(angle) * len;
//     this.y = Math.sin(angle) * len;
//     return this;
//   }

//   angleXY(a){
//     if(a!==null && !isNaN(a)){
//       let len = this.length();
//       let angle = a * rad;
//       this.x = Math.cos(angle) * len;
//       this.y = Math.sin(angle) * len;
//     } else {
//       return Math.atan2(this.y, this.x);
//     }
//     return this;
//   }
// }
