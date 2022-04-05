

import {isPositive} from './04-main'

describe('isPositive()', () => {
    it('return n > 0', () => {
        expect(isPositive(5)).toBe(true);
    });
    it('return n = 0', () => {
        expect(isPositive(0)).toBe(false);
    });
    it('return n < 0', () => {
        expect(isPositive(-1)).toBe(false);
    });
});