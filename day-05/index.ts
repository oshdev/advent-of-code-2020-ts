import * as fs from 'fs'
import { findMissing, highestId } from './binary-boarding'

const buffer = fs.readFileSync(`${__dirname}/input.txt`, 'utf8')

const seats = buffer.split('\n')
console.log(`The highest seat ID is ${highestId(seats)}`)
console.log(`The missing seat ID is ${findMissing(seats)}`)
