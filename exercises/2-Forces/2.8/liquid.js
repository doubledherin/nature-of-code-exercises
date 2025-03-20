class Liquid {
  constructor(x, y, w, h, c) {
    this.x = x
    this.y = y
    this.w = w
    this.h = h
    this.c = c
  }

  contains(mover) {
    let pos = mover.position
    return (
      pos.x > this.x &&
      pos.x < this.x + this.w &&
      pos.y > this.y &&
      pos.y < this.y + this.h
    )
  }

  calculateDrag(mover) {
    let speed = mover.velocity.mag()
    let dragMagnitude = this.c * speed * speed
    let dragForce = mover.velocity.copy()
    dragForce.mult(-1)
    dragForce.setMag(dragMagnitude)
    dragForce.limit(1)
    return dragForce
  }

  show() {
    noStroke()
    fill(220)
    rect(this.x, this.y, this.w, this.h)
  }
}
