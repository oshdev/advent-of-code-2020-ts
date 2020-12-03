import { countTrees } from './toboggan-trajectory'

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

  it('counts trees on cheap slope', () => {
    expect(countTrees(topography)).toEqual(7)
  })
})
