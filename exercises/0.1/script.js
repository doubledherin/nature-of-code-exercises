let walker

function setup() {
  createCanvas(windowWidth, windowHeight)
  textSize(16)
  text(
    "Exercise 0.1: Create a random walker that has a greater tendency to move down and to the right.",
    10,
    20
  )
  let button = createButton("See the code solution")
  button.position(20, 40)
  button.mousePressed(showCode)
  walker = new Walker(width, height)
}

function showCode() {
  window.open(
    "https://github.com/doubledherin/nature-of-code-exercises/blob/main/exercises/0.1/script.js",
    "_blank"
  )
}

function draw() {
  walker.step()
  walker.show()
}
