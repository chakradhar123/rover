const burger = document.querySelector('.burger');
const icon = document.querySelector('i');
const nav = document.querySelector('.nav');
const header = document.querySelector('header')
console.log(nav)
function toggleNav() {
   
icon.classList.toggle('fa-bars');
icon.classList.toggle('fa-times');
console.log(icon)
nav.classList.toggle('nav-active');
nav.classList.toggle('nav-show');
header.classList.toggle('bg-black')
console.log(nav)
}
console.log(burger)
burger.addEventListener('click', function() {
toggleNav();
console.log('clicked')
});