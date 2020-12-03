export type PasswordValidatorArgs = Parameters<typeof isPasswordValid>

export const isPasswordValid = (pass: string, char: string, min: number, max: number): boolean => {
  const count = pass.split('').
    filter(c => c === char).length
  return count >= min && count <= max
}

export const validPasswords = (passwords: PasswordValidatorArgs[]): number =>
  passwords.reduce<number>((count, args) => isPasswordValid(...args) ? count + 1 : count, 0)

export const str2args = (string: string): PasswordValidatorArgs => {
  const [range, char, pass] = string.split(' ')
  const [min, max] = range.split('-').map(Number)
  return [pass, char.charAt(0), min, max]
}
