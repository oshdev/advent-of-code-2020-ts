export const calculateId = (row: number, column: number): number => row * 8 + column

export const calculateSeatId = (str: string): number => calculateId(
  calculateRow(str.substring(0, 7)),
  calculateColumn(str.substring(7)),
)

const calculateBinary = (str: string, upper: string): number =>
  Array.from(str).
    reduce<{ value: number, i: number }>(({ value, i }, ch) => ({
      value: ch === upper ? value + i : value,
      i: i >> 1,
    }), { value: 0, i: 2 ** (str.length - 1) }).value

export const calculateColumn = (str: string): number => calculateBinary(str, 'R')
export const calculateRow = (str: string): number => calculateBinary(str, 'B')

export const highestId = (strs: string[]): number => Math.max(...strs.map(calculateSeatId))