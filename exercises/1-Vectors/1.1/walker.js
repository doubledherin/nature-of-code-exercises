// This is an updated version of my solution to exercise 0.7;
// using vectors for this version.
class Walker {
  constructor(width, height) {
    this.position = createVector(width / 2, height / 2)
    this.velocity = createVector(0, 1000)
  }

  step() {
    this.position.x +=
      random([-1, 1]) * map(noise(this.velocity.x), 0, 1, 0, 10)
    this.position.y +=
      random([-1, 1]) * map(noise(this.velocity.y), 0, 1, 0, 10)
    this.velocity.x += 0.1
    this.velocity.y += 0.1
  }

  show() {
    strokeWeight(3)
    point(this.position.x, this.position.y)
  }
}
