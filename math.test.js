const utils = require('./math');


test('adds 3 + 4 to equal 7', ()=>{
    expect(utils.add(3, 4)).toBe(7);
});

test('subtracts 3 from 7 to equal 4', () => {
    expect(utils.sub(7, 3)).toBe(4);
});

test('multiplies 6 * 4 to equal 24', ()=>{
    expect(utils.mult(6, 4)).toBe(24);
});

test('divides 17 / 3 to equal 5.666', ()=>{
    expect(utils.div(17, 3)).toBeCloseTo(5.67);
});