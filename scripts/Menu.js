export default class Menu {
  constructor (params) {
    this._list = params.menuListEl;
    this._links = params.menuLinksEl;
    this._wraps = params.menuWrapsEl;
    this._sublinks = params.menuSublinksEl;
    this._options = params.menuOptionsEl;
    this._optionsBack = params.menuOptionsBackEl;
  }

  _comebackMenu = () => {
    this.closeOptions();
    setTimeout(() => {
      this._backTranslateLinks();
    }, 700)
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

  _visibleSublinks = () => {
    let iterationTime = 1000;

    const iteration = () => {
      const findEl = Array.from(this._sublinks).find((sublink) => {
        return !sublink.classList.contains('menu__sublink_is-visible');
      });

      if (findEl) {
        setTimeout(() => {
          findEl.classList.add('menu__sublink_is-visible');
          iterationTime = 100;
          iteration();
        }, iterationTime)
      }

      if (!findEl) return;
    }

    iteration();
  }

  notVisibleSublinks = () => {
    this._sublinks.forEach((sublink) => {
      sublink.classList.remove('menu__sublink_is-visible');
    })
  }

  _visibleBack = () => {
    setTimeout(() => {
      this._optionsBack.classList.add('menu__back_is-visible');
    }, 1000)
  }

  notVisibleBack = () => {
    this._optionsBack.classList.remove('menu__back_is-visible');
  }

  setEventListeners = ({ toggleStand, saveStand }) => {
    this._list.addEventListener('mouseover', toggleStand);
    this._list.addEventListener('mouseout', toggleStand);

    this._optionsBack.addEventListener('click', (e) => {
      this._comebackMenu();
      this.notVisibleSublinks();
      this.notVisibleBack();
    })

    this._wraps.forEach((wrap) => {
      wrap.addEventListener('click', this._translateLinks);
    });

    this._links.forEach((link) => {
      link.addEventListener('click', (e) => {
        saveStand();
        this.openOptions();
        this._visibleSublinks();
        this._visibleBack();
      });
    });
  }
}