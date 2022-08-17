const  Calc = require('./task3');

let calc = new Calc;

describe("Calculator: ADD tests", () => {
  test('add 20 + 30 equal to 50', () => {
    expect(calc.add (20,50)).toBe(70);
  });

  test('add 20 + 30 equal to 50', () => {
    expect(calc.add (20,50)).toBe(70);
  });

  test('add 20 + 30 equal to 50', () => {
    expect(calc.add (20,50)).toBe(70);
  });
  
 })

 describe("Calculator: SUBTRACT tests", () => {
  test('subtract 43 - 7 equal to 36', () => {
    expect(calc.subtract (43, 7)).toBe(36);
  });

  test('subtract 121 - 11 equal to 110', () => {
    expect(calc.subtract (121,11)).toBe(110);
  });

  test('subtract 180 - 23 equal to 157', () => {
    expect(calc.subtract (180,23)).toBe(157);
  });
  
 })

 describe("Calculator: MULTIPLY tests", () => {
  test('multiply 8 * 12  equal to 96', () => {
    expect(calc.multiply ( 8, 12)).toBe(96);
  });

  test('multiply 14 * 11 equal to 154', () => {
    expect(calc.multiply (14,11)).toBe(154);
  });

  test('multiply 12 * 30 equal to 360', () => {
    expect(calc.multiply (12,30)).toBe(360);
  });
  
 })

 describe("Calculator: DIVIDE tests", () => {
  test.each([
    [9, 3, 3],
    [81, 9, 9],
    [270, 18, 15], 
  ]) ('.divide %i / %i equal %i', (a, b, expected) => {
    expect(calc.divide(a, b)).toBe(expected);
  });
  
 })





