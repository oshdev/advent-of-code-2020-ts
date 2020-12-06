import * as fs from 'fs'
import { countFullyValidPassports, countValidPassports } from './passport-processing'

const buffer = fs.readFileSync(`${__dirname}/input.txt`, 'utf8')

const passports = buffer.split('\n\n').map(p => p.trim())
console.log(`The are ${countValidPassports(passports)} valid passports`)
console.log(`The are ${countFullyValidPassports(passports)} fully valid passports`)
