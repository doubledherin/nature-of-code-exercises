let walker
let boxSize

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL)
  const p = createP(
    "Exercise 1.3: Extend Example 1.2 into 3D. Can you get a sphere to bounce around a box?</br>Note: You can use the mouse to drag the cube, to see the animation from different angles."
  )
  p.position(10, 0)
  p.style("background-color", "white")
  p.style("border-radius", "4px")
  p.style("padding", "5px")
  let button = createButton("See the code solution")
  button.position(10, 60)
  button.style("background-color", "white")
  button.style("border-radius", "4px")
  button.style("padding", "5px")
  button.style("border", "black 1px solid")
  button.mousePressed(showCode)
  boxSize = width / 4
  walker = new Walker(width, height, boxSize)
  box()
  orbitControl()
}

function showCode() {
  window.open(
    "https://github.com/doubledherin/nature-of-code-exercises/blob/main/exercises/1-Vectors/1.3/script.js",
    "_blank"
  )
}

function draw() {
  background(255)
  orbitControl()
  noFill()
  box(boxSize, boxSize, boxSize)
  walker.update()
  walker.show()
}
