export default class Stand {
  constructor (params) {
    this._stand = params.standEl;
    this._top = params.standTopEl;
    this._bottom = params.standBottomEl;
    this._content = params.standContentEl;
    this._contentImage = params.standImageEl;
  }

  safeState = () => {
    this._top.classList.add('safe-translate-y-zero');
    this._bottom.classList.add('safe-translate-y-zero');  
  }

  unsafeStand = () => {
    this._top.classList.remove('safe-translate-y-zero');
    this._bottom.classList.remove('safe-translate-y-zero');
  }

  switchStand = () => {
    this._top.classList.toggle('translate-y-zero');
    this._bottom.classList.toggle('translate-y-zero');
  }

  visibleStandContent = () => {
    setTimeout(() => {
      this._content.classList.add('is-opacity');
    }, 500)
  }

  unvisibleStandContent = () => {
    this._content.classList.remove('is-opacity');
  }

  setContentImage = (e) => {   
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

  visibleContentImage = () => {
    this._contentImage.style.display = 'block';
  }

  unvisibleContentImage = () => {
    this._contentImage.style.display = 'none';
  }
}