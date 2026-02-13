export class Ticker {
  ticking: boolean = false;
  doTick: () => void;

  constructor(doTick: () => void) {
    this.doTick = doTick;
    this.tick = this.tick.bind(this);
    this.start = this.start.bind(this);
    this.stop = this.stop.bind(this);
  }

  start() {
    if (this.ticking !== true) {
      this.ticking = true;
      this.tick();
    }
  }

  tick() {
    if (this.ticking === true) {
      this.doTick();
      setTimeout(() => requestAnimationFrame(this.tick), 20);
    }
  }

  stop() {
    this.ticking = false;
  }
}
