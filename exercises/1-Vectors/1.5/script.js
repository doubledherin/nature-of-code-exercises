let sleeperSize = 10
let codingTrain
let codingTrainImage

function preload() {
  codingTrainImage = loadImage("codingtrain.jpg")
}

function setup() {
  createCanvas(windowWidth, windowHeight)
  const p = createP(
    "Exercise 1.5: Create a simulation of an object (think about a vehicle) that accelerates when you press the up arrow and brakes when you press the down arrow."
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

  // Place the train at the center to start.
  // The "position" of the image is at the top left corner,
  // which is why we need to subtract half the width
  // and all of the height to get it perfectly centered.
  const startingPosition = createVector(
    width / 2 - codingTrainImage.width / 2,
    height / 2 - codingTrainImage.height - 1 // subtract 1 to place the image just above the railroad
  )
  codingTrain = new CodingTrain(codingTrainImage, startingPosition)
}

function showCode() {
  window.open(
    "https://github.com/doubledherin/nature-of-code-exercises/blob/main/exercises/1-Vectors/1.5/script.js",
    "_blank"
  )
}

function keyPressed() {
  codingTrain.keyPressed()
}

function draw() {
  background(255)

  // railroad
  fill(0)
  line(0, height / 2, width, height / 2)
  for (let i = 0; i < width - sleeperSize; i += sleeperSize * 3) {
    rect(i, height / 2, sleeperSize, sleeperSize / 2)
  }

  // train
  codingTrain.update()
  codingTrain.show()
}
