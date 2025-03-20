let movers = []
let liquid

function setup() {
  createCanvas(windowWidth, windowHeight)
  reset()
  const p = createP(
    "Exercise 2.8: You might notice that if you set the coefficient of drag too high in Example 2.5, the circles may bounce off of the liquid!</br>This is due to the inaccuracy of the large time steps that I mentioned earlier in this chapter.</br>A drag force will cause an object to stop but never to reverse direction.</br>How can you use the vector limit() method to correct this issue?</br>You might also try dropping the objects from variable heights. How does this affect the drag as they hit the liquid?"
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

  liquid = new Liquid(0, height / 2, width, height / 2, 0.1)
}

function showCode() {
  window.open(
    "https://github.com/doubledherin/nature-of-code-exercises/blob/main/exercises/2-Forces/2.8/mover.js",
    "_blank"
  )
}

function mousePressed() {
  reset()
}

function draw() {
  background(255)

  liquid.show()

  for (mover of movers) {
    if (liquid.contains(mover)) {
      const dragForce = liquid.calculateDrag(mover)
      mover.applyForce(dragForce)
    }

    let gravity = createVector(0, 0.1 * mover.mass)
    mover.applyForce(gravity)
    mover.update()
    mover.show()
    mover.checkEdges()
  }
}

function reset() {
  movers = []
  for (let i = 0; i < 9; i++) {
    movers.push(new Mover(50 + i * 100, 0, random(0.5, 3)))
  }
}
