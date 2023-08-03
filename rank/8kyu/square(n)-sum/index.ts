// Replace this snippet with the starter code for your kata (if any) and export your function
// for your tests to import
export function squareSum(numbers: number[]): number {
    return numbers.reduce((acc, cur) => {
        return acc + (cur ** 2)
    });
}

