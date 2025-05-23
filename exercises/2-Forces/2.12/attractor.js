class Attractor {
  constructor(x, y, m) {
    this.position = createVector(x, y)
    this.mass = m
    this.dragOffset = createVector(0, 0)
    this.dragging = false
    this.rollover = false
  }

  attract(mover) {
    // Calculate direction of force
    let force = p5.Vector.sub(this.position, mover.position)
    // Distance between objects
    let distance = force.mag()
    // Limiting the distance to eliminate "extreme" results for very close or very far objects
    distance = constrain(distance, 5, 25)

    // Calculate gravitional force magnitude
    let strength = (G * this.mass * mover.mass) / (distance * distance)
    // Get force vector --> magnitude * direction
    force.setMag(strength)
    return force
  }

  // Method to display
  show() {
    strokeWeight(4)
    stroke(0)
    if (this.dragging) {
      fill(50)
    } else if (this.rollover) {
      fill(100)
    } else {
      fill(175, 200)
    }
    circle(this.position.x, this.position.y, sqrt(this.mass) * 2)
  }

  // The methods below are for mouse interaction
  handlePress(mx, my) {
    let d = dist(mx, my, this.position.x, this.position.y)
    if (d < this.mass) {
      this.dragging = true
      this.dragOffset.x = this.position.x - mx
      this.dragOffset.y = this.position.y - my
    }
  }

  handleHover(mx, my) {
    let d = dist(mx, my, this.position.x, this.position.y)
    if (d < this.mass) {
      this.rollover = true
    } else {
      this.rollover = false
    }
  }

  stopDragging() {
    this.dragging = false
  }

  handleDrag(mx, my) {
    if (this.dragging) {
      this.position.x = mx + this.dragOffset.x
      this.position.y = my + this.dragOffset.y
    }
  }
}
