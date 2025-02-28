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
  walker = new Walker(width, height)
}

function draw() {
  walker.step()
  walker.show()
}
