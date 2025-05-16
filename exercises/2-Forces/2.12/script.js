let movers = []
let attractors = []

// Gravitational constant
let G = 1

function setup() {
  createCanvas(windowWidth, windowHeight)
  const p = createP(
    "Exercise 2.12: In Example 2.7, there’s a system (an array) of Mover objects and one Attractor object. Build an example that has systems of both movers and attractors.</br>What if you make the attractors invisible? Can you create a pattern/design from the trails of objects moving around attractors?"
  )
  p.position(10, 0)
  p.style("background-color", "white")
  p.style("border-radius", "4px")
  p.style("padding", "5px")
  p.style("border", "black 1px solid")

  let button = createButton("See the code solution")
  button.position(10, 80)

  button.style("background-color", "white")
  button.style("border-radius", "4px")
  button.style("padding", "5px")
  button.style("border", "black 1px solid")
  button.mousePressed(showCode)

  for (let i = 0; i < 10; i++) {
    movers[i] = new Mover(random(width), random(height), random(5, 30))
  }

  for (let i = 0; i < 4; i++) {
    attractors[i] = new Attractor(
      random(width),
      random(height),
      random(50, 100)
    )
  }
}

function showCode() {
  window.open(
    "https://github.com/doubledherin/nature-of-code-exercises/blob/main/exercises/2-Forces/2.12/attractor.js",
    "_blank"
  )
}

function draw() {
  // remove the background() call to make the movers leave a patter/design from their trails
  for (let i = 0; i < attractors.length; i++) {
    let attractor = attractors[i]
    // attractor.show() // make the attractors invisible
    for (let i = 0; i < movers.length; i++) {
      let force = attractor.attract(movers[i])

      movers[i].applyForce(force)
      movers[i].update()
      movers[i].show()
    }
  }
}
