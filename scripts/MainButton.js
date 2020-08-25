export default class MainButton {
  constructor (params) {
    this._button = params.mainButtonEl;
    this._buttonSpan = params.mainButtonSpanEl;
    this._mainButtonNames = params.mainButtonNames;
  }

  _changeName = () => {
    this._buttonSpan.style.opacity = '0';

    setTimeout(() => {
      if (this._buttonSpan.textContent === this._mainButtonNames[1]) {
        this._buttonSpan.textContent = this._mainButtonNames[0];
      } else {
        this._buttonSpan.textContent = this._mainButtonNames[1];
      }

      this._buttonSpan.style.opacity = '';
    }, 1000)
  }

  setEventListeners = ({ 
    switchMenu,
    closeOptions,
    switchDropdown, 
    unshowStandImage,
    closeStand,
    unshowStandInfo,
  }) => {
    this._button.addEventListener('click', () => {
      this._changeName();

      switchMenu();
      closeStand();
      closeOptions();
      unshowStandImage();
      unshowStandInfo();
      switchDropdown();
    })
  }
}