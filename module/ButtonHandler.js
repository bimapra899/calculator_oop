export class ButtonHandler {
    constructor(calculator, display) {
      this.calculator = calculator;
      this.display = display;
      this.setupButtons();
    }
  
    setupButtons() {
      const buttonContainer = document.getElementById('buttons');
      const buttons = [
        '7', '8', '9', '/',
        '4', '5', '6', '*',
        '1', '2', '3', '-',
        '0', '.', '=', '+',
        'C'
      ];
  
      buttons.forEach(button => {
        const buttonElement = document.createElement('button');
        buttonElement.textContent = button;
        buttonElement.addEventListener('click', () => this.handleButtonClick(button));
        buttonContainer.appendChild(buttonElement);
      });
    }
  
    handleButtonClick(button) {
      if (button === 'C') {
        this.calculator.clear();
        this.display.update('');
      } else if (button === '=') {
        const result = this.calculator.calculate();
        this.display.update(result);
      } else {
        this.calculator.appendNumber(button);
        this.display.update(this.calculator.getCurrentInput());
      }
    }
  }
  