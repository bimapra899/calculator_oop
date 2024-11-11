export class Display {
    constructor(screenId) {
      this.screen = document.getElementById(screenId);
    }
  
    update(value) {
      this.screen.value = value;
    }
  
    getCurrentValue() {
      return this.screen.value;
    }
  
    clear() {
      this.update('');
    }
  }
  