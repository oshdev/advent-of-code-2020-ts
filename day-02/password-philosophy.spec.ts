import { isPasswordTValid, isPasswordValid, str2args, validPasswords } from './password-philosophy'

describe('validate password', () => {
  const testCases: { args: Parameters<typeof isPasswordValid>, isValid: boolean, isValidT: boolean }[] = [
    { args: ['abc', 'a', 1, 2], isValid: true, isValidT: true },
    { args: ['abcabc', 'a', 2, 3], isValid: true, isValidT: false },
    { args: ['abc', 'd', 1, 2], isValid: false, isValidT: false },
    { args: ['aaa', 'a', 1, 2], isValid: false, isValidT: false },
    { args: ['abcabc', 'a', 1, 1], isValid: false, isValidT: false },
  ]

  it.each(testCases)('validates password', ({ args, isValid }) => {
    expect(isPasswordValid(...args)).toBe(isValid)
  })

  it.each(testCases)('validates toboggan password', ({ args, isValidT }) => {
    expect(isPasswordTValid(...args)).toBe(isValidT)
  })

  it('counts valid passwords', () => {
    const input = testCases.map(c => c.args)
    const expected = testCases.filter(c => c.isValid).length

    expect(validPasswords(input, isPasswordValid)).toEqual(expected)
  })

  it('counts valid toboggan passwords', () => {
    const input = testCases.map(c => c.args)
    const expected = testCases.filter(c => c.isValidT).length

    expect(validPasswords(input, isPasswordTValid)).toEqual(expected)
  })

  it('splits line into validator input', () => {
    expect(str2args('1-3 a: abcde')).toEqual(['abcde', 'a', 1, 3])
  })
})
