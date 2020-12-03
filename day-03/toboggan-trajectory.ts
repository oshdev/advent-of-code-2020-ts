export const slopes: [right: number, down: number][] = [
  [1, 1],
  [3, 1],
  [5, 1],
  [7, 1],
  [1, 2],
]

export const countTrees = (topography: string[], right: number, down: number): number => {
  const width = topography[0].length
  let trees = 0
  let column = 0
  for (let row = 0; row < topography.length; row += down) {
    topography[row].charAt(column % width) === '#' && trees++
    column += right
  }
  return trees
}

export const multipleTreesOnSlopes = (topography: string[], slopes: [right: number, down: number][]): number =>
  slopes.reduce((total, slope) => total * countTrees(topography, ...slope), 1)
