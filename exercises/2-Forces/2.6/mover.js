class Mover {
  constructor(x, y, m) {
    this.mass = m
    this.radius = m * 8
    this.position = createVector(x, y)
    this.velocity = createVector(0, 0)
    this.acceleration = createVector(0, 0)
    this.frictionCoefficient = random()
  }

  applyForce(force) {
    let f = p5.Vector.div(force, this.mass)
    this.acceleration.add(f)
  }

  update() {
    if (this.contactEdge()) {
      const friction = this.velocity.copy()
      friction.mult(-1)
      friction.setMag(this.frictionCoefficient)
      this.applyForce(friction)
    }
    this.velocity.add(this.acceleration)
    this.position.add(this.velocity)
    this.acceleration.mult(0)
  }

  show() {
    stroke(0)
    strokeWeight(2)
    fill(127, 127)
    circle(this.position.x, this.position.y, this.radius * 2)
  }

  contactEdge() {
    return this.position.y > height - this.radius - 2
  }

  bounceEdges() {
    let bounce = -0.9
    if (this.position.x > width - this.radius) {
      this.position.x = width - this.radius
      this.velocity.x *= bounce
    } else if (this.position.x < this.radius) {
      this.position.x = this.radius
      this.velocity.x *= bounce
    }
    if (this.position.y > height - this.radius) {
      this.position.y = height - this.radius
      this.velocity.y *= bounce
    }
  }
}
