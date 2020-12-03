export type PasswordValidatorArgs = Parameters<typeof isPasswordValid>

export const isPasswordValid = (pass: string, char: string, min: number, max: number): boolean => {
  const count = pass.split('').
    filter(c => c === char).length
  return count >= min && count <= max
}

export const isPasswordTValid = (pass: string, char: string, p1: number, p2: number): boolean => {
  const first = +(pass.charAt(p1 - 1) === char)
  const second = +(pass.charAt(p2 - 1) === char)
  return !!(first ^ second)
}

export const validPasswords = (passwords: PasswordValidatorArgs[]): number =>
  passwords.reduce<number>((count, args) => isPasswordValid(...args) ? count + 1 : count, 0)

export const validTPasswords = (passwords: PasswordValidatorArgs[]): number =>
  passwords.reduce<number>((count, args) => isPasswordTValid(...args) ? count + 1 : count, 0)

export const str2args = (string: string): PasswordValidatorArgs => {
  const [range, char, pass] = string.split(' ')
  const [min, max] = range.split('-').map(Number)
  return [pass, char.charAt(0), min, max]
}
