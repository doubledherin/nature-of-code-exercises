let walker

function setup() {
  createCanvas(windowWidth, windowHeight)
  const p = createP(
    "Exercise 0.3: Create a random walker with dynamic probabilities. For example, can you give it a 50 percent chance of moving in the direction of the mouse?"
  )
  p.position(10, 0)
  p.style("background-color", "white")
  p.style("border-radius", "4px")
  p.style("padding", "5px")
  p.style("border", "black 1px solid")
  walker = new Walker(width, height)
  let button = createButton("See the code solution")
  button.position(10, 50)
  button.style("background-color", "white")
  button.style("border-radius", "4px")
  button.style("padding", "5px")
  button.style("border", "black 1px solid")
  button.mousePressed(showCode)
}

function showCode() {
  window.open(
    "https://github.com/doubledherin/nature-of-code-exercises/blob/main/exercises/0-Randomness/0.3/script.js",
    "_blank"
  )
}

function draw() {
  walker.step()
  walker.show()
}
