import { countAnswers, answers2groups, sumAllAnswers } from './custom-customs'

describe('custom customs', () => {
  const input = `abc

a
b
c

ab
ac

a
a
a
a

b`

  it('creates groups from input', () => {
    expect(answers2groups(input)).toEqual([
      'abc',
      'a\nb\nc',
      'ab\nac',
      'a\na\na\na',
      'b',
    ])
  })

  it.each<[groupAnswers: string, expected: number]>([
    ['abc', 3],
    ['a\nb\nc', 3],
    ['ab\nac', 3],
    ['a\na\na\na', 3],
    ['b', 1],
  ])('counts answers in a group %s => %d', (groupAnswers, expected) => {
    expect(countAnswers(groupAnswers)).toEqual(expected)
  })

  it('sums the counts', () => {
    expect(sumAllAnswers(input)).toEqual(11)
  })
})
