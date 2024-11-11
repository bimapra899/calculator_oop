import { BasicCalculator } from './BasicCalculator.js';

export class ScientificCalculator extends BasicCalculator {
  constructor() {
    super();
  }

  calculateSin() {
    return Math.sin(this.result);
  }

  calculateCos() {
    return Math.cos(this.result);
  }

  calculateTan() {
    return Math.tan(this.result);
  }

  calculateSqrt() {
    return Math.sqrt(this.result);
  }
}
