const Robot = require('./Robot');
const Table = require('./Table');

let table = new Table(5,5);
let robot = new Robot(table)

test('hello', () => {
  expect(robot.hello()).toBe('hey')
});

// think about what class methods should be returning for TDD