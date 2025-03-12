class Balloon {
  constructor(width, height) {
    // start position at center of canvas
    this.position = createVector(width / 2, height / 2)
    // start velocity at 0,0
    this.velocity = createVector()
    // start acceleration at 0,0
    this.acceleration = createVector()
    // helium is a small upward-only force
    this.helium = createVector(0, -0.02)
    // initiate noise seed
    this.noiseX = 1000
    // use noise to calculate initial wind force
    this.wind = this.getWindForce(this.noiseX)
    this.topSpeed = 5
    this.diameter = 100
    this.strokeWeight = 1
  }

  applyForce(force) {
    this.acceleration.add(force)
  }

  getWindForce(noiseX) {
    const noiseY = noiseX + 1000

    // Use Perlin noise to randomly control force of wind.
    // Wind will always blow to the right, and sometimes up a little, sometimes down a little
    return createVector(
      map(noise(noiseX), 0, 1, 0, 0.15),
      random([-1, 1]) * map(noise(noiseY), 0, 1, 0, 0.1)
    )
  }

  // returns true if the top of the balloon has exceeded the top of the canvas (0)
  shouldBounce() {
    // top of balloon is the position.y (the center of the circle),
    // minus half the diameter (the radius),
    // minus 1 (the strokeWeight)
    return this.position.y - this.diameter / 2 - this.strokeWeight < 0
  }

  update() {
    // check to see if balloon has hit the ceiling,
    // and if so, send it backwards
    if (this.shouldBounce()) {
      // reset position.y so that it's below the ceiling
      this.position.y = this.diameter / 2 - this.strokeWeight + 2
      this.acceleration.mult(-1)
      this.velocity.mult(-1)
    }

    // apply helium and wind forces
    this.applyForce(this.helium)
    this.applyForce(this.getWindForce(this.noiseX))

    this.velocity.add(this.acceleration)
    // make sure velocity doesn't exceed top speed
    this.velocity.limit(this.topSpeed)
    this.position.add(this.velocity)
    this.checkSides()
    this.acceleration.mult(0)
    this.noiseX += 0.1
  }

  // reset position.x when balloon travels offscreen to the right or left
  checkSides() {
    if (this.position.x > width) {
      this.position.x = 0
    }
    if (this.position.x < 0) {
      this.position.x = width
    }
  }

  show() {
    stroke(0)
    strokeWeight(this.strokeWeight)

    // the balloon
    fill("pink")
    circle(this.position.x, this.position.y, this.diameter)

    // the balloon tie
    const balloonBottom = this.position.y + this.diameter / 2
    triangle(
      this.position.x,
      balloonBottom,
      this.position.x + 5,
      balloonBottom + 5,
      this.position.x - 5,
      balloonBottom + 5
    )

    // the string
    line(
      this.position.x,
      balloonBottom + 5,
      this.position.x,
      balloonBottom + 200
    )
  }
}
