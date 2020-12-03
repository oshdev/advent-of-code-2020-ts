import { isPasswordValid, str2args, validPasswords } from './password-philosophy'

describe('validate password', () => {
  const testCases: { args: Parameters<typeof isPasswordValid>, isValid: boolean }[] = [
    { args: ['abc', 'a', 1, 2], isValid: true },
    { args: ['abcabc', 'a', 2, 3], isValid: true },
    { args: ['abc', 'd', 1, 2], isValid: false },
    { args: ['aaa', 'a', 1, 2], isValid: false },
    { args: ['abcabc', 'a', 1, 1], isValid: false },
  ]

  it.each(testCases)('validates password', ({ args, isValid }) => {
    expect(isPasswordValid(...args)).toBe(isValid)
  })

  it('counts valid passwords', () => {
    const input = testCases.map(c => c.args)
    const expected = testCases.filter(c => c.isValid).length

    expect(validPasswords(input)).toEqual(expected)
  })

  it('splits line into validator input', () => {
    expect(str2args('1-3 a: abcde')).toEqual(['abcde', 'a', 1, 3])
  })
})
