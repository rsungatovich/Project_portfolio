export default class Dropdown {
  constructor ({ dropdownEl }) {
    this.dropdown = dropdownEl;
  }

  switch = () => {
    if (!this.dropdown.style.transform) {
      this.dropdown.style.transform = 'translateY(0)';
    } else {
      setTimeout(() => {
        this.dropdown.style.transform = '';
      }, 500)
    }
  }
}