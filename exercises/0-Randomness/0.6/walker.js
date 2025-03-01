class Walker {
  constructor(width, height) {
    this.x = width / 2
    this.y = height / 2
  }

  step() {
    // x and y have a 50/50 chance of incrementing or decrementing
    // because of random([-1, 1]). The amount of the increment or decrement
    // is based on the acceptReject value, which is mapped to anywhere
    // between 1 and 10.
    this.x += random([-1, 1]) * map(this.acceptReject(), 0, 1, 0, 10)
    this.y += random([-1, 1]) * map(this.acceptReject(), 0, 1, 0, 10)
  }

  show() {
    strokeWeight(3)
    point(this.x, this.y)
  }

  // acceptReject returns a value r1 which falls within the range 0 to 1,
  // where the probability of the r1 is equal to r1 squared.
  // In other words: y = x * x.
  acceptReject() {
    while (true) {
      const r1 = random()
      const p = r1 * r1
      const r2 = random()
      if (r2 < p) {
        return r1
      }
    }
  }
}
