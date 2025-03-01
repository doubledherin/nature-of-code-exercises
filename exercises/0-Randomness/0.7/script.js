let walker

function setup() {
  createCanvas(windowWidth, windowHeight)
  textSize(16)
  const p = createP(
    "Exercise 0.7: In the Perlin noise random walker, the result of the noise() function is mapped directly to the walker’s position.</br>Create a random walker, but map the result of the noise() function to the walker’s step size instead."
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
  walker = new Walker(width, height)
}

function showCode() {
  window.open(
    "https://github.com/doubledherin/nature-of-code-exercises/blob/main/exercises/0-Randomness/0.7/script.js",
    "_blank"
  )
}

function draw() {
  walker.step()
  walker.show()
}
