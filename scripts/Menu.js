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
    this._options.classList.remove('translate-y-zero', 'z-index-up');
  }

  openOptions = () => {
    this._options.classList.add('translate-y-zero', 'z-index-up');
  }

  toggleLinksVisible = () => {
    this._links.forEach((link) => {
      link.classList.toggle('is-opacity');
    })
    this._wraps.forEach((wrap) => {
      wrap.classList.toggle('is-opacity');
    })
  }

  _translateLinks = () => {
    let iterationTime = 0;

    const iteration = () => {
      const findEl = Array.from(this._links).find((link) => {
        return !link.classList.contains('shift-to-left');
      });

      if (findEl) {
        setTimeout(() => {
          findEl.classList.add('shift-to-left');
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
        return link.classList.contains('shift-to-left');
      });

      if (findEl) {
        setTimeout(() => {
          findEl.classList.remove('shift-to-left');
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
        link.classList.remove('shift-to-left');
      })
    }, 1000)
  }

  _visibleSublinks = () => {
    let iterationTime = 1000;

    const iteration = () => {
      const findEl = Array.from(this._sublinks).find((sublink) => {
        return !sublink.classList.contains('is-opacity');
      });

      if (findEl) {
        setTimeout(() => {
          findEl.classList.add('is-opacity');
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
      sublink.classList.remove('is-opacity');
    })
  }

  _visibleBack = () => {
    setTimeout(() => {
      this._optionsBack.classList.add('is-opacity');
    }, 1000)
  }

  notVisibleBack = () => {
    this._optionsBack.classList.remove('is-opacity');
  }

  setEventListeners = ({ 
    toggleStand, 
    saveStand, 
    visibleContent, 
    notVisibleContent }) => {
    this._list.addEventListener('mouseover', toggleStand);
    this._list.addEventListener('mouseout', toggleStand);

    this._optionsBack.addEventListener('click', (e) => {
      this._comebackMenu();
      this.notVisibleSublinks();
      this.notVisibleBack();
      notVisibleContent();
    })

    this._wraps.forEach((wrap) => {
      wrap.addEventListener('click', this._translateLinks);
      wrap.addEventListener('mouseover', (e) => {
        notVisibleContent();
        visibleContent();
      });
    });

    this._links.forEach((link) => {
      link.addEventListener('click', (e) => {
        saveStand();
        this.openOptions();
        this._visibleSublinks();
        this._visibleBack();
        notVisibleContent();
      });
    });
  }
}