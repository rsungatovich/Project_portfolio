export default class Stand {
  constructor (params) {
    this._stand = params.standEl;
    this._top = params.standTopEl;
    this._bottom = params.standBottomEl;
    this._content = params.standContentEl;
    this._contentImage = params.standImageEl;
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

  unshowImage = () => {
    this._contentImage.classList.remove('is-opacity');
  }
}