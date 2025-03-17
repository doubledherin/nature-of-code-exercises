let moverA
let moverB

function setup() {
  createCanvas(windowWidth, windowHeight)
  const p = createP(
    "Exercise 2.6: Add a second object to Example 2.4. How do you handle having two objects of different masses?</br>What if each object has its own coefficient of friction relative to the bottom surface?</br>Does it make sense to encapsulate the friction force calculation into a Mover method?"
  )
  p.position(10, 0)
  p.style("background-color", "white")
  p.style("border-radius", "4px")
  p.style("padding", "5px")
  p.style("border", "black 1px solid")

  let button = createButton("See the code solution")
  button.position(10, 90)

  button.style("background-color", "white")
  button.style("border-radius", "4px")
  button.style("padding", "5px")
  button.style("border", "black 1px solid")
  button.mousePressed(showCode)
  moverA = new Mover(width / 2, 30, 10)
  moverB = new Mover(width / 2 + 150, 30, 5)
}

function showCode() {
  window.open(
    "https://github.com/doubledherin/nature-of-code-exercises/blob/main/exercises/2-Forces/2.6/mover.js",
    "_blank"
  )
}

function draw() {
  background(255)

  let gravity = createVector(0, 1)
  let gravityA = p5.Vector.mult(gravity, moverA.mass)
  let gravityB = p5.Vector.mult(gravity, moverB.mass)
  moverA.applyForce(gravityA)
  moverB.applyForce(gravityB)
  if (mouseIsPressed) {
    let wind = createVector(0.5, 0)
    moverA.applyForce(wind)
    moverB.applyForce(wind)
  }

  moverA.bounceEdges()
  moverA.update()
  moverA.show()
  moverB.bounceEdges()
  moverB.update()
  moverB.show()
}
