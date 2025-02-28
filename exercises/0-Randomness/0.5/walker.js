class Walker {
  constructor(width, height) {
    this.x = width / 2
    this.y = height / 2
  }

  step() {
    const r = random()

    this.x += randomGaussian(0, 10)
    this.y += randomGaussian(0, 10)
  }

  show() {
    strokeWeight(3)
    point(this.x, this.y)
  }
}
