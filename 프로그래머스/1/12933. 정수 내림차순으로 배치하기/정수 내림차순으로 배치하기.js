function solution(n) {
    const sortedDigits = n.toString()      // 숫자를 문자열로 변환
                              .split('')   // 문자열을 배열로 분리
                              .sort((a, b) => b - a) // 배열을 내림차순으로 정렬
                              .join('');   // 배열을 문자열로 결합
    return parseInt(sortedDigits);         // 문자열을 정수로 변환하여 반환
}