import { squareSum } from './index.ts';

/**
 * @group 8kyu
 */
describe('8kyu - Square(n) Sum', () => {
    it('should sum the squares of all numbers passed in with 3 numbers', () => {
        expect(squareSum([1, 2, 2])).toBe(9);
    });
    it('should sum the squares of all numbers passed in with 5 numbers', () => {
        expect(squareSum([1, 2, 2, 2, 2])).toBe(17);
    });
    it('should return 0 for a 0', () => {
        expect(squareSum([0])).toBe(0);
    });
    it('should return 0 for an empty array', () => {
        expect(squareSum([])).toBe(0);
    });
});
