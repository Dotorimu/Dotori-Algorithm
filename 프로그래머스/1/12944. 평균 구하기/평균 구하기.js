function solution(arr) {
    let suu = 0;
    for (let i = 0; i < arr.length; i++) {
        suu += arr[i];
    }
    
    let answer = suu / arr.length;
    return answer;
}