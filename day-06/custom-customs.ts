export const answers2groups = (a: string): string[] => a.split('\n\n').map(s => s.trim())

type Answer = 'a' | 'b' | 'c' | 'd' | 'e' | 'f' | 'g' | 'h' | 'i' | 'j' | 'k' | 'l' | 'm' | 'n' | 'o' | 'p' | 'q' | 'r' | 's' | 't' | 'u' | 'v' | 'w' | 'x' | 'y' | 'z'
const allAnswers: Answer[] = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

export const countAllAnswers = (a: string): number => a.split('\n').reduce<Set<Answer>>((set, person) => {
  person.split('').map(a => set.add(a as Answer))
  return set
}, new Set()).size

const intersection = <T>(a1: T[], a2: T[]): T[] => a1.filter(v => a2.includes(v))

export const countCommonAnswers = (a: string): number => a.split('\n').reduce<string[]>((i, person) => intersection(i,
  person.split('')), allAnswers).length

const sum = (n: number[]): number => n.reduce((s, c) => s + c)

export const sumAllAnswers = (answers: string): number => sum(answers2groups(answers).map(countAllAnswers))
export const sumCommonAnswers = (answers: string): number => sum(answers2groups(answers).map(countCommonAnswers))
