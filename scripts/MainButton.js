export default class MainButton {
  constructor (params) {
    this._button = params.mainButtonEl;
    this._buttonSpan = params.mainButtonSpanEl;
  }

  _changeName = () => {
    this._buttonSpan.classList.add('not-visible');

    setTimeout(() => {
      if (this._buttonSpan.textContent === 'Portfolio') {
        this._buttonSpan.textContent = 'Close';
      } else {
        this._buttonSpan.textContent = 'Portfolio';
      }

      this._buttonSpan.classList.remove('not-visible');
    }, 800)
  }

  setEventListeners = ({ 
    togglePopup, 
    visiblelinks, 
    returnLinks,
    closeOptions,
    closeStand,
    notVisibleSublinks,
    notVisibleMenuBack, }) => {
    this._button.addEventListener('click', () => {
      togglePopup();
      visiblelinks();
      returnLinks();
      closeOptions();
      closeStand();
      notVisibleSublinks();
      notVisibleMenuBack();
      this._changeName();
    })
  }
}