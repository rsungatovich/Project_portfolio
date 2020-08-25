export default class Menu {
  constructor (params) {
    this._menu = params.dropMenuEl;
    this._list = params.menuListEl;
    this._links = params.menuLinksEl;
    this._sublinks = params.menuSublinksEl;
    this._options = params.menuOptionsEl;
    this._optionsBack = params.menuOptionsBackEl;
    this._optionsNames = params.optionsNames;
    this._menuLinksNames = params.menuLinksNames;
  }

  switchMenu = () => {
    if (+this._menu.style.opacity) {
      this._menu.style.opacity = '';
      this._links.forEach((link) => link.style.visibility = 'hidden');
    } else {
      setTimeout(() => {
        this._menu.style.opacity = '1';
        this._links.forEach((link) => link.style.visibility = 'visible');
      }, 1000)
    }
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
        // return !link.classList.contains('shift-to-left');
        return !link.style.margin;
      });

      if (findEl) {
        setTimeout(() => {
          findEl.style.margin = '0 0 0 -150%';
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
        return link.style.margin;
      });

      if (findEl) {
        setTimeout(() => {
          findEl.style.margin = '';
          iterationTime = 250;
          iteration();
        }, iterationTime)
      }

      if (!findEl) return;
    }

    iteration();
  }

  // options

  openOptions = () => {
    this._visibleSublinks();
    this._visibleBackButton();

    this._options.style.transform = 'translateY(0)';
    this._options.style.zIndex = '99';
  }

  closeOptions = () => {
    this._unvisibleSublinks();
    this._unvisibleBackButton();

    this._options.style.transform = '';
    this._options.style.zIndex = '';
  }

  _visibleSublinks = () => {
    let iterationTime = 1000;

    const iteration = () => {
      const findEl = Array.from(this._sublinks).find((sublink) => {
        return !sublink.style.opacity;
      });

      if (findEl) {
        setTimeout(() => {
          findEl.style.opacity = '1';
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
      sublink.style.opacity = '';
    })
  }

  _visibleBackButton = () => {
    setTimeout(() => {
      this._optionsBack.style.opacity = '1';
    }, 1000)
  }

  _unvisibleBackButton = () => {
    this._optionsBack.style.opacity = '';
  }

  // link text

  setLinkText = (e) => {
    if (e.target.textContent === this._menuLinksNames[0]) {
      const length = this._sublinks.length;

      for (let i = 0; i < length; i++) {
        if (!this._optionsNames.about[i]) {
          this._sublinks[i].style.display = 'none';
          continue;
        }
        this._sublinks[i].textContent = this._optionsNames.about[i];
      }
    }

    if (e.target.textContent === this._menuLinksNames[1]) {
      const length = this._sublinks.length;
      for (let i = 0; i < length; i++) {
        if (!this._optionsNames.projects[i]) {
          this._sublinks[i].style.display = 'none';
          continue;
        }
        this._sublinks[i].textContent = this._optionsNames.projects[i];
      }
    }

    if (e.target.textContent === this._menuLinksNames[2]) {
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
      sublink.style.display = '';
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

      link.addEventListener('mouseout', (e) => {
        unshowStandImage();
      });
    });

    this._sublinks.forEach((sublink) => {
      sublink.addEventListener('mouseover', (e) => {
        showStandInfo(e);
      });
    })
  }
}