function solution(x) {
    const A = x.toString().split('');
    const sum = A.reduce((acc, A) => acc + parseInt(A, 10), 0); 
    return x % sum === 0;
}