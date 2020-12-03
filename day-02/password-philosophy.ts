export type PasswordValidator = (pass: string, char: string, n1: number, n2: number) => boolean
export type PasswordValidatorArgs = Parameters<PasswordValidator>

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

export const validPasswords = (passwords: PasswordValidatorArgs[], validator: PasswordValidator): number =>
  passwords.reduce<number>((count, args) => validator(...args) ? count + 1 : count, 0)

export const str2args = (string: string): PasswordValidatorArgs => {
  const [range, char, pass] = string.split(' ')
  const [min, max] = range.split('-').map(Number)
  return [pass, char.charAt(0), min, max]
}
