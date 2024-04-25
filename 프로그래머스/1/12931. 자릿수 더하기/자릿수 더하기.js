function solution(n) {
    let answer = 0;
    let str = n.toString();
    for (i = 0; i < str.length; i ++) {
        answer += parseInt(str[i]);
    }
    return answer;
}