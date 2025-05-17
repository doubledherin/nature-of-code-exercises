let mover
let attractor

// Gravitational constant
let G = 0.0001

function setup() {
  createCanvas(windowWidth, windowHeight)
  const p = createP(
    "Exercise 2.13: This chapter isn’t suggesting that every good p5.js simulation needs to involve gravitational attraction.</br>Rather, you should be thinking creatively about how to design your own rules to drive the behavior of objects, using my approach to simulating gravitational attraction as a model.</br>For example, what happens if you design an attractive force that gets weaker as the objects get closer, and stronger as the objects get farther apart?</br>Or what if you design your attractor to attract faraway objects but repel close ones?"
  )
  p.position(10, 0)
  p.style("background-color", "white")
  p.style("border-radius", "4px")
  p.style("padding", "5px")
  p.style("border", "black 1px solid")

  let button = createButton("See the code solution")
  button.position(10, 120)

  button.style("background-color", "white")
  button.style("border-radius", "4px")
  button.style("padding", "5px")
  button.style("border", "black 1px solid")
  button.mousePressed(showCode)

  mover = new Mover(random(width), random(height), 40)
  attractor = new Attractor(width / 2, height / 2, 100)
}

function showCode() {
  window.open(
    "https://github.com/doubledherin/nature-of-code-exercises/blob/main/exercises/2-Forces/2.13/script.js",
    "_blank"
  )
}

function draw() {
  background(255)
  attractor.show()
  let force = attractor.attract(mover)

  mover.applyForce(force)

  // slow down the mover as it approaches the attractor
  let distance = p5.Vector.dist(mover.position, attractor.position)
  let damping = map(distance, 5, 200, 0.85, 0.99, true) // More damping when closer
  mover.velocity.mult(damping)

  // stop the mover if it's within range
  if (distance < 40) {
    mover.velocity.mult(0)
    mover.acceleration.mult(0)
  }
  mover.update()
  mover.show()
}
