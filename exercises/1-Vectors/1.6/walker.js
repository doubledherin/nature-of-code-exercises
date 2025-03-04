class Walker {
  constructor(width, height) {
    this.position = createVector(width / 2, height / 2)
    this.velocity = createVector(0, 0)
    this.acceleration = createVector(0, 0)
    this.tx = 0
    this.ty = 1000
    this.topSpeed = 10
  }

  update() {
    this.acceleration = createVector(
      random([-1, 1]) * map(noise(this.tx), 0, 1, 0, 10),
      random([-1, 1]) * map(noise(this.ty), 0, 1, 0, 10)
    )
    this.velocity.add(this.acceleration)
    this.velocity.limit(this.topSpeed)
    this.position.add(this.velocity)
    this.tx += 0.1
    this.ty += 0.1
  }

  show() {
    strokeWeight(3)
    point(this.position.x, this.position.y)
  }

  checkEdges() {
    if (this.position.x < 0) {
      this.position.x = width
    }
    if (this.position.x > width) {
      this.position.x = 0
    }
    if (this.position.y < 0) {
      this.position.y = height
    }
    if (this.position.y > height) {
      this.position.y = 0
    }
  }
}
