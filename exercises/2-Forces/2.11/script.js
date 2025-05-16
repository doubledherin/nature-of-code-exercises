let mover
let attractor

// Gravitational constant (for global scaling)
let G = 1

function setup() {
  createCanvas(windowWidth, windowHeight)
  const p = createP(
    "Exercise 2.11: Adapt Example 2.6 to map the mass of the Attractor and Mover to the area of their respective circles."
  )
  p.position(10, 0)
  p.style("background-color", "white")
  p.style("border-radius", "4px")
  p.style("padding", "5px")
  p.style("border", "black 1px solid")

  let button = createButton("See the code solution")
  button.position(10, 60)

  button.style("background-color", "white")
  button.style("border-radius", "4px")
  button.style("padding", "5px")
  button.style("border", "black 1px solid")
  button.mousePressed(showCode)

  mover = new Mover(300, 50, 20)
  attractor = new Attractor()
}

function showCode() {
  window.open(
    "https://github.com/doubledherin/nature-of-code-exercises/blob/main/exercises/2-Forces/2.11/attractor.js",
    "_blank"
  )
}

function draw() {
  background(255)

  let force = attractor.attract(mover)
  mover.applyForce(force)
  mover.update()

  attractor.show()
  mover.show()
}

function mouseMoved() {
  attractor.handleHover(mouseX, mouseY)
}

function mousePressed() {
  attractor.handlePress(mouseX, mouseY)
}

function mouseDragged() {
  attractor.handleHover(mouseX, mouseY)
  attractor.handleDrag(mouseX, mouseY)
}

function mouseReleased() {
  attractor.stopDragging()
}
