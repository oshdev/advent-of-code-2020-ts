export interface Passport {
  byr: string
  iyr: string
  eyr: string
  hgt: string
  hcl: string
  ecl: string
  pid: string
  cid?: string
}

const requiredKeys: (keyof Passport)[] = [
  'byr',
  'iyr',
  'eyr',
  'hgt',
  'hcl',
  'ecl',
  'pid',
]

export const str2passport = (string: string): Partial<Passport> =>
  string.replace(/\n/g, ' ').split(' ').reduce<Partial<Passport>>((p, pair) => {
    const [key, value] = pair.split(':')
    return { ...p, [key]: value }
  }, {})

export const isValid = (passport: Partial<Passport>): passport is Passport =>
  requiredKeys.filter(k => !Object.keys(passport).includes(k)).length === 0

export const countValidPassports = (passports: string[]): number =>
  passports.reduce<number>((count, passport) => count + +isValid(str2passport(passport)), 0)

export type Validator = (field: string) => boolean
export const isValidByr: Validator = (byr) => Number(byr) >= 1920 && Number(byr) <= 2002
export const isValidIyr: Validator = (iyr) => Number(iyr) >= 2010 && Number(iyr) <= 2020
export const isValidEyr: Validator = (eyr) => Number(eyr) >= 2020 && Number(eyr) <= 2030
export const isValidHgt: Validator = (hgt) => /^(1([5-8]\d|9[0-3])cm)$|^((59|6\d|7[0-6])in)$/.test(hgt)
export const isValidHcl: Validator = (hcl) => /^#[\da-f]{6}$/.test(hcl)
export const isValidEcl: Validator = (ecl) => ['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth'].includes(ecl)
export const isValidPid: Validator = (pid) => /^\d{9}$/.test(pid)

export const isFullyValid = (passport: Passport): boolean => {
  const validatorChain: [key: keyof Passport, validator: Validator][] = [
    ['byr', isValidByr],
    ['iyr', isValidIyr],
    ['eyr', isValidEyr],
    ['hgt', isValidHgt],
    ['hcl', isValidHcl],
    ['ecl', isValidEcl],
    ['pid', isValidPid],
  ]
  for (const [key, validator] of validatorChain) {
    if (!validator(passport[key])) return false
  }
  return true
}

export const countFullyValidPassports = (passports: string[]): number =>
  passports.reduce<number>((count, passport) => {
    const p = str2passport(passport)
    return count + +(isValid(p) && isFullyValid(p))
  }, 0)
