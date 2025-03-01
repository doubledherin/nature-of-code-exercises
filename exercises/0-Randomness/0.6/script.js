let walker

function setup() {
  createCanvas(windowWidth, windowHeight)
  textSize(16)
  const p = createP(
    "Exercise 0.6: Use a custom probability distribution to vary the size of the random walker’s steps.</br>The step size can be determined by influencing the range of values picked with a qualifying random value.</br>Can you map the probability to a quadratic function by making the likelihood that a value is picked equal to the value squared?"
  )
  p.position(10, 0)
  p.style("background-color", "white")
  p.style("border-radius", "4px")
  p.style("padding", "5px")
  let button = createButton("See the code solution")
  button.position(10, 80)
  button.style("background-color", "white")
  button.style("border-radius", "4px")
  button.style("padding", "5px")
  button.style("border", "black 1px solid")
  button.mousePressed(showCode)
  walker = new Walker(width, height)
}

function showCode() {
  window.open(
    "https://github.com/doubledherin/nature-of-code-exercises/blob/main/exercises/0-Randomness/0.6/script.js",
    "_blank"
  )
}

function draw() {
  walker.step()
  walker.show()
}
