function solution(numbers) {
    let number = 0;
    for (let i = 0; i < numbers.length; i++) {
        number += numbers[i];
    }
    
    let answer = number / numbers.length;
    return answer;
}