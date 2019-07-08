class Robot {
  // think about encapsulation by making most of these methods private
  constructor(table) {
    this.table = table;
    this.positionX = null;
    this.positionY = null;
    // this.position = {
    //   x: null,
    //   y: null
    // }
    this.facing = null;
    this.isPlaced = false;
  }

  hello() {
    return 'hey'
  }

  place(x,y,f) {
    // check if placement is valid and fits on the table
    if (this.table.isValidPos(x,y)) {
      this.positionX = x;
      this.positionY = y;
      this.facing = f;
      this.isPlaced = true;
      this.report();
    } else {
      console.error(`Invalid table placement`);
    }
  }

  move() {
    // first check if robot has been placed
    if (this.isPlaced) {
      // Perhaps try and reuse the table method isValidPos
      if (this.facing == 'NORTH' && (this.positionY + 1) <= this.table.tableSizeY) {
        this.positionY++
      }
      else if (this.facing == 'SOUTH' && (this.positionY - 1) >= 0) {
        this.positionY--
      }
      else if (this.facing == 'EAST' && (this.positionX + 1) <= this.table.tableSizeY) {
        this.positionX++
      }
      else if (this.facing == 'WEST' && (this.positionX - 1) >= 0) {
        this.positionX--
      }
    } else {
      console.error('Robot has not been placed');
    }
  }

  report() {
    // check if robot has been placed
    if (this.isPlaced) {
      console.log(`${this.positionX},${this.positionY},${this.facing}`);
    } else {
      console.error('Robot has not been placed');
    }
  }

  rotate(direction) {
    // rotate left and right depending on direction
    if (this.isPlaced) {
      switch(this.facing) {
        case 'NORTH':
          this.facing = (direction == 'LEFT') ? 'WEST' : 'EAST';
          break;
        case 'SOUTH':
          this.facing = (direction == 'LEFT')  ? 'EAST' : 'WEST';
          break;
        case 'EAST':
          this.facing = (direction == 'LEFT') ? 'NORTH' : 'SOUTH';
          break;
        case 'WEST':
          this.facing = (direction == 'LEFT') ? 'SOUTH' : 'NORTH';
      }
    } else {
      console.error('Robot has not been placed')
    }
  }
}

module.exports = Robot;