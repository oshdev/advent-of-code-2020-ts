import * as fs from 'fs'
import { countValidPassports } from './passport-processing'

const buffer = fs.readFileSync(`${__dirname}/input.txt`, 'utf8')

const passports = buffer.split('\n\n').map(p => p.trim())
console.log(`The are ${countValidPassports(passports)} valid passports`)
