class Walker {
  constructor(width, height) {
    this.x = width / 2
    this.y = height / 2
    this.tx = 0
    this.ty = 1000
  }

  step() {
    this.x += random([-1, 1]) * map(noise(this.tx), 0, 1, 0, 10)
    this.y += random([-1, 1]) * map(noise(this.ty), 0, 1, 0, 10)
    this.tx += 0.1
    this.ty += 0.1
  }

  show() {
    strokeWeight(3)
    point(this.x, this.y)
  }
}
