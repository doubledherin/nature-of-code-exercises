// This is an updated version of example 1.2 in the Nature of Code book.
// See https://natureofcode.com/vectors/#example-12-bouncing-ball-with-vectors
class Walker {
  constructor(width, height, boxSize) {
    this.boxSize = boxSize
    this.canvasWidth = width
    this.canvasHeight = height
    this.canvasDepth = width
    this.position = createVector(0, 0, 0)
    this.velocity = createVector(1, 12, 5)
    this.walkerSize = 20
  }

  update() {
    this.position.add(this.velocity)
    if (
      this.position.x > this.boxSize / 2 - this.walkerSize ||
      this.position.x < -this.boxSize / 2 + this.walkerSize
    ) {
      this.velocity.x *= -1
    }
    if (
      this.position.y > this.boxSize / 2 - this.walkerSize ||
      this.position.y < -this.boxSize / 2 + this.walkerSize
    ) {
      this.velocity.y *= -1
    }
    if (
      this.position.z > this.boxSize / 2 - this.walkerSize ||
      this.position.z < -this.boxSize / 2 + this.walkerSize
    ) {
      this.velocity.z *= -1
    }
  }

  show() {
    push()
    translate(this.position.x, this.position.y, this.position.z)
    normalMaterial()
    sphere(this.walkerSize)
    pop()
  }
}
