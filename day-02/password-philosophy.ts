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

export const validPasswords = (passwordsArgs: PasswordValidatorArgs[], validator: PasswordValidator): number =>
  passwordsArgs.filter((args) => validator(...args)).length

export const str2args = (string: string): PasswordValidatorArgs => {
  const [range, char, pass] = string.split(' ')
  const [min, max] = range.split('-').map(Number)
  return [pass, char.charAt(0), min, max]
}
