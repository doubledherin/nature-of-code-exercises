class Landscape {
  constructor(scale, width, height) {
    this.scale = scale
    this.width = width
    this.height = height
    this.numColumns = floor(width / scale)
    this.numRows = floor(height / scale)
    this.grid = this.makeGrid()
    this.zoff = 0
  }

  makeGrid() {
    return Array.from({ length: this.numColumns }, () => Array(this.numRows))
  }

  // use Perlin noise to set an elevation for each cell in the grid
  // where the min is -100 and the max is 100
  setElevations() {
    let xoff = 0
    for (let i = 0; i < this.numColumns; i++) {
      let yoff = 0
      for (let j = 0; j < this.numRows; j++) {
        this.grid[i][j] = map(noise(xoff, yoff, this.zoff), 0, 1, -100, 100)
        yoff += 0.1
      }
      xoff += 0.1
    }
    this.zoff += 0.01
  }

  draw() {
    for (let i = 0; i < this.grid.length - 1; i++) {
      beginShape(QUAD_STRIP)
      for (let j = 0; j < this.grid[i].length; j++) {
        stroke(0)
        const elevation = this.grid[i][j]
        // fill maps to elevation; the lower, the darker
        const f = map(elevation, -100, 100, 0, 255)
        fill(f)
        // subtract width/2 and height/2, because WEBGL
        // changes the origin to the middle of the screen
        const x = i * this.scale - this.width / 2
        const y = j * this.scale - this.height / 2
        vertex(x, y, this.grid[i][j])
        vertex(x + this.scale, y, this.grid[i + 1][j])
      }
      endShape()
    }
  }
}
