import Card from './Card.js';
import Menu from './Menu.js';
import Stand from './Stand.js';
import Cover from './Cover.js';
import Dropdown from './Dropdown.js';
import MainButton from './MainButton.js';

(function () {

  const mainButtonNames = ['Close', 'Portfolio'];

  const menuLinksNames = ['About', 'Projects', 'Contacts']

  const optionsNames = {
    about: [
      'About 1', 
      'About 2', 
      'About 3',
    ],
    projects: [
      'Project 1', 
      'Project 2', 
      'Project 3', 
      'Project 4',
    ],
    contacts: [
      'Contact 1', 
      'Contact 2', 
      'Contact 3',
    ],
  }

  const optionsContent = {
    title: {
      'About 1': 'Think about it 1', 
      'About 2': 'Think about it 2', 
      'About 3': 'Think about it 3',
      'Project 1': 'My project 1', 
      'Project 2': 'My project 2', 
      'Project 3': 'My project 3', 
      'Project 4': 'My project 4',
      'Contact 1': 'Just do it 1', 
      'Contact 2': 'Just do it 2', 
      'Contact 3': 'Just do it 3',
    },
    description: {
      'About 1': 'Some text 1', 
      'About 2': 'Some text 2', 
      'About 3': 'Some text 3',
      'Project 1': 'Some text 1', 
      'Project 2': 'Some text 2', 
      'Project 3': 'Some text 3', 
      'Project 4': 'Some text 4',
      'Contact 1': 'Some text 1', 
      'Contact 2': 'Some text 2', 
      'Contact 3': 'Some text 3',
    }
  }

  // DOM
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
  const standInfoEl = document.querySelector('.stand__info');
  const standInfoTitleEl = document.querySelector('.stand__title');
  const standInfoDescEl = document.querySelector('.stand__description');
  
  //classes
  
  const dropdown = new Dropdown ({ dropdownEl });
  
  const menu = new Menu ({
    menuLinksNames,
    optionsNames,
    dropMenuEl,
    menuLinksEl,  
    menuListEl, 
    menuSublinksEl,
    menuOptionsEl, 
    menuOptionsBackEl,
  });

  const stand = new Stand ({
    menuLinksNames,
    optionsContent,
    standEl, 
    standTopEl, 
    standBottomEl,
    standContentEl,
    standImageEl,
    standInfoEl,
    standInfoTitleEl,
    standInfoDescEl,
  });
  
  const cover = new Cover ({ 
    coverEl, 
    coverTitleEl, 
    coverPointerEl 
  });
  
  const mainButton = new MainButton ({
    mainButtonNames,
    mainButtonEl, 
    mainButtonSpanEl 
  })
  
  // methods
  
  cover.printingTitle();
  
  cover.flashPointer();
  
  menu.setEventListeners({
    openStand: stand.open,
    closeStand: stand.close,
    showStandImage: stand.showImage,
    unshowStandImage: stand.unshowImage,
    showStandInfo: stand.showInfo,
    unshowStandInfo: stand.unshowInfo,
  });

  mainButton.setEventListeners({  
    openList: menu.openList,
    switchMenu: menu.switchMenu,
    switchDropdown: dropdown.switch,
    closeOptions: menu.closeOptions,
    unshowStandImage: stand.unshowImage,
    closeStand: stand.close,
    unshowStandInfo: stand.unshowInfo,
  });
  
  const createCard = () => {
    const cardInstance = new Card({ contentContainerEl });
    cardInstance.create();
  };
})();