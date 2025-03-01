function setup() {
  createCanvas(windowWidth, windowHeight)
  const p = createP(
    "Exercise 0.2: What is the probability of drawing two aces in a row from a deck of 52 cards if you reshuffle your first draw back into the deck before making your second draw?</br>What would that probability be if you didn't reshuffle after your first draw?"
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
  text(
    "If the ace is reshuffled back into the deck: (4/52) x (4/52) ≈ 0.0056",
    width / 2 - 200,
    height / 2
  )
  text("If not: (4/52) x (3/51) ≈ 0.0045", width / 2 - 200, height / 2 + 40)
}

function showCode() {
  window.open(
    "https://github.com/doubledherin/nature-of-code-exercises/blob/main/exercises/0-Randomness/0.2/script.js",
    "_blank"
  )
}

function draw() {}
