export default class Menu {
  constructor (params) {
    this._menu = params.dropMenuEl;
    this._list = params.menuListEl;
    this._links = params.menuLinksEl;
    this._sublinks = params.menuSublinksEl;
    this._options = params.menuOptionsEl;
    this._optionsBack = params.menuOptionsBackEl;
    this._optionsNames = params.optionsNames;
  }

  switchMenu = () => {
    this._menu.classList.toggle('is-opacity');
  }

  // options

  openOptions = () => {
    this._visibleSublinks();
    this._visibleBackButton();
    this._options.classList.add('translate-y-zero', 'z-index-up');
  }

  closeOptions = () => {
    this._unvisibleSublinks();
    this._unvisibleBackButton();
    this._options.classList.remove('translate-y-zero', 'z-index-up');
  }

  _visibleBackButton = () => {
    setTimeout(() => {
      this._optionsBack.classList.add('is-opacity');
    }, 1000)
  }

  _unvisibleBackButton = () => {
    this._optionsBack.classList.remove('is-opacity');
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

  _unvisibleSublinks = () => {
    this._sublinks.forEach((sublink) => {
      sublink.classList.remove('is-opacity');
    })
  }


  // list

  openList = () => {
    this._unshiftLinks();
  }

  closeList = () => {
    this._shiftLinks();
  }

  _shiftLinks = () => {
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

  _unshiftLinks = () => {
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


  // link text

  setLinkText = (e) => {
    if (e.target.textContent === 'About') {
      const length = this._sublinks.length;

      for (let i = 0; i < length; i++) {
        if (!this._optionsNames.about[i]) {
          this._sublinks[i].style.display = 'none';
          continue;
        }
        this._sublinks[i].textContent = this._optionsNames.about[i];
      }
    }

    if (e.target.textContent === 'Projects') {
      const length = this._sublinks.length;
      for (let i = 0; i < length; i++) {
        if (!this._optionsNames.projects[i]) {
          this._sublinks[i].style.display = 'none';
          continue;
        }
        this._sublinks[i].textContent = this._optionsNames.projects[i];
      }
    }

    if (e.target.textContent === 'Contacts') {
      const length = this._sublinks.length;
      for (let i = 0; i < length; i++) {
        if (!this._optionsNames.contacts[i]) {
          this._sublinks[i].style.display = 'none';
          continue;
        }
        this._sublinks[i].textContent = this._optionsNames.contacts[i];
      }
    }
  }

  resetLinkText = () => {
    this._sublinks.forEach((sublink) => {
      sublink.textContent = '';
      sublink.removeAttribute('style');
    })
  }

  setEventListeners = ({
    openStand,
    closeStand,
    showStandImage,
    unshowStandImage,
    showStandInfo,
    unshowStandInfo,
  }) => {
    this._optionsBack.addEventListener('click', (e) => {
      closeStand();
      unshowStandInfo();
      this.openList();
      this.closeOptions();
      this.resetLinkText();
    })

    this._links.forEach((link) => {
      link.addEventListener('click', (e) => {
        openStand();
        unshowStandImage();
        this.closeList();
        this.openOptions();
        this.setLinkText(e);
      });

      link.addEventListener('mouseover', (e) => {
        showStandImage(e);
      });
    });

    this._sublinks.forEach((sublink) => {
      sublink.addEventListener('mouseover', (e) => {
        showStandInfo(e);
      });
    })
  }
}