export const calculateId = (row: number, column: number): number => row * 8 + column

export const calculateSeatId = (str: string): number => calculateId(
  calculateRow(str.substring(0, 7)),
  calculateColumn(str.substring(7)),
)

const calculateBinary = (str: string, one: string): number => {
  let i = 2 ** str.length
  return str.split('').reduce<number>((value, ch) => {
    i >>= 1
    return ch === one ? value + i : value
  }, 0)
}

export const calculateColumn = (str: string): number => calculateBinary(str, 'R')
export const calculateRow = (str: string): number => calculateBinary(str, 'B')

export const highestId = (strs: string[]): number => Math.max(...strs.map(calculateSeatId))

export const findMissing = (strs: string[]): number => {
  const sorted = strs.map(calculateSeatId).sort((a, b) => a - b)
  for (let i = 1; i < sorted.length - 1; i++) {
    const current = sorted[i]
    const next = sorted[i + 1]
    if (next !== current + 1) return current + 1
  }
}
