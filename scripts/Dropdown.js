export default class Dropdown {
  constructor ({ dropdownEl }) {
    this._popup = dropdownEl;
  }

  toggle = () => {
    if (!this._popup.classList.contains('translate-y-zero')) {
      this._popup.classList.add('translate-y-zero');
    } else {
      setTimeout(() => {
        this._popup.classList.remove('translate-y-zero');
      }, 1200)
    }
  }
}