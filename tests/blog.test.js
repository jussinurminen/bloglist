const dummy = require('../utils/list_helper').dummy

describe('dummy', () => {
  test('of one value is the value 1', () => {
    expect( dummy([1])).toBe(1)
  })

  test('of many is 1', () => {
    expect( dummy([1, 2, 3, 4, 5, 6])).toBe(1)
  })

  test('of empty array is 1', () => {
    expect( dummy([])).toBe(1)
  })
})
