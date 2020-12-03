import { find2020 } from './report-repair'

describe('find 2020', () => {
  it('finds 2 numbers adding to 2020', () => {
    const input = [20, 2000]
    let actual = find2020(input)
    expect(actual[0] + actual[1]).toEqual(2020)
    expect(actual).toEqual([20, 2000])
  })
})
