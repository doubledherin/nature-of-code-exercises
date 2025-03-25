let airplane

function preload() {
  airplaneImage = loadImage("airplane.png")
}
function setup() {
  createCanvas(windowWidth, windowHeight)
  const p = createP(
    "Exercise 2.10: In addition to drag being a force in opposition to the velocity vector, a drag force can be perpendicular.</br>Known as lift-induced drag, this will cause an airplane with an angled wing to rise in altitude.</br>Try creating a simulation of lift."
  )
  p.position(10, 0)
  p.style("background-color", "white")
  p.style("border-radius", "4px")
  p.style("padding", "5px")
  p.style("border", "black 1px solid")

  let button = createButton("See the code solution")
  button.position(10, 100)

  button.style("background-color", "white")
  button.style("border-radius", "4px")
  button.style("padding", "5px")
  button.style("border", "black 1px solid")
  button.mousePressed(showCode)

  airplane = new Airplane(
    width - airplaneImage.width,
    height - airplaneImage.height,
    10,
    airplaneImage
  )
}

function showCode() {
  window.open(
    "https://github.com/doubledherin/nature-of-code-exercises/blob/main/exercises/2-Forces/2.10/airplane.js",
    "_blank"
  )
}

function draw() {
  background(255)

  airplane.update()
  airplane.show()
  airplane.checkEdges()
}
