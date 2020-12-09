import { answers2groups, countAllAnswers, countCommonAnswers, sumAllAnswers, sumCommonAnswers } from './custom-customs'

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

b
`

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
    ['a\na\na\na', 1],
    ['b', 1],
  ])('counts any answers in a group %s => %d', (groupAnswers, expected) => {
    expect(countAllAnswers(groupAnswers)).toEqual(expected)
  })

  it('sums all the counts', () => {
    expect(sumAllAnswers(input)).toEqual(11)
  })

  it.each<[groupAnswers: string, expected: number]>([
    ['abc', 3],
    ['a\nb\nc', 0],
    ['ab\nac', 1],
    ['a\na\na\na', 1],
    ['b', 1],
  ])('counts common answers in a group %s => %d', (groupAnswers, expected) => {
    expect(countCommonAnswers(groupAnswers)).toEqual(expected)
  })

  it('sums the common counts', () => {
    expect(sumCommonAnswers(input)).toEqual(6)
  })
})
