const  stringLength = require('./task1');


test('string "challenge" length between 1 and 10 equal to TRUE', () => {
  expect(stringLength("challenge")).toBe(true);
});

test('string "Hippopotamus" length between 1 and 10 equal to FALSE', () => {
  expect(stringLength("Hippopotamus")).toBe(false);
});

