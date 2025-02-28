class Walker {
  constructor(width, height) {
    this.x = width / 2
    this.y = height / 2
  }

  step() {
    let r = random()
    if (r < 0.5) {
      this.x += random(-1, 1)
      this.y += random(-1, 1)
    } else {
      if (mouseX - this.x < 0) {
        this.x--
      }
      if (mouseX - this.x > 0) {
        this.x++
      }
      if (mouseY - this.y < 0) {
        this.y--
      }
      if (mouseY - this.y > 0) {
        this.y++
      }
    }
  }

  show() {
    push()
    strokeWeight(3)
    point(this.x, this.y)
    pop()
  }
}
