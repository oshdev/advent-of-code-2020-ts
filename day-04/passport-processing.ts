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
