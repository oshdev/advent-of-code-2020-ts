import { find2020 } from './report-repair'

describe('find 2020', () => {
  it('finds 2 numbers adding to 2020', () => {
    const input = [20, 2000]
    expect(find2020(input)).toEqual([20, 2000])
  })
})
