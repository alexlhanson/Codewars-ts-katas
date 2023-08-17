import { Challenge } from './index.ts';

/**
 * @group 6kyu
 */
describe('6kyu - multiples-of-3-and-5', () => {
    it('should', () => {
        expect(Challenge.solution(9)).toBe(14);
    });
    it('should', () => {
        expect(Challenge.solution(3)).toBe(0);
    });

    it('should', () => {
        expect(Challenge.solution(-3)).toBe(0);
    });
});
