let standardDeviationSlider

function setup() {
  createCanvas(windowWidth, windowHeight)
  const p = createP(
    "Exercise 0.4: Consider a simulation of paint splatter drawn as a collection of colored dots.</br>Most of the paint clusters around a central position, but some dots splatter out toward the edges.</br>Can you use a normal distribution of random numbers to generate the positions of the dots?</br>Can you also use a normal distribution of random numbers to generate a color palette?</br>Try creating a slider to adjust the standard deviation."
  )
  p.position(10, 0)
  p.style("background-color", "white")
  p.style("border-radius", "4px")
  p.style("padding", "5px")
  p.style("border", "black 1px solid")
  let button = createButton("See the code solution")
  button.position(10, 125)
  button.style("background-color", "white")
  button.style("border-radius", "4px")
  button.style("padding", "5px")
  button.style("border", "black 1px solid")
  button.mousePressed(showCode)

  standardDeviationSlider = createSlider(2, 60, 20, 2)
  standardDeviationSlider.position(width - 200, 20)
  standardDeviationSlider.size(100)
}

function showCode() {
  window.open(
    "https://github.com/doubledherin/nature-of-code-exercises/blob/main/exercises//0-Randomness/0.4/script.js",
    "_blank"
  )
}

function draw() {
  const sd = standardDeviationSlider.value()
  push()
  noStroke()
  fill(0)
  text(`Standard deviation: ${sd}`, width - 200, 60)
  pop()
  let x = randomGaussian(width / 2, 100)
  let y = randomGaussian(height / 2, 100)

  noStroke()
  const r = randomGaussian(255 / 2, sd)
  const g = randomGaussian(255 / 2, sd)
  const b = randomGaussian(255 / 2, sd)
  fill(r, g, b)
  circle(x, y, 16)
}
