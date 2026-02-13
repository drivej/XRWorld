// import Point from './Point.js';

// export default class Mouse {
//   constructor($parent) {
//     this.listeners = { click: [], drag:[], down:[], up:[], wheel:[], dragStart:[], dragEnd:[] };
//     // this.viewport = viewport;
//     this.isDown = false;
//     this.down = { position: new Point(), time: 0, data: {} };
//     this.move = { position: new Point(), lastPosition: new Point(), time: 0, data: {} };
//     this.vector = { position: new Point(), time: 0, data: {} };
//     this.offset = { position: new Point(), time: 0, data: {} };
//     this.up = { position: new Point(), time: 0, data: {} };
//     this.drag = {vector:new Point(), offset:new Point()}

//     $parent.addEventListener('mousedown', (e) => this.handleMouse(e));
//     $parent.addEventListener('mousemove', (e) => this.handleMouse(e));
//     $parent.addEventListener('mouseup', (e) => this.handleMouse(e));
//     $parent.addEventListener('wheel', (e) => this.handleMouse(e), { passive: true });
//     $parent.addEventListener('click', (e) => this.handleMouse(e));
//   }

//   handleMouse(evt) {
//     switch (evt.type) {
//       case 'mousedown':
//         this.isDown = true;
//         this.down.position.set(evt.clientX, evt.clientY, 0);
//         this.down.time = Date.now();
//         // this.down.data.viewportPosition = this.viewport.position.clone();
//         this.move.position = this.down.position.clone();
//         this.move.time = Date.now();
//         this.move.lastPosition = this.down.position.clone();
//         this.vector.position.set(0, 0, 0);
//         this.vector.time = 0;
//         this.listeners.down.forEach((listener) => listener({...this, type:'down'}));
//         break;

//       case 'mousemove':
//         if (this.isDown) {
//           this.move.lastPosition = this.move.position.clone();
//           this.move.position.set(evt.clientX, evt.clientY, 0);
//           this.move.time = Date.now();
//           this.drag.offset = this.move.position.clone().subtract(this.down.position);
//           this.vector.position.apply(this.move.position.subtract(this.down.position));
//           // this.viewport.position.apply(this.down.data.viewportPosition.clone().subtract(this.move.position));
//           // this.drag.vector = this.down.data.viewportPosition.clone().add(this.vector.position);
//           this.listeners.drag.forEach((listener) => listener({...this, type:'drag'}));
//         }
//         break;

//       case 'mouseup':
//         this.up.position.set(evt.clientX, evt.clientY, 0);
//         this.up.time = Date.now();
//         // if (this.vector.position.length() > 5) {
//           // let dif = this.up.time - this.move.time;
//           // let t = this.move.lastPosition.subtract(this.move.position);
//           // if (t.length() > 0) {
//             // this.viewport.vector.add(t);
//           // }
//         // }
//         this.isDown = false;
//         this.listeners.drag.forEach((listener) => listener({...this, type:'up'}));
//         break;

//       case 'wheel':
//         // this.viewport.vector.z -= evt.deltaY * 0.1;
//         this.listeners.wheel.forEach((listener) => listener({...this, type:'wheel', deltaY:evt.deltaY * 0.1}));
//         // TODO: make wheel drag Z
//         // if (this.isDown) {
//         //   this.drag.vector = this.down.data.viewportPosition.clone().add(this.vector.position);
//         //   this.listeners.drag.forEach((listener) => listener({...this, type:'drag'}));
//         // }
//         break;

//       case 'click':
//         if (this.vector.position.length() < 5) {
//           this.listeners.click.forEach((listener) => listener({...this, type:'click'}));
//         }
//         break;
//     }
//   }

//   addListener(eventName, eventHandler) {
//     if (this.listeners[eventName]) {
//       this.listeners[eventName].push(eventHandler);
//     }
//   }
// }
