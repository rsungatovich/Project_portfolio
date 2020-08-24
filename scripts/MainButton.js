export default class MainButton {
  constructor (params) {
    this._button = params.mainButtonEl;
    this._buttonSpan = params.mainButtonSpanEl;
  }

  _buttonStatus = () => {
    this._button.classList.toggle('open');
    return this._button.classList.contains('open');
  }

  _changeName = () => {
    this._buttonSpan.classList.add('no-opacity');

    setTimeout(() => {
      if (this._buttonSpan.textContent === 'Portfolio') {
        this._buttonSpan.textContent = 'Close';
      } else {
        this._buttonSpan.textContent = 'Portfolio';
      }

      this._buttonSpan.classList.remove('no-opacity');
    }, 800)
  }

  setEventListeners = ({ 
    togglePopup, 
    switchMenu,
    unsafeStand,
    closeOptions, }) => {
    this._button.addEventListener('click', () => {
      this._changeName();

      if (this._buttonStatus()) {

      } else {
        unsafeStand();
        closeOptions();
      }

      switchMenu();
      togglePopup();
    })
  }
}