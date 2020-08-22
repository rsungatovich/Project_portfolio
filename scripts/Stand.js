export default class Stand {
  constructor (params) {
    this._stand = params.standEl;
    this._standTop = params.standTopEl;
    this._standBottom = params.standBottomEl;
    this._standContent = params.standContentEl;
  }

  saveStandState = () => {
    this._standTop.classList.add('save-open');
    this._standBottom.classList.add('save-open');  
  }

  closeStand = () => {
    this._standTop.classList.remove('save-open');
    this._standBottom.classList.remove('save-open');
  }

  toggleStand = () => {
    this._standTop.classList.toggle('is-opened');
    this._standBottom.classList.toggle('is-opened');
  }

  notVisibleStandContent = () => {
    this._standContent.classList.remove('is-visible');
  }

  visibleStandContent = () => {
    setTimeout(() => {
      this._standContent.classList.add('is-visible');
    }, 500) 
  }
}