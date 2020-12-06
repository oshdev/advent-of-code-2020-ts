import {
  countValidPassports,
  isFullyValid,
  isValid,
  isValidByr,
  isValidEcl,
  isValidEyr,
  isValidHcl,
  isValidHgt,
  isValidIyr,
  isValidPid,
  Passport,
  str2passport,
} from './passport-processing'

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

  describe('field validation', () => {
    it.each<[byr: string, expected: boolean]>([
      ['1919', false],
      ['1920', true],
      ['2002', true],
      ['2003', false],
    ])('validates byr', (byr, expected) => {
      expect(isValidByr(byr)).toBe(expected)
    })

    it.each<[iyr: string, expected: boolean]>([
      ['2009', false],
      ['2010', true],
      ['2020', true],
      ['2021', false],
    ])('validates iyr', (iyr, expected) => {
      expect(isValidIyr(iyr)).toBe(expected)
    })

    it.each<[eyr: string, expected: boolean]>([
      ['2019', false],
      ['2020', true],
      ['2030', true],
      ['2031', false],
    ])('validates eyr', (eyr, expected) => {
      expect(isValidEyr(eyr)).toBe(expected)
    })

    it.each<[hgt: string, expected: boolean]>([
      ['58in', false],
      ['59in', true],
      ['76in', true],
      ['77in', false],
      ['150in', false],
      ['149cm', false],
      ['150cm', true],
      ['193cm', true],
      ['194cm', false],
      ['59cm', false],
      ['59', false],
      ['150', false],
      ['174in', false], // had to add $ and ^ at the pipe boundary to cover this case
    ])('validates hgt', (hgt, expected) => {
      expect(isValidHgt(hgt)).toBe(expected)
    })

    it.each<[hcl: string, expected: boolean]>([
      ['123456', false],
      ['#1234567', false],
      ['#123abz', false],
      ['#000000', true],
      ['#999999', true],
      ['#aaaaaa', true],
      ['#ffffff', true],
      ['#123abc', true],
    ])('validates hcl', (hcl, expected) => {
      expect(isValidHcl(hcl)).toBe(expected)
    })

    it.each<[ecl: string, expected: boolean]>([
      ['red', false],
      ['amb', true],
    ])('validates ecl', (ecl, expected) => {
      expect(isValidEcl(ecl)).toBe(expected)
    })

    it.each<[pid: string, expected: boolean]>([
      ['123456789', true],
      ['000000000', true],
      ['0123', false],
      ['1234567890', false],
    ])('validates pid', (pid, expected) => {
      expect(isValidPid(pid)).toBe(expected)
    })

    const invalidPassports: string[] = `
eyr:1972 cid:100
hcl:#18171d ecl:amb hgt:170 pid:186cm iyr:2018 byr:1926

iyr:2019
hcl:#602927 eyr:1967 hgt:170cm
ecl:grn pid:012533040 byr:1946

hcl:dab227 iyr:2012
ecl:brn hgt:182cm pid:021572410 eyr:2020 byr:1992 cid:277

hgt:59cm ecl:zzz
eyr:2038 hcl:74454a iyr:2023
pid:3556412378 byr:2007
      `.split('\n\n').map(p => p.trim())

    it('validates passport fields', () => {
      invalidPassports.forEach(p => {
        const passport = str2passport(p)
        expect(isValid(passport) && isFullyValid(passport)).toBe(false)
      })
    })

    const validPassports: string[] = `
pid:087499704 hgt:74in ecl:grn iyr:2012 eyr:2030 byr:1980
hcl:#623a2f

eyr:2029 ecl:blu cid:129 byr:1989
iyr:2014 pid:896056539 hcl:#a97842 hgt:165cm

hcl:#888785
hgt:164cm byr:2001 iyr:2015 cid:88
pid:545766238 ecl:hzl
eyr:2022

iyr:2010 hgt:158cm hcl:#b6652a ecl:blu byr:1944 eyr:2021 pid:093154719
      `.split('\n\n').map(p => p.trim())

    it('validates passport fields', () => {
      validPassports.forEach(p => {
        const passport = str2passport(p)
        expect(isValid(passport) && isFullyValid(passport)).toBe(true)
      })
    })
  })
})
