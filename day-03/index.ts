import * as fs from 'fs'
import { countTrees } from './toboggan-trajectory'

const buffer = fs.readFileSync(`${__dirname}/input.txt`, 'utf8')

const lines = buffer.split('\n').slice(0, -1)
console.log(`The are ${countTrees(lines)} trees on the slope`)
