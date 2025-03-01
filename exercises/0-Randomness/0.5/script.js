let walker

function setup() {
  createCanvas(windowWidth, windowHeight)
  const p = createP(
    "Exercise 0.5: A Gaussian random walk is defined as one in which the step size (how far the object moves in a given direction) is generated with a normal distribution.</br>Implement this variation of the Walker class."
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
  walker = new Walker(width, height)
}

function showCode() {
  window.open(
    "https://github.com/doubledherin/nature-of-code-exercises/blob/main/exercises/0-Randomness/0.5/script.js",
    "_blank"
  )
}

function draw() {
  walker.step()
  walker.show()
}
