function setup() {
  createCanvas(windowWidth, windowHeight)
  textSize(16)
  const p = createP(
    "Exercise 1.7: Translate the following pseudocode to code, using static or nonstatic functions where appropriate:</br>  * The vector v equals (1, 5).</br>  * The vector u equals v multiplied by 2.</br>  * The vector w equals v minus u.</br>  * Divide the vector w by 3."
  )
  p.position(10, 0)
  p.style("background-color", "white")
  p.style("border-radius", "4px")
  p.style("padding", "5px")
  p.style("border", "black 1px solid")

  let button = createButton("See the code solution")
  button.position(10, 130)

  button.style("background-color", "white")
  button.style("border-radius", "4px")
  button.style("padding", "5px")
  button.style("border", "black 1px solid")
  button.mousePressed(showCode)
  noLoop()
}

function showCode() {
  window.open(
    "https://github.com/doubledherin/nature-of-code-exercises/blob/main/exercises/1-Vectors/1.7/script.js",
    "_blank"
  )
}

function draw() {
  text("let v = createVector(1, 5)", width / 2, height / 2)
  text("let u = p5.Vector.mult(v, 2)", width / 2, height / 2 + 20)
  text("let w = p5.Vector.sub(v, u)", width / 2, height / 2 + 40)
  text("w.div(3)", width / 2, height / 2 + 60)
}
