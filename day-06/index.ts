import * as fs from 'fs'
import { sumAllAnswers } from './custom-customs'

const answers = fs.readFileSync(`${__dirname}/input.txt`, 'utf8')

console.log(`The sum of all answer counts is ${sumAllAnswers(answers)}`)
