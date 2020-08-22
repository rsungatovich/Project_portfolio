export default class Dropdown {
  constructor ({ dropdownEl }) {
    this._popup = dropdownEl;
  }

  toggle = () => {
    if (!this._popup.classList.contains('is-opened')) {
      this._popup.classList.add('is-opened');
    } else {
      setTimeout(() => {
        this._popup.classList.remove('is-opened');
      }, 1200)
    }
  }
}