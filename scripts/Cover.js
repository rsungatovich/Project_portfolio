export default class Cover {
  constructor (params) {
    this._cover = params.coverEl;
    this._title = params.coverTitleEl;
    this._pointer = params.coverPointerEl;
    this._allText = ['JavaScript', 'Node.JS', 'HTML5', 'CSS3'];
    this._text = 'Wellcome';
    this._index = 0;
  }

  _switchTitle = () => {
    if (!(this._index < this._allText.length)) {
      this._index = 0;
    }

    this._text = this._allText[this._index];
    this._index++;
  }

  _eraseTitle = () => {
    let letters = this._text.split('');
    let i = letters.length;
    const iteration = () => {
      setTimeout(() => {
        this._title.textContent = letters.join('');
        if (i > 0) {
          i--;
          letters.length = i;
          iteration();
        } else {
          setTimeout(() => {
            this._switchTitle();
            this.printingTitle();
          }, 1000);
          return;
        }
      }, 100)
    }

    iteration();    
  }

  printingTitle = () => {
    let i = 0;
    const iteration = () => {
      setTimeout(() => {
        this._title.textContent += this._text[i];
        i++
        if (i < this._text.length) {
          iteration();
        } else {
          setTimeout(() => {
            this._eraseTitle();
          }, 2000);
          return;
        }
      }, 100)
    }

    iteration();
  }

  flashPointer = () => {
    setInterval(() => {
      if (this._pointer.style.opacity === '1') {
        this._pointer.style.opacity = 0;
      } else {
        this._pointer.style.opacity = 1;
      }
    }, 500);
  }
}