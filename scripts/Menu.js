export default class Menu {
  constructor (params) {
    this._list = params.menuListEl;
    this._links = params.menuLinksEl;
    this._wraps = params.menuWrapsEl;
    this._options = params.menuOptionsEl;
    this._optionsBack = params.menuOptionsBackEl;
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

  setEventListeners = ({ toggleStand, saveStand }) => {
    this._list.addEventListener('mouseover', toggleStand);
    this._list.addEventListener('mouseout', toggleStand);
    this._optionsBack.addEventListener('click', this._comebackMenu)

    this._wraps.forEach((wrap) => {
      wrap.addEventListener('click', this._translateLinks);
    });

    this._links.forEach((link) => {
      link.addEventListener('click', () => {
        saveStand();
        this.openOptions();
      });
    });
  }
}