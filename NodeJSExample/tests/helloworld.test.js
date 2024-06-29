const hello = require('../src/helloworld');

test('should return the correct greeting', () => {
  expect(hello()).toBe('Hello Izak');
});