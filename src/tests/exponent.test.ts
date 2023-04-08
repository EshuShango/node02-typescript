import Exponent from '@src/math/exponent';

describe('Exponent', () => {
  describe('compute', () => {
    it('should compute the exponent of a number', () => {
      expect(Exponent.compute(2, 3)).toBe(8);
      expect(Exponent.compute(5, 0)).toBe(1);
      expect(Exponent.compute(3, 4)).toBe(81);
    });
  });

  describe('square', () => {
    it('should compute the square of a number', () => {
      expect(Exponent.square(2)).toBe(4);
      expect(Exponent.square(5)).toBe(25);
      expect(Exponent.square(0)).toBe(0);
    });
  });

  describe('cube', () => {
    it('should compute the cube of a number', () => {
      expect(Exponent.cube(2)).toBe(8);
      expect(Exponent.cube(5)).toBe(125);
      expect(Exponent.cube(0)).toBe(0);
    });
  });
});
