import { accum } from './index.ts';

/**
 * @group 7kyu
 */
describe('7kyu - mumbling', () => {
    it('should', () => {
        expect(accum('')).toBe('');
    });
    it('should', () => {
        expect(accum('add')).toBe('A-Dd-Ddd');
    });
    it('should', () => {
        expect(accum('WhAt')).toBe('W-Hh-Aaa-Tttt');
    });
});
