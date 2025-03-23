class Mover {
  constructor(x, y, mass) {
    this.mass = mass
    this.radius = mass * 8
    this.position = createVector(x, y)
    this.velocity = createVector(0, 0)
    this.acceleration = createVector(0, 0)
  }

  applyForce(force) {
    let f = p5.Vector.div(force, this.mass)
    this.acceleration.add(f)
  }

  update() {
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

  checkEdges() {
    if (this.position.y > height - this.radius) {
      this.velocity.y *= -0.9
      this.position.y = height - this.radius
    }
  }
}
