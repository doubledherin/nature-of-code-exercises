let moverA
let moverB

function setup() {
  createCanvas(windowWidth, windowHeight)
  const p = createP(
    "Exercise 2.5: Create a wind force that's variable. Can you make it interactive?</br>For example, think of a fan located where the mouse is and pointed toward the circles."
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
  moverA = new Mover(width / 2, 30, 10)
  moverB = new Mover(width / 2 + 200, 30, 2)
}

function showCode() {
  window.open(
    "https://github.com/doubledherin/nature-of-code-exercises/blob/main/exercises/2-Forces/2.5/mover.js",
    "_blank"
  )
}

function draw() {
  background(255)

  moverA.checkEdges()
  moverA.update()
  moverA.show()

  moverB.checkEdges()
  moverB.update()
  moverB.show()
}
