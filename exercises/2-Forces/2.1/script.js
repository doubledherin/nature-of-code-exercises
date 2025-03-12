let balloon

function setup() {
  createCanvas(windowWidth, windowHeight)
  const p = createP(
    "Exercise 2.1: Using forces, simulate a helium-filled balloon floating upward and bouncing off the top of a window.</br>Can you add a wind force that changes over time, perhaps according to Perlin noise?"
  )
  p.position(10, 0)
  p.style("background-color", "white")
  p.style("border-radius", "4px")
  p.style("padding", "5px")
  p.style("border", "black 1px solid")

  let button = createButton("See the code solution")
  button.position(10, 70)

  button.style("background-color", "white")
  button.style("border-radius", "4px")
  button.style("padding", "5px")
  button.style("border", "black 1px solid")
  button.mousePressed(showCode)
  balloon = new Balloon(width, height)
}

function showCode() {
  window.open(
    "https://github.com/doubledherin/nature-of-code-exercises/blob/main/exercises/2-Forces/2.1/balloon.js",
    "_blank"
  )
}

function draw() {
  background(255)
  balloon.update()
  balloon.show()
}
