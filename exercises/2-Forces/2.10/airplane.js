class Airplane {
  constructor(x, y, mass, image) {
    this.mass = mass
    this.position = createVector(x, y)
    this.velocity = createVector(0, 0)
    this.acceleration = createVector(0, 0)
    this.image = image
    this.coefficientOfLift = 0.0001
  }

  applyForce(force) {
    let f = p5.Vector.div(force, this.mass)
    this.acceleration.add(f)
  }

  update() {
    // gravity is a downward force
    if (!this.isOnGround()) {
      let gravity = createVector(0, 0.1 * airplane.mass)
      this.applyForce(gravity)
    }

    // engine is a horizontal force
    let engine = createVector(-1, 0)
    this.applyForce(engine)

    let lift = this.calculateLift()
    this.applyForce(lift)
    this.velocity.limit(30)

    this.velocity.add(this.acceleration)
    this.position.add(this.velocity)
    this.acceleration.normalize()
    this.acceleration.mult(0)
  }

  calculateLift() {
    let speed = this.velocity.mag()
    let liftMagnitude =
      this.coefficientOfLift * speed * speed * (this.image.width / 10)
    let liftForce = this.velocity.copy()
    // rotate the velocity vector by 90 degrees to get the vector perpendicular to velocity
    liftForce.rotate(PI / 2)
    liftForce.setMag(liftMagnitude)
    return liftForce
  }

  show() {
    image(this.image, this.position.x, this.position.y)
  }

  isOnGround() {
    return this.position.y >= height - this.image.height
  }

  checkEdges() {
    // check to see if it's touching the ground
    if (this.isOnGround()) {
      this.position.y = height - this.image.height
      this.acceleration.mult(0)
    }
    // check left side
    if (this.position.x + this.image.width < 0) {
      this.position.x = width - 1
    }
  }
}
