class GuessingGame {
  res = 0;
  constructor() {}
  setRange(min, max) {
    this.min = min;
    this.max = max;
  }
  guess() {
    this.res = Math.round((this.max + this.min) / 2);
    return this.res;
  }
  lower() {
    return (this.max = this.res);
  }
  greater() {
    return (this.min = this.res);
  }
}
module.exports = GuessingGame;
