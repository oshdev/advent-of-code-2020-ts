import * as fs from 'fs'
import { validPasswords, str2args } from './password-philosophy'

const buffer = fs.readFileSync(`${__dirname}/input.txt`, 'utf8')

const lines = buffer.split('\n')
console.log(`The are ${validPasswords(lines.slice(0, -1).map(str2args))} invalid passwords`)
