function setup() {
  createCanvas(windowWidth, windowHeight)
  const p = createP(
    "Exercise 1.4: Write the limit() function for the p5.Vector class."
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
  text("limit(max) {", width / 2 - 200, height / 2)
  text("if (this.mag() > max) {", width / 2 - 180, height / 2 + 40)
  text("this.setMag(max)", width / 2 - 160, height / 2 + 80)
  text("}", width / 2 - 180, height / 2 + 120)
  text("}", width / 2 - 200, height / 2 + 160)
}

function showCode() {
  window.open(
    "https://github.com/doubledherin/nature-of-code-exercises/blob/main/exercises/1-Vectors/1.4/script.js",
    "_blank"
  )
}

function draw() {}
