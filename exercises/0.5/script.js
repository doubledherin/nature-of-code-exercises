let walker

function setup() {
  createCanvas(windowWidth, windowHeight)
  textSize(16)
  text(
    "Exercise 0.5: A Gaussian random walk is defined as one in which the step size (how far the object moves in a given direction) is generated with a normal distribution. Implement this variation of the Walker class.",
    10,
    20
  )
  text("Implement this variation of the Walker class.", 10, 40)
  let button = createButton("See the code solution")
  button.position(20, 60)
  button.mousePressed(showCode)
  walker = new Walker(width, height)
}

function showCode() {
  window.open(
    "https://github.com/doubledherin/nature-of-code-exercises/blob/main/exercises/0.5/script.js",
    "_blank"
  )
}

function draw() {
  walker.step()
  walker.show()
}
