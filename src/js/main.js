"use strict";

// service worker registration - remove if you're not going to use it

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('serviceworker.js').then(function(registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function(err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}

// place your code below


console.log(`Hello world!`);

console.log('siema');
console.log('Super tajne dane')
const name = 'Maciek';
const age = 27;
console.log(name);
console.log(age);
console.log(`Nazywam się ${name} i mam ${age} lat`);

const heading = document.querySelector('.main__heading');

console.log(heading);

const paragraphs = document.querySelectorAll('p');

console.log(paragraphs);

const change = document.querySelector('.about__test');

console.log(change.innerHTML);
change.innerHTML = 'Zmiana wprowadzona za pomocą JS';

switch (age) {
    case 20:
        console.log('masz równo 20 lat');
    break;
    case 30:
        console.log('masz równo 30 lat');
    break;
    default:
        console.log(`masz ${age} lat`);
    break;
}

function calculate(x) {
    x = x + 3;
    console.log(x);
    return x+7;
}

console.log(calculate(2));

const calculateFat = x => (x+3)*7;

console.log(calculateFat(2));

const welcome = (name, age) => {
    console.log(`Witaj ${name}, masz ${age} lat`);
}

welcome('Maciek', 29);

const button = document.querySelector(`.header__button--js`);
console.log(button)

button.addEventListener('click', (e) => {
    const header = document.querySelector(`.header__title--js`);
    header.innerHTML = 'niespodzianka';
    header.classList.add(`header__title--red`);
});

const navigationSwitcher = document.querySelector(`.navigation__switcher--js`)

navigationSwitcher.addEventListener(`click`, (e) => {
const navigationList = document.querySelector(`.navigation__list--js`);
navigationList.classList.toggle(`navigation__list--visible`);
});

const focusInput = document.querySelector('.focus--js');

if localStorage.getItem('focusInput').length > 0) {
  focusInput.value = localStorage.getItem('focusInput')
}

focusInput.addEventListener('keyup', (e) => {
  localStorage.setItem('focusInput', e.target.value);
});
