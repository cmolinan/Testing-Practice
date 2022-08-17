const  capitalize = require('./task4');


test('convert to Uppercase the first letter of "challenge"  equal to "Challenge', () => {
  expect(capitalize("challenge")).toBe("Challenge");
});

test('convert to Uppercase the first letter of 11 equal to "*err*', () => {
  expect(capitalize(11)).toBe("*err*");
});
