class Walker {
  constructor(width, height) {
    this.x = width / 2
    this.y = height / 2
  }

  step() {
    let xstep = random([-1, 0, 1, 1])
    let ystep = random([-1, 0, 1, 1])
    this.x += xstep
    this.y += ystep
  }

  show() {
    push()
    strokeWeight(3)
    point(this.x, this.y)
    pop()
  }
}
