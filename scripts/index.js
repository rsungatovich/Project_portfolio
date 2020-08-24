import Card from './Card.js';
import Menu from './Menu.js';
import Stand from './Stand.js';
import Cover from './Cover.js';
import Dropdown from './Dropdown.js';
import MainButton from './MainButton.js';

(function () {
  const dropMenuEl = document.querySelector('.menu');
  const menuListEl = document.querySelector('.menu__list');
  const menuLinksEl = document.querySelectorAll('.menu__link');
  const menuSublinksEl = document.querySelectorAll('.menu__sublink');
  const menuOptionsEl = document.querySelector('.menu__options');
  const menuOptionsBackEl = document.querySelector('.menu__back');
  const coverEl = document.querySelector('.cover');
  const coverTitleEl = document.querySelector('.cover__title');
  const coverPointerEl = document.querySelector('.cover__pointer');
  const mainButtonEl = document.querySelector('.main-button');
  const mainButtonSpanEl = document.querySelector('.main-button__span');
  const standEl = document.querySelector('.stand');
  const standTopEl = document.querySelector('.stand__top');
  const standBottomEl = document.querySelector('.stand__bottom');
  const dropdownEl = document.querySelector('.dropdown')
  const contentContainerEl = document.querySelector('.content__container');
  const standContentEl = document.querySelector('.stand__content');
  const standImageEl = document.querySelector('.stand__image');
  
  //classes
  
  const dropdown = new Dropdown ({ dropdownEl });
  
  const menu = new Menu ({ 
    dropMenuEl,
    menuLinksEl,  
    menuListEl, 
    menuSublinksEl,
    menuOptionsEl, 
    menuOptionsBackEl 
  });
  
  const stand = new Stand ({ 
    standEl, 
    standTopEl, 
    standBottomEl,
    standContentEl,
    standImageEl
  });
  
  const cover = new Cover ({ 
    coverEl, 
    coverTitleEl, 
    coverPointerEl 
  });
  
  const mainButton = new MainButton ({ 
    mainButtonEl, 
    mainButtonSpanEl 
  })
  
  // methods
  
  cover.printingTitle();
  
  cover.flashPointer();
  
  menu.setEventListeners({

  });
  
  mainButton.setEventListeners({
    togglePopup: dropdown.toggle, 
    switchMenu: menu.switchMenu,
    closeOptions: menu.closeOptions,
  });
  
  const createCard = () => {
    const cardInstance = new Card({ contentContainerEl });
    cardInstance.create();
  };
})();