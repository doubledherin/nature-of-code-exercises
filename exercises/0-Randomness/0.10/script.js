let landscape

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL)
  const p = createP(
    "Exercise 0.10: Use the noise values as the elevations of a landscape."
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

  landscape = new Landscape(20, 800, 400)
}

function showCode() {
  window.open(
    "https://github.com/doubledherin/nature-of-code-exercises/blob/main/exercises/0-Randomness/0.10/script.js",
    "_blank"
  )
}

function draw() {
  landscape.setElevations()
  background(255)
  rotateX(PI / 3)
  landscape.draw()
}
