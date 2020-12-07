import { calculateColumn, calculateId, calculateRow, calculateSeatId, highestId } from './binary-boarding'

describe('binary boarding', () => {
  it.each<[row: number, column: number, expected: number]>([
    [44, 5, 357],
    [70, 7, 567],
    [14, 7, 119],
    [102, 4, 820],
  ])('calculates id', (row, column, expected) => {
    expect(calculateId(row, column)).toBe(expected)
  })

  it.each<[str: string, expected: number]>([
    ['RLR', 5],
    ['RRR', 7],
    ['RLL', 4],
  ])('calculates column', (str, expected) => {
    expect(calculateColumn(str)).toBe(expected)
  })

  it.each<[str: string, expected: number]>([
    ['FBFBBFF', 44],
    ['BFFFBBF', 70],
    ['FFFBBBF', 14],
    ['BBFFBBF', 102],
  ])('calculates column', (str, expected) => {
    expect(calculateRow(str)).toBe(expected)
  })

  it.each<[str: string, expected: number]>([
    ['FBFBBFFRLR', 357],
    ['BFFFBBFRRR', 567],
    ['FFFBBBFRRR', 119],
    ['BBFFBBFRLL', 820],
  ])('calculates seat ids', (str, expected) => {
    expect(calculateSeatId(str)).toBe(expected)
  })

  it('calculates highest id', () => {
    const strs = ['FBFBBFFRLR', 'BFFFBBFRRR', 'FFFBBBFRRR', 'BBFFBBFRLL']
    expect(highestId(strs)).toBe(820)
  })
})
