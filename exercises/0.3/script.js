let walker

function setup() {
  createCanvas(windowWidth, windowHeight)
  textSize(16)
  text(
    "Exercise 0.3: Create a random walker with dynamic probabilities. For example, can you give it a 50 percent chance of moving in the direction of the mouse?",
    10,
    20
  )
  walker = new Walker(width, height)
}

function draw() {
  walker.step()
  walker.show()
}
