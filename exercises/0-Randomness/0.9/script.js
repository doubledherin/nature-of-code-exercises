let octaveSlider
let falloffSlider
let xoffSlider
let yoffSlider
let redSlider
let greenSlider
let blueSlider
let zoff = 0.0

function setup() {
  const p = createP(
    "Exercise 0.9: Add a third argument to noise that increments once per cycle through draw() to animate the 2D noise."
  )
  p.position(10, 0)
  p.style("background-color", "white")
  p.style("border-radius", "4px")
  p.style("padding", "5px")

  createCanvas(windowWidth, windowHeight)

  let button = createButton("See the code solution")
  button.position(10, 50)
  button.style("background-color", "white")
  button.style("border-radius", "4px")
  button.style("padding", "5px")
  button.style("border", "none")

  button.mousePressed(showCode)
  createControls()
}

function createControls() {
  const octavesLabel = createP("octaves")
  octavesLabel.position(10, height - 50)
  octavesLabel.style("background-color", "white")
  octavesLabel.style("border-radius", "4px")
  octavesLabel.style("padding", "5px")

  octavesSlider = createSlider(1, 10, 4, 1)
  octavesSlider.position(80, height - 30)

  const falloffLabel = createP("falloff")
  falloffLabel.position(220, height - 50)
  falloffLabel.style("background-color", "white")
  falloffLabel.style("border-radius", "4px")
  falloffLabel.style("padding", "5px")

  falloffSlider = createSlider(0, 1, 0.5, 0.1)
  falloffSlider.position(280, height - 30)

  const xoffLabel = createP("xoff increment")
  xoffLabel.position(420, height - 50)
  xoffLabel.style("background-color", "white")
  xoffLabel.style("border-radius", "4px")
  xoffLabel.style("padding", "5px")

  xoffSlider = createSlider(0.01, 0.1, 0.01, 0.01)
  xoffSlider.position(530, height - 30)

  const yoffLabel = createP("yoff increment")
  yoffLabel.position(670, height - 50)
  yoffLabel.style("background-color", "white")
  yoffLabel.style("border-radius", "4px")
  yoffLabel.style("padding", "5px")

  yoffSlider = createSlider(0.01, 0.1, 0.01, 0.01)
  yoffSlider.position(780, height - 30)

  const redLabel = createP("red")
  redLabel.position(920, height - 50)
  redLabel.style("background-color", "white")
  redLabel.style("border-radius", "4px")
  redLabel.style("padding", "5px")

  redSlider = createSlider(0, 255, 100, 20)
  redSlider.position(960, height - 30)

  const greenLabel = createP("green")
  greenLabel.position(1100, height - 50)
  greenLabel.style("background-color", "white")
  greenLabel.style("border-radius", "4px")
  greenLabel.style("padding", "5px")

  greenSlider = createSlider(0, 255, 100, 20)
  greenSlider.position(1150, height - 30)

  const blueLabel = createP("blue")
  blueLabel.position(1290, height - 50)
  blueLabel.style("background-color", "white")
  blueLabel.style("border-radius", "4px")
  blueLabel.style("padding", "5px")

  blueSlider = createSlider(0, 255, 100, 20)
  blueSlider.position(1330, height - 30)
}

function showCode() {
  window.open(
    "https://github.com/doubledherin/nature-of-code-exercises/blob/main/exercises/0-Randomness/0.9/script.js",
    "_blank"
  )
}

function draw() {
  noiseDetail(octavesSlider.value(), falloffSlider.value())
  loadPixels()
  let xoff = 0.0
  for (let x = 0; x < width; x++) {
    let yoff = 0.0
    for (let y = 0; y < height; y++) {
      const index = (x + y * width) * 4
      const red = map(noise(xoff, yoff, zoff), 0, 1, 0, redSlider.value())
      const green = map(noise(xoff, yoff, zoff), 0, 1, 0, greenSlider.value())
      const blue = map(noise(xoff, yoff, zoff), 0, 1, 0, blueSlider.value())
      pixels[index] = red
      pixels[index + 1] = green
      pixels[index + 2] = blue
      pixels[index + 3] = 255
      yoff += yoffSlider.value()
    }
    xoff += xoffSlider.value()
  }
  zoff += 0.03
  updatePixels()
}
