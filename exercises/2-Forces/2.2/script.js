function setup() {
  createCanvas(windowWidth, windowHeight)
  const p = createP(
    "Exercise 2.2: You could write applyForce() in another way, using the static method div() instead of copy().</br>Rewrite applyForce() by using the static method."
  )
  p.position(10, 0)
  p.style("background-color", "white")
  p.style("border-radius", "4px")
  p.style("padding", "5px")
  p.style("border", "black 1px solid")

  let button = createButton("See the code solution")
  button.position(10, 70)
  button.style("background-color", "white")
  button.style("border-radius", "4px")
  button.style("padding", "5px")
  button.style("border", "black 1px solid")
  button.mousePressed(showCode)
  textSize(20)
  text("applyForce(force) {", width / 2 - 200, height / 2)
  text(
    "  let f = p5.Vector.div(force, this.mass)",
    width / 2 - 200,
    height / 2 + 20
  )
  text("  this.acceleration.add(f)", width / 2 - 200, height / 2 + 40)
  text("}", width / 2 - 200, height / 2 + 60)
}

function showCode() {
  window.open(
    "https://github.com/doubledherin/nature-of-code-exercises/blob/main/exercises/2-Forces/2.2/script.js",
    "_blank"
  )
}

function draw() {}
