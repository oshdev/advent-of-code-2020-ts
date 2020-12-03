import { countTrees, multipleTreesOnSlopes, slopes } from './toboggan-trajectory'

describe('toboggan trajectory', () => {
  const topography: string[] = `
    ..##.......
    #...#...#..
    .#....#..#.
    ..#.#...#.#
    .#...##..#.
    ..#.##.....
    .#.#.#....#
    .#........#
    #.##...#...
    #...##....#
    .#..#...#.#
  `.split('\n').slice(1, -1).map(s => s.trim())

  it.each<[right: number, down: number, expected: number]>([
    [1, 1, 2],
    [3, 1, 7],
    [5, 1, 3],
    [7, 1, 4],
    [1, 2, 2],
  ])('counts trees on a slope', (right, down, expected) => {
    expect(countTrees(topography, right, down)).toEqual(expected)
  })

  it('multiplies trees encountered', () => {
    expect(multipleTreesOnSlopes(topography, slopes)).toEqual(336)
  })
})
