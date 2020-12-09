export const answers2groups = (a: string): string[] => a.split('\n\n')

type Answer = 'a' | 'b' | 'c' | 'd' | 'e' | 'f' | 'g' | 'h' | 'i' | 'j' | 'k' | 'l' | 'm' | 'n' | 'o' | 'p' | 'q' | 'r' | 's' | 't' | 'u' | 'v' | 'w' | 'x' | 'y' | 'z'
export const countAnswers = (a: string): number => a.split('\n').reduce<Set<Answer>>((set, person) => {
  person.split('').map(a => set.add(a as Answer))
  return set
}, new Set()).size

const sum = (n: number[]): number => n.reduce((s, c) => s + c)

export const sumAllAnswers = (answers: string): number => sum(answers2groups(answers).map(countAnswers))
