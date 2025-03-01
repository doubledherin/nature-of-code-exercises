let walker

function setup() {
  createCanvas(windowWidth, windowHeight)
  textSize(16)
  text(
    "Exercise 0.6: Use a custom probability distribution to vary the size of the random walker’s steps.",
    10,
    20
  )
  text(
    "The step size can be determined by influencing the range of values picked with a qualifying random value.",
    10,
    40
  )
  text(
    "Can you map the probability to a quadratic function by making the likelihood that a value is picked equal to the value squared?",
    10,
    60
  )
  let button = createButton("See the code solution")
  button.position(20, 80)
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
