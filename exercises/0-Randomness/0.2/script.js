let walker

function setup() {
  createCanvas(windowWidth, windowHeight)
  textSize(16)
  text(
    "Exercise 0.2: What is the probability of drawing two aces in a row from a deck of 52 cards if you reshuffle your first draw back into the deck before making your second draw? What would that probability be if you didn't reshuffle after your first draw?",
    10,
    20
  )
  let button = createButton("See the code solution")
  button.position(20, 40)
  button.mousePressed(showCode)
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
