export default class Card {
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