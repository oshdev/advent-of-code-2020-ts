import { countValidPassports, isValid, Passport, str2passport } from './passport-processing'

describe('passport processing', () => {
  const passports: string[] = `
ecl:gry pid:860033327 eyr:2020 hcl:#fffffd
byr:1937 iyr:2017 cid:147 hgt:183cm

iyr:2013 ecl:amb cid:350 eyr:2023 pid:028048884
hcl:#cfa07d byr:1929

hcl:#ae17e1 iyr:2013
eyr:2024
ecl:brn pid:760753108 byr:1931
hgt:179cm

hcl:#cfa07d eyr:2025 pid:166559648
iyr:2011 ecl:brn hgt:59in
  `.split('\n\n').map(p => p.trim())

  it.each<[i: number, expected: Partial<Passport>]>([
    [0, {
      ecl: 'gry',
      pid: '860033327',
      eyr: '2020',
      hcl: '#fffffd',
      byr: '1937',
      iyr: '2017',
      cid: '147',
      hgt: '183cm',
    }],
    [1, {
      iyr: '2013',
      ecl: 'amb',
      cid: '350',
      eyr: '2023',
      pid: '028048884',
      hcl: '#cfa07d',
      byr: '1929',
    }],
    [2, {
      hcl: '#ae17e1',
      iyr: '2013',
      eyr: '2024',
      ecl: 'brn',
      pid: '760753108',
      byr: '1931',
      hgt: '179cm',
    }],
    [3, {
      hcl: '#cfa07d',
      eyr: '2025',
      pid: '166559648',
      iyr: '2011',
      ecl: 'brn',
      hgt: '59in',
    }],
  ])('converts passport string to a dictionary', (i, expected) => {
    expect(str2passport(passports[i])).toEqual(expected)
  })

  it.each<[i: number, expected: boolean]>([
    [0, true],
    [1, false],
    [2, true],
    [3, false],
  ])('validates passport', (i, expected) => {
    expect(isValid(str2passport(passports[i]))).toBe(expected)
  })

  it('counts valid passports', () => {
    expect(countValidPassports(passports)).toBe(2)
  })
})
