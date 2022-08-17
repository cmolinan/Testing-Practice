const  reverseString = require('./task2');

test('reverse of string "123456789" equal to "987654321" ', () => {
  expect(reverseString('123456789')).toBe('987654321');
});

test('reverse of string "carlosmolina" not equal to "molinacarlos" ', () => {

 expect(reverseString('carlosmolina')).not.toBe('molinacarlos');
});




