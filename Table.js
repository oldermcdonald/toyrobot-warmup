class Table {
  constructor(tableSizeX, tableSizeY) {
    this.tableSizeX = tableSizeX;
    this.tableSizeY = tableSizeY;
  }

  isValidPos(x,y) {
    // checks if position is valid compared to table size
    return (x >= 0 && x <= this.tableSizeX) && (y >= 0 && y <= this.tableSizeY);
  }
}

module.exports = Table;