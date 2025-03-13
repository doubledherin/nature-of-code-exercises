class Mover {
  constructor(x, y, mass) {
    this.mass = mass
    this.position = createVector(x, y)
    this.velocity = createVector(0, 0)
    this.acceleration = createVector(0, 0)
    this.diameter = mass * 16
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
    if (this.position.x > width - this.diameter / 2 - 1) {
      this.position.x = width - this.diameter / 2 - 1
      this.velocity.x *= -1
    } else if (this.position.x < this.diameter / 2 + 1) {
      this.velocity.x *= -1
      this.position.x = this.diameter / 2 + 1
    }
    if (this.position.y + this.diameter / 2 + 1 > height) {
      this.velocity.y *= -1
      this.position.y = height - this.diameter / 2 - 1
    }
  }
}
