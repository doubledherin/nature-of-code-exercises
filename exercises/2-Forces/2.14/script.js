let bodies = []

// Gravitational constant
let G = 1
let offsetX
let offsetY

function setup() {
  createCanvas(windowWidth, windowHeight)
  offsetX = width / 4
  offsetY = height / 4
  const p = createP(
    "Exercise 2.14: Try adding a third (or more!) body to Example 2.8 and experiment with setting initial positions and velocities.</br>What choreographies can you achieve?"
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

  // top center, going right
  bodies.push(new Body(width / 2, offsetY, 1, 1, "red"))

  // bottom right, going left
  bodies.push(new Body(width - offsetX, height - offsetY, -1, 0, "blue"))

  // bottom left, going right
  bodies.push(new Body(offsetX, height / 2, 1, 0, "green"))
}

function showCode() {
  window.open(
    "https://github.com/doubledherin/nature-of-code-exercises/blob/main/exercises/2-Forces/2.14/script.js",
    "_blank"
  )
}

function draw() {
  for (let i = 0; i < bodies.length; i++) {
    for (let j = 0; j < bodies.length; j++) {
      if (i !== j) {
        let force = bodies[j].attract(bodies[i])
        bodies[i].applyForce(force)
      }
    }
    bodies[i].update()
    bodies[i].show()
  }
}
