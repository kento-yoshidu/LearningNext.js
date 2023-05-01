export function add(a: number, b: number) {
  return a + b
}

export function sub(a: number, b: number) {
  return a - b
}

export class RangeError extends Error {}

export function add2(a: number, b: number) {
  if (a > 100 && b > 100) {
    throw new RangeError("aとbが共に100を超えています")
  }

  if (a < 0 || a > 100) {
    throw new Error("入力値は0から100の間で入力してください")
  }

  if (b < 0 || b > 100) {
    throw new Error("Error Code: 999")
  }

  const sum = a + b
  if (sum > 100) {
    return 100
  }

  return a + b
}