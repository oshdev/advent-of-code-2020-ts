export const countTrees = (topography: string[]): number => {
  const width = topography[0].length
  let trees = 0
  let column = 0
  for (const row of topography) {
    row.charAt(column % width) === '#' && trees++
    column += 3
  }
  return trees
}
