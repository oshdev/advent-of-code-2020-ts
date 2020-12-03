import * as fs from 'fs'
import { validPasswords, str2args, validTPasswords } from './password-philosophy'

const buffer = fs.readFileSync(`${__dirname}/input.txt`, 'utf8')

const lines = buffer.split('\n').slice(0, -1)
console.log(`The are ${validPasswords(lines.map(str2args))} valid passwords`)
console.log(`The are ${validTPasswords(lines.map(str2args))} valid toboggan passwords`)
