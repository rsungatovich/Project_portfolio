import Card from './Card.js';
import Menu from './Menu.js';
import Stand from './Stand.js';
import Cover from './Cover.js';
import Dropdown from './Dropdown.js';
import MainButton from './MainButton.js';

(function () {
  const menuListEl = document.querySelector('.menu__list');
  const menuLinksEl = document.querySelectorAll('.menu__link');
  const menuWrapsEl = document.querySelectorAll('.menu__wrap');
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
  
  //classes
  
  const dropdown = new Dropdown ({ dropdownEl });
  
  const menu = new Menu ({ 
    menuLinksEl, 
    menuWrapsEl, 
    menuListEl, 
    menuSublinksEl,
    menuOptionsEl, 
    menuOptionsBackEl });
  
  const stand = new Stand ({ 
    standEl, 
    standTopEl, 
    standBottomEl });
  
  const cover = new Cover ({ 
    coverEl, 
    coverTitleEl, 
    coverPointerEl });
  
  const mainButton = new MainButton ({ 
    mainButtonEl, 
    mainButtonSpanEl })
  
  // methods
  
  cover.printingTitle();
  
  cover.flashPointer();
  
  menu.setEventListeners({
    toggleStand: stand.toggleStand, 
    saveStand: stand.saveStandState,
  });
  
  mainButton.setEventListeners({ 
    togglePopup: dropdown.toggle, 
    visiblelinks: menu.toggleLinksVisible,
    returnLinks: menu.returnLinks,
    closeOptions: menu.closeOptions,
    closeStand: stand.closeStand,
    notVisibleSublinks: menu.notVisibleSublinks,
    notVisibleMenuBack: menu.notVisibleBack,
  });
  
  const createCard = () => {
    const cardInstance = new Card({ contentContainerEl });
    cardInstance.create();
  };
})();