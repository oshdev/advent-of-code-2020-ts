import * as fs from 'fs'
import { isPasswordTValid, isPasswordValid, str2args, validPasswords } from './password-philosophy'

const buffer = fs.readFileSync(`${__dirname}/input.txt`, 'utf8')

const lines = buffer.split('\n').slice(0, -1)
console.log(`The are ${validPasswords(lines.map(str2args), isPasswordValid)} valid passwords`)
console.log(`The are ${validPasswords(lines.map(str2args), isPasswordTValid)} valid toboggan passwords`)
