import * as fs from 'fs'
import { find2020, find2020of3 } from './report-repair'

const buffer = fs.readFileSync(`${__dirname}/input.txt`, 'utf8')
const [n1, n2] = find2020(buffer.split('\n').map(Number))

console.log(`${n1} + ${n2} = ${n1 + n2}`)
console.log(`The repair bill is ${n1 * n2}`)

const [m1, m2, m3] = find2020of3(buffer.split('\n').map(Number))

console.log(`${m1} + ${m2} + ${m3} = ${m1 + m2 + m3}`)
console.log(`The repair bill is ${m1 * m2 * m3}`)
