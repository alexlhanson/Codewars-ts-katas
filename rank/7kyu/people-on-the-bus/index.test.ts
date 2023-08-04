import { peopleLeft } from './index.ts';

/**
 * @group 7kyu
 */
describe('7kyu - people-on-the-bus', () => {
    it('should', () => {
        expect(peopleLeft([[2, 0]])).toBe(2);
    });

    it('should', () => {
        expect(peopleLeft([[2, 0],[5, 3]])).toBe(4);
    });
    it('should', () => {
        expect(peopleLeft([[0, 0]])).toBe(0);
    });
});
