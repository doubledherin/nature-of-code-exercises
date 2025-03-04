let walker

function setup() {
  createCanvas(windowWidth, windowHeight)
  textSize(16)
  const p = createP(
    "Exercise 1.8: Example 1.10 is remarkably close to the concept of gravitational attraction, with the object being attracted to the mouse position.</br>In the example, however, the attraction magnitude is constant, whereas with a real-life gravitational force, the magnitude is inversely proportional to distance:</br>the closer the object is to the attraction point, the faster it accelerates. I’ll cover gravitational attraction in more detail in the next chapter, but for now,</br>try implementing your own version of Example 1.10 with a variable magnitude of acceleration, stronger when it’s either closer or farther away."
  )
  p.position(10, 0)
  p.style("background-color", "white")
  p.style("border-radius", "4px")
  p.style("padding", "5px")
  p.style("border", "black 1px solid")

  let button = createButton("See the code solution")
  button.position(10, 110)

  button.style("background-color", "white")
  button.style("border-radius", "4px")
  button.style("padding", "5px")
  button.style("border", "black 1px solid")
  button.mousePressed(showCode)
  walker = new Walker(width, height)
}

function showCode() {
  window.open(
    "https://github.com/doubledherin/nature-of-code-exercises/blob/main/exercises/1-Vectors/1.8/script.js",
    "_blank"
  )
}

function draw() {
  background(255)
  walker.update()
  walker.show()
}
