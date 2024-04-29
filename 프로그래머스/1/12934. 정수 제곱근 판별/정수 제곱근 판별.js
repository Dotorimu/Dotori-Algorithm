function solution(n) {
        for (i = 1; 1 <= n; i++) {
            if (i * i === n) {
                return ((i + 1) * (i + 1));
            } else if (i * i > n) {
                return -1;
            }
        }
    }