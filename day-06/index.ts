import * as fs from 'fs'
import { sumAllAnswers, sumCommonAnswers } from './custom-customs'

const answers = fs.readFileSync(`${__dirname}/input.txt`, 'utf8')

console.log(`The sum of all answer counts is ${sumAllAnswers(answers)}`)
console.log(`The sum of common answer counts is ${sumCommonAnswers(answers)}`)
