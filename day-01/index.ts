import * as fs from 'fs'
import { find2020 } from './report-repair'

const buffer = fs.readFileSync(`${__dirname}/input.txt`, 'utf8')
const [n1, n2] = find2020(buffer.split('\n').map(Number))

console.log(`${n1} + ${n2} = ${n1 + n2}`)
console.log(`The repair bill is ${n1 * n2}`)
