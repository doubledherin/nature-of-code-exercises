class Body {
  constructor(x, y, velocityX, velocityY, color) {
    this.mass = 50
    this.radius = this.mass * 8
    this.position = createVector(x, y)
    this.velocity = createVector(velocityX, velocityY)
    this.acceleration = createVector(0, 0)
    this.color = color
  }
  // Newton's 2nd law: F = M * A
  // or A = F / M
  applyForce(force) {
    let f = p5.Vector.div(force, this.mass)
    this.acceleration.add(f)
  }

  attract(body) {
    let force = p5.Vector.sub(this.position, body.position)

    let d = constrain(force.mag(), 5, 25)

    let strength = (G * (this.mass * body.mass)) / (d * d)
    force.setMag(strength)
    return force
  }

  update() {
    // Velocity changes according to acceleration
    this.velocity.add(this.acceleration)
    // position changes by velocity
    this.position.add(this.velocity)
    // We must clear acceleration each frame
    this.acceleration.mult(0)
  }

  show() {
    noStroke()
    fill(this.color)
    circle(this.position.x, this.position.y, sqrt(this.mass) * 2)
  }
}
