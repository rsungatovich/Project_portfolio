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
    this._menuLinksNames = params.menuLinksNames;
  }

  open = () => {
    this._top.style.transform = 'translateY(0)';
    this._bottom.style.transform = 'translateY(0)';
  }

  close = () => {
    this._top.style.transform = '';
    this._bottom.style.transform = '';
  }

  showImage = (e) => {   
    this._contentImage.style.opacity = '.8';
    this._contentImage.style.visibility = 'visible';
    this._switchImage(e); 
  }

  unshowImage = () => {
    this._contentImage.style.opacity = '';
    this._contentImage.style.visibility = 'hidden';
  }

  _switchImage = (e) => {
    if (e.target.textContent === this._menuLinksNames[0]) {
      this._contentImage.setAttribute('src', './images/about.svg');
    }
    if (e.target.textContent === this._menuLinksNames[1]) {
      this._contentImage.setAttribute('src', './images/projects.svg');
    }
    if (e.target.textContent === this._menuLinksNames[2]) {
      this._contentImage.setAttribute('src', './images/contacts.svg');
    }
  }

  showInfo = (e) => {
    this._contentInfo.style.opacity = '1';
    this._contentInfo.style.visibility = 'visible';
    this._switchInfo(e);
  }

  unshowInfo = () => {
    this._contentInfo.style.opacity = '';
    this._contentInfo.style.visibility = 'hidden';
  }

  _switchInfo = (e) => {
    this._standInfoTitleEl
      .textContent = this._optionsContent.title[e.target.textContent];
    this._standInfoDescEl
      .textContent = this._optionsContent.description[e.target.textContent];
  }
}