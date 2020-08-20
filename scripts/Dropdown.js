export default class Dropdown {
  constructor ({ dropdownEl }) {
    this._popup = dropdownEl;
  }

  toggle = () => {
    if (!this._popup.classList.contains('dropdown_is-opened')) {
      this._popup.classList.add('dropdown_is-opened');
    } else {
      setTimeout(() => {
        this._popup.classList.remove('dropdown_is-opened');
      }, 1200)
    }
  }
}