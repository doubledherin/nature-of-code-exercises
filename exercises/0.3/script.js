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
  let button = createButton("See the code solution")
  button.position(20, 40)
  button.mousePressed(showCode)
}

function showCode() {
  window.open(
    "https://github.com/doubledherin/nature-of-code-exercises/blob/main/exercises/0.3/script.js",
    "_blank"
  )
}

function draw() {
  walker.step()
  walker.show()
}
