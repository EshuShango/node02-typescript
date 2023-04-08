export default class Exponent {
  static compute(base: number, power: number): number {
    if (power === 0) {
      return 1;
    }
    return base * Exponent.compute(base, power - 1);
  }
  
  static square(base: number): number {
    return Exponent.compute(base, 2);
  }
  
  static cube(base: number): number {
    return Exponent.compute(base, 3);
  }
}
