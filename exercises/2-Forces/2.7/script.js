let movers = []

function setup() {
  createCanvas(windowWidth, windowHeight)
  const p = createP(
    "Exercise 2.7: Instead of wind, can you add functionality to this example that allows you to toss the circle via mouse interaction?"
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
  movers.push(new Mover(width / 2, 30, 10))
  movers.push(new Mover(width / 2 + 150, 30, 5))
}

function showCode() {
  window.open(
    "https://github.com/doubledherin/nature-of-code-exercises/blob/main/exercises/2-Forces/2.7/mover.js",
    "_blank"
  )
}

function mouseInMover(mover) {
  return dist(mouseX, mouseY, mover.position.x, mover.position.y) < mover.radius
}

function mouseClicked() {
  for (mover of movers) {
    if (mouseInMover(mover)) {
      let toss = createVector(100, -200)
      mover.applyForce(toss)
    }
  }
}

function draw() {
  background(255)

  for (mover of movers) {
    mover.bounceEdges()
    mover.update()
    mover.show()
  }
}
