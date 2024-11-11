export class BasicCalculator {
    constructor() {
      this.currentInput = '';
      this.result = 0;
    }
  
    appendNumber(number) {
      this.currentInput += number;
    }
  
    clear() {
      this.currentInput = '';
    }
  
    calculate() {
      try {
        this.result = eval(this.currentInput);  // Menggunakan eval untuk menghitung ekspresi
        return this.result;
      } catch (e) {
        return 'Error';
      }
    }
  
    getCurrentInput() {
      return this.currentInput;
    }
  }
  