export class Theme {
    constructor() {
      this.isDarkMode = false;
      this.applyTheme();
    }
  
    toggleTheme() {
      this.isDarkMode = !this.isDarkMode;
      this.applyTheme();
    }
  
    applyTheme() {
      const body = document.body;
      if (this.isDarkMode) {
        body.style.backgroundColor = '#333';
        body.style.color = '#fff';
      } else {
        body.style.backgroundColor = '#f0f0f0';
        body.style.color = '#000';
      }
    }
  }
  