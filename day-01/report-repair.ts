export const find2020 = (input: number[]): [number, number] => {
  for (let i = 0; i < input.length; i++) {
    for (let j = i + 1; j < input.length; j++) {
      if (input[i] + input[j] === 2020) return [input[i], input[j]]
    }
  }
}
