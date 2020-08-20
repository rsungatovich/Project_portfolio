const dropdownEl = document.querySelector('.dropdown')
const menuListEl = document.querySelector('.menu__list');
const menuLinksEl = document.querySelectorAll('.menu__link');
const menuWrapsEl = document.querySelectorAll('.menu__wrap');
const coverEl = document.querySelector('.cover');
const coverTitleEl = document.querySelector('.cover__title');
const coverPointerEl = document.querySelector('.cover__pointer');
const mainButtonEl = document.querySelector('.main-button');
const mainButtonSpanEl = document.querySelector('.main-button__span');
const contentContainerEl = document.querySelector('.content__container');

const standEl = document.querySelector('.stand');
const standTopEl = document.querySelector('.stand__top');
const standBottomEl = document.querySelector('.stand__bottom');

const menuOptionsEl = document.querySelector('.menu__options');
const menuOptionsBackEl = document.querySelector('.menu__back');

class Card {
  constructor ({ contentContainerEl }) {
    this._x = null;
    this._container = contentContainerEl;
  }

  create = () => {
    this._card = document.createElement('div');
    this._cardInner = document.createElement('div');
    this._card.classList.add('card');
    this._cardInner.classList.add('card__inner');
    this._card.appendChild(this._cardInner);
    this._container.appendChild(this._card);
    this._setEventListeners();
  }

  _addClass = (e) => {
    if (!this._x) {
      this._cardInner.classList.remove('card__inner_is-right');
      this._cardInner.classList.remove('card__inner_is-left');
      return;
    }

    if (this._x < (this._card.offsetWidth / 2)) {
      this._cardInner.classList.add('card__inner_is-left');
      this._cardInner.classList.remove('card__inner_is-right');
    }
  
    if (this._x > (this._card.offsetWidth / 2)) {
      this._cardInner.classList.add('card__inner_is-right');
      this._cardInner.classList.remove('card__inner_is-left');
    }

    if (e.type === 'click') {
      this._cardInner.classList.toggle('card__inner_is-taken');
    }
  }

  _setMousePosition = (e) => {
    this._x = e.offsetX;
    this._addClass(e);
  }

  _resetMousePosition = (e) => {
    this._x = null;
    this._addClass(e);
  }

  _setEventListeners = () => {
    this._card.addEventListener('click', this._addClass);
    this._card.addEventListener('mousemove', this._setMousePosition);
    this._card.addEventListener('mouseout', this._resetMousePosition);
  }
}

class Menu {
  constructor ({ 
    menuLinksEl, 
    menuWrapsEl, 
    menuListEl, 
    menuOptionsEl, 
    menuOptionsBackEl }) {
    this._list = menuListEl;
    this._links = menuLinksEl;
    this._wraps = menuWrapsEl;
    this._options = menuOptionsEl;
    this._optionsBack = menuOptionsBackEl;
  }

  _comebackMenu = () => {
    this.closeOptions();
    setTimeout(() => {
      this._backTranslateLinks();
    }, 1500)
  }

  closeOptions = () => {
    this._options.classList.remove('menu__options_is-opened');
  }

  openOptions = () => {
    this._options.classList.add('menu__options_is-opened');
  }

  toggleLinksVisible = () => {
    this._links.forEach((link) => {
      link.classList.toggle('is-visible');
    })
    this._wraps.forEach((wrap) => {
      wrap.classList.toggle('is-visible');
    })
  }

  _translateLinks = () => {
    let iterationTime = 0;

    const iteration = () => {
      const findEl = Array.from(this._links).find((link) => {
        return !link.classList.contains('menu__link_translate');
      });

      if (findEl) {
        setTimeout(() => {
          findEl.classList.add('menu__link_translate');
          iterationTime = 250;
          iteration();
        }, iterationTime)
      }

      if (!findEl) return;
    }

    iteration();
  }

  _backTranslateLinks = () => {
    let iterationTime = 0;

    const iteration = () => {
      const findEl = Array.from(this._links).find((link) => {
        return link.classList.contains('menu__link_translate');
      });

      if (findEl) {
        setTimeout(() => {
          findEl.classList.remove('menu__link_translate');
          iterationTime = 250;
          iteration();
        }, iterationTime)
      }

      if (!findEl) return;
    }

    iteration();
  }

  returnLinks = () => {
    setTimeout(() => {
      this._links.forEach((link) => {
        link.classList.remove('menu__link_translate');
      })
    }, 1000)
  }

  setEventListeners = (toggleStand, saveStand) => {
    this._list.addEventListener('mouseover', toggleStand);
    this._list.addEventListener('mouseout', toggleStand);
    this._optionsBack.addEventListener('click', this._comebackMenu)

    this._wraps.forEach((wrap) => {
      wrap.addEventListener('click', this._translateLinks);
    });

    this._links.forEach((link) => {
      link.addEventListener('click', saveStand);
      link.addEventListener('mousedown', this.openOptions);
    });
  }
}

class Dropdown {
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

class Stand {
  constructor ({ standEl, standTopEl, standBottomEl }) {
    this._stand = standEl;
    this._standTop = standTopEl;
    this._standBottom = standBottomEl;
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
}

class MainButton {
  constructor ({ mainButtonEl, mainButtonSpanEl }) {
    this._button = mainButtonEl;
    this._buttonSpan = mainButtonSpanEl;
  }

  _changeName = () => {
    this._buttonSpan.classList.add('main-button__span_is-changed');

    setTimeout(() => {
      if (this._buttonSpan.textContent === 'Portfolio') {
        this._buttonSpan.textContent = 'Close';
      } else {
        this._buttonSpan.textContent = 'Portfolio';
      }

      this._buttonSpan.classList.remove('main-button__span_is-changed');
    }, 800)
  }

  setEventListeners = ({ 
    togglePopup, 
    visiblelinks, 
    returnLinks,
    closeOptions,
    closeStand }) => {
    this._button.addEventListener('click', () => {
      togglePopup();
      visiblelinks();
      returnLinks();
      closeOptions();
      closeStand();
      this._changeName();
    })
  }
}

class Cover {
  constructor (options) {
    this._cover = options.coverEl;
    this._title = options.coverTitleEl;
    this._pointer = options.coverPointerEl;
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

const dropdown = new Dropdown ({ dropdownEl });

const menu = new Menu ({ 
  menuLinksEl, 
  menuWrapsEl, 
  menuListEl, 
  menuOptionsEl, 
  menuOptionsBackEl });

const stand = new Stand ({ standEl, standTopEl, standBottomEl });

const cover = new Cover ({ coverEl, coverTitleEl, coverPointerEl });

const mainButton = new MainButton ({ mainButtonEl, mainButtonSpanEl })

cover.printingTitle();

cover.flashPointer();

menu.setEventListeners(stand.toggleStand, stand.saveStandState);

mainButton.setEventListeners({ 
  togglePopup: dropdown.toggle, 
  visiblelinks: menu.toggleLinksVisible,
  returnLinks: menu.returnLinks,
  closeOptions: menu.closeOptions,
  closeStand: stand.closeStand,
});

const createCard = () => {
  const cardInstance = new Card({ contentContainerEl });
  cardInstance.create();
};

createCard();
createCard();
createCard();
createCard();



