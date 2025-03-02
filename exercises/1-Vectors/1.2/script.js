let walker

function setup() {
  createCanvas(windowWidth, windowHeight)
  textSize(16)
  const p = createP(
    "Exercise 1.2: Find something else you’ve previously made in p5.js using separate x and y variables, and use vectors instead."
  )
  p.position(10, 0)
  p.style("background-color", "white")
  p.style("border-radius", "4px")
  p.style("padding", "5px")
  let button = createButton("See the code solution")
  button.position(10, 50)
  button.style("background-color", "white")
  button.style("border-radius", "4px")
  button.style("padding", "5px")
  button.style("border", "black 1px solid")
  button.mousePressed(showCode)
  walker = new Walker(width, height)
}

function showCode() {
  window.open(
    "https://github.com/doubledherin/nature-of-code-exercises/blob/main/exercises/1-Vectors/1.2/script.js",
    "_blank"
  )
}

function draw() {
  walker.step()
  walker.show()
}
