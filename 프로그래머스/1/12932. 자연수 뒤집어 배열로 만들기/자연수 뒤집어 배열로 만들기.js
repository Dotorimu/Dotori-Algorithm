function solution(n) {
  return String(n).split('').reverse().map(Number);
}

const result = solution(12345);
