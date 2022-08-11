import home from './home';
import menu from './menu';
import contact from './contact';

console.log('webpack is working ooh');
const navHome = document.querySelector('.home');
const navMenu = document.querySelector('.menu');
const navContact = document.querySelector('.contact');
const content = document.querySelector('#content');

window.onload = function () {
  home();
};

function pageReset() {
  content.innerHTML = '';
  return content;
}
console.log(navHome);
navHome.addEventListener('click', pageReset);
navHome.addEventListener('click', home);

navMenu.addEventListener('click', pageReset);
navMenu.addEventListener('click', menu);

navContact.addEventListener('click', pageReset);
navContact.addEventListener('click', contact);
// function pageReset() {
//   while (content.children) {
//     console.log(content.childNodes);
//     content.remove(content.childNodes);
//     return content;
//   }
// }
