let walker

function setup() {
  createCanvas(windowWidth, windowHeight)
  textSize(16)
  text(
    "Exercise 0.1: Create a random walker that has a greater tendency to move down and to the right.",
    10,
    20
  )
  walker = new Walker(width, height)
}

function draw() {
  walker.step()
  walker.show()
}
