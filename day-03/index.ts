import * as fs from 'fs'
import { multipleTreesOnSlopes, slopes } from './toboggan-trajectory'

const buffer = fs.readFileSync(`${__dirname}/input.txt`, 'utf8')

const lines = buffer.split('\n').slice(0, -1)
console.log(`The are ${multipleTreesOnSlopes(lines, slopes)} trees on the slope multipled`)
