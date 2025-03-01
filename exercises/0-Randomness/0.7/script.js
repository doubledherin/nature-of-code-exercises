let walker

function setup() {
  createCanvas(windowWidth, windowHeight)
  textSize(16)
  text(
    "Exercise 0.7: In the Perlin noise random walker, the result of the noise() function is mapped directly to the walker’s position.",
    10,
    20
  )
  text(
    "Create a random walker, but map the result of the noise() function to the walker’s step size instead.",
    10,
    40
  )
  let button = createButton("See the code solution")
  button.position(20, 60)
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
