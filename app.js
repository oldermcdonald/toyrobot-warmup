const readline = require('readline');
const Table = require('./Table');
const Robot = require('./Robot');

function readInput() {
  // first initialize a new table and robot instance
  // this shouldn't be in readInput
  const table = new Table(5,5);
  const robot = new Robot(table);
  
  return new Promise((resolve, reject) => {

    let rl = readline.createInterface(process.stdin, process.stdout);
    rl.setPrompt('command> ');
    rl.prompt();

    rl.on('line', line => {
      // possibly confusing having two (input and inputWords)
      let input = line.toUpperCase().trim();
      inputWords = input.split(/[ ,]+/);

      if (line === 'exit' || line === 'quit' || line === 'q') {
        rl.close();
        return
      }

      if (inputWords[0] === 'PLACE') {
        let x = parseInt(inputWords[1]);
        let y = parseInt(inputWords[2]);
        let f = inputWords[3]; // should check if 'NORTH' etc
        robot.place(x,y,f)

      } else if (input === 'REPORT') {
        robot.report();
      } else if (input === 'MOVE') {
        robot.move();
      } else if (input === 'LEFT') {
        robot.rotate('LEFT') ;
      } else if (input === 'RIGHT') {
        robot.rotate('RIGHT');
      } else {
        console.log('invalid command')
      }
      rl.prompt()

    }).on('close', () => {
      console.log('quitting')
      resolve();
    });
  })
}

async function run() {
  console.log("WELCOME TO TOY ROBOT")
  console.log("Enter a command or type 'q' to quit");
  try {
    let answer = await readInput(); // no need to assign to variable
  } catch(e) {
    console.log(`failed: ${e}`);
  }
}

run()