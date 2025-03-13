class Mover {
  constructor(x, y, mass) {
    this.mass = mass
    this.position = createVector(x, y)
    this.velocity = createVector(0, 0)
    this.acceleration = createVector(0, 0)
    this.diameter = mass * 16
    this.forceFieldSize = 75
  }

  applyForce(force) {
    let f = p5.Vector.div(force, this.mass)
    this.acceleration.add(f)
  }

  update() {
    const gravity = createVector(0, 0.1)
    this.applyForce(gravity)

    if (mouseIsPressed) {
      let wind = createVector(0.1, 0)
      this.applyForce(wind)
    }

    this.velocity.add(this.acceleration)
    this.position.add(this.velocity)
    this.acceleration.mult(0)
  }

  show() {
    stroke(0)
    fill(175)
    circle(this.position.x, this.position.y, this.diameter)
  }

  checkEdges() {
    const distanceFromRightSide = width - this.position.x
    const distanceFromLeftSide = this.position.x
    const forceFieldRight = createVector(
      map(distanceFromRightSide, 0, width, -1, 0),
      0
    )
    const forceFieldLeft = createVector(
      map(distanceFromLeftSide, 0, width, 1, 0),
      0
    )
    if (distanceFromRightSide < this.forceFieldSize) {
      this.applyForce(forceFieldRight)
    }
    if (distanceFromLeftSide < this.forceFieldSize) {
      this.applyForce(forceFieldLeft)
    }

    if (this.position.y > height) {
      this.velocity.y *= -1
      this.position.y = height
    }
  }
}
