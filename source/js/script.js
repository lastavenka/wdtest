'use strict';

var menuTitle = document.querySelector('.products__menu-title');
var menu = document.querySelector('.products__menu');
var menuNav = document.querySelector('.products__nav');
var changeView = document.querySelector('.products__view');
var productsTile = document.querySelector('.products__list');
var productsTable = document.querySelector('.products__table');

var onMenuHover = function() {
  menuTitle.classList.toggle('products__menu-title--hidden');
  menu.classList.toggle('products__menu--hidden');
  menuNav.classList.toggle('products__nav--hidden');
};
var onMenuUnhover = function() {
  menuTitle.classList.toggle('products__menu-title--hidden');
  menu.classList.toggle('products__menu--hidden');
  menuNav.classList.toggle('products__nav--hidden');
};

var onChangeViewHover = function() {
  if (productsTable.style.display === 'none') {
    productsTile.style.display = 'none';
    productsTable.style.display = 'table';
  } else {
    productsTable.style.display = 'none';
    productsTile.style.display = 'flex';
  }
};

menu.addEventListener('mouseover', function() {
  onMenuHover();
});

menu.addEventListener('mouseout', function() {
  onMenuUnhover();
});

changeView.addEventListener('mouseover', function() {
  onChangeViewHover();
});
