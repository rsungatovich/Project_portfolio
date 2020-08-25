export default class Stand {
  constructor (params) {
    this._stand = params.standEl;
    this._top = params.standTopEl;
    this._bottom = params.standBottomEl;
    this._content = params.standContentEl;
    this._contentImage = params.standImageEl;
    this._contentInfo = params.standInfoEl;
    this._standInfoTitleEl = params.standInfoTitleEl;
    this._standInfoDescEl = params.standInfoDescEl;
    this._optionsContent = params.optionsContent;
  }

  open = () => {
    this._top.classList.add('safe-translate-y-zero');
    this._bottom.classList.add('safe-translate-y-zero');  
  }

  close = () => {
    this._top.classList.remove('safe-translate-y-zero');
    this._bottom.classList.remove('safe-translate-y-zero');
  }

  showImage = (e) => {   
    this._contentImage.classList.add('is-opacity');
    this._switchImage(e); 
  }

  unshowImage = () => {
    this._contentImage.classList.remove('is-opacity');
  }

  _switchImage = (e) => {
    if (e.target.textContent === 'About') {
      this._contentImage.setAttribute('src', './images/about.svg');
    }
    if (e.target.textContent === 'Projects') {
      this._contentImage.setAttribute('src', './images/projects.svg');
    }
    if (e.target.textContent === 'Contacts') {
      this._contentImage.setAttribute('src', './images/contacts.svg');
    }
  }

  showInfo = (e) => {
    this._contentInfo.classList.add('is-opacity');
    this._switchInfo(e);
  }

  unshowInfo = () => {
    this._contentInfo.classList.remove('is-opacity');
  }

  _switchInfo = (e) => {
    this._standInfoTitleEl
      .textContent = this._optionsContent.title[e.target.textContent];
    this._standInfoDescEl
      .textContent = this._optionsContent.description[e.target.textContent];
  }
}