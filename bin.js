// PLACE X,Y,F
// MOVE - one step in facing it is facing
// LEFT - rotate 90 deg anti-clockwise
// RIGHT - rotate 90 deg clockwise
// REPORT - announce X, Y and F of the robot

// origin south west corner
// first command must be PLACE




// Imperative approach with functions
const tableSizeX = 5; // lowest number is far west
const tableSizeY = 5; // lowest number is far south
const directions = ['NORTH', 'SOUTH', 'EAST', 'WEST']

let currentDirection = '';
let xPosition; // horizontal
let yPosition; // vertical


function place(xPlacement, yPlacement, DirectionPlacement) {
  if (xPlacement >= 0 && xPlacement <= tableSizeX) {
    xPosition = xPlacement;
  } else {
    console.log(`X Position is off the table at: ${xPlacement}`)
  }

  if (yPlacement >= 0 && yPlacement <= tableSizeY)  {
    yPosition = yPlacement;
  } else  {
    console.log(`Y Position is off the table at: ${yPlacement}`)
  }
  currentDirection = DirectionPlacement;
}

function rotate(rotateDirection) {
  // Refactor this into a switch statement
  if (currentDirection == 'NORTH') {
    if (rotateDirection == 'LEFT') {
      currentDirection = 'WEST';
    } else {
      currentDirection = 'EAST';
    }
  }

  else if (currentDirection == 'SOUTH') {
    if (rotateDirection == 'LEFT') {
      currentDirection = 'EAST';
    } else {
      currentDirection = 'WEST';
    }
  }

  else if (currentDirection == 'EAST') {
    if (rotateDirection == 'LEFT') {
      currentDirection = 'NORTH';
    } else {
      currentDirection = 'SOUTH';
    }
  }

  else if (currentDirection == 'WEST') {
    if (rotateDirection == 'LEFT') {
      currentDirection = 'SOUTH';
    } else {
      currentDirection = 'NORTH';
    }
  }

  // switch(currentDirection) {
  //   case 'NORTH':
  //     currentDirection = (rotateDirection == 'LEFT')?'WEST':'EAST';
  //     break;
  //   case 'SOUTH':
  //     currentDirection = (rotateDirection == 'LEFT')?'EAST':'WEST';
  //     break;
  //   case 'EAST':
  //     currentDirection = (roateDirection == 'LEFT')?'NORTH':'SOUTH';
  //     break;
  //   case 'WEST':
  //     currentDirection = (rotateDirection == 'LEFT')?'SOUTH':'NORTH';
  // }

}

function move() {
  if (currentDirection == 'NORTH' && (yPosition + 1) <= tableSizeY) {
    yPosition++
  }
  else if (currentDirection == 'SOUTH' && (yPosition - 1) >= 0) {
    yPosition--
  }
  else if (currentDirection == 'EAST' && (xPosition + 1) <= tableSizeX) {
    xPosition++
  }
  else if (currentDirection == 'WEST' && (xPosition - 1) >= 0) {
    xPosition--
  }
  // still need else
}

function report() {
  console.log(`${xPosition},${yPosition},${currentDirection}`);
}



// console.log('enter a command');

// process.stdin.once('data', (input) => {
//   let command = input.toString().trim();
//   console.log(`Your command is ${command} !`);
//   process.exit();
// });




// const readline = require('readline')
// const readlineInterface = readline.createInterface(process.stdin, process.stdout)

// function ask(questionText) {
//   return new Promise((resolve, reject) => {
//     readlineInterface.question(questionText, resolve)
//   })
// }

// start();

// async function start() {
//   let name  = await ask('whats your name?')
//   console.log('hello' + name)
//   process.exit()
// }



// const readline = require('readline')
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
//   terminal: false
// });

// rl.on('line', function (line)  {
//   console.log(line.length)
// })







// const readline = require('readline');

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// })

// const i = readline.createInterface(process.stdin, process.stdout, null);

// rl.question('Enter a command', (answer) => {
//   // send the command to the parser
//   console.log(`Your command: ${answer}`)
//   // don't close here keep requesting commands
//   // rl.close()
//   // process.stdin.destroy();
// })

// rl.on('close', () => {
//   console.log('goodbye');
//   process.exit(0)
// })



// function readInput() {
//   // first initialize a new table and robot instance
//   // this shouldn't be here
//   const table = new Table(5,5);
//   const robot = new Robot(table);
    
//   return new Promise((resolve, reject) => {

//     let rl = readline.createInterface(process.stdin, process.stdout);
//     rl.setPrompt('command> ');
//     rl.prompt();

//     rl.on('line', line => {
//       // its confusing having two (input and inputWords)
//       // var input = line.toUpperCase().trim();
//       // var leng = input.indexOf(' ', 0);
//       // var command = leng === -1 ? input : input.substr(0, leng);

//       let input = line.toUpperCase().trim();
//       inputWords = input.split(/[ ,]+/);

//       if (line === 'exit' || line === 'quit' || line === 'q') {
//         rl.close();
//         return
//       }

//       // another one for help? (ie list of available commands)

//       if (inputWords[0] === 'PLACE') {
//         // PLACE 0,0,NORTH
//         let x = parseInt(inputWords[1]);
//         let y = parseInt(inputWords[2]);
//         let f = inputWords[3]; // should check if 'NORTH' etc
//         robot.place(x,y,f)

//       } else if (input === 'REPORT') {
//         robot.report();
//       } else if (input === 'MOVE') {
//         robot.move();
//       } else if (input === 'LEFT') {
//         robot.rotate('LEFT') ;
//       } else if (input === 'RIGHT') {
//         robot.rotate('RIGHT');
//       } else {
//         console.log('invalid command')
//       }
//       rl.prompt()

//     }).on('close', () => {
//       console.log('quitting')
//       resolve();
//     });
//   })
// }


// class Table {
//   constructor(tableSizeX, tableSizeY) {
//     this.tableSizeX = tableSizeX;
//     this.tableSizeY = tableSizeY;
//   }

//   isValidPos(x,y) {
//     // checks if position is valid compared to table size
//     return (x >= 0 && x <= this.tableSizeX) && (y >= 0 && y <= this.tableSizeY);
//   }
// }




// async function run() {
//   console.log("WELCOME TO TOY ROBOT")
//   console.log("Enter a command or type 'q' to quit");
//   try {
//     let answer = await readInput();
//     // no need to have this assigned to answer!
//   } catch(e) {
//     console.log(`failed: ${e}`);
//   }
// }

// run()


// is this the best way to assign the robot to a table?
// const robot = new Robot(table);

// robot.place(0,0,'NORTH');
// with input it will need to be parsed first and validated as integer

