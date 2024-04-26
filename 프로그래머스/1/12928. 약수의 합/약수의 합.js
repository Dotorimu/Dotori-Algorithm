function solution(n) {
    let sum = 0;
    let index = 1;

    while (index <= n) {
        if (n % index === 0) {
            sum += index;
        }
        index++;
    }
    return sum;
}
