export class Challenge {
    static solution(number: number) {
        if (number < 0 ) return 0;
        return [...Array(number).keys()]
            .reduce((sum: number, currentNumber: number) => {
                if (currentNumber % 3 === 0 || currentNumber % 5 === 0) return sum + currentNumber;
                return sum;
            }, 0)
    }
}
