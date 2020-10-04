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
let i = 0;
let txt = 'Welcome to Pick & GO We have Awesome rovers for you'; 
let speed = 100; 

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("typewriter").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }else{
    setTimeout(erase, speed + 100);
  }
  
}
function erase(){
    if(i>=2){
        let temp=txt.substring(0,i);
        document.getElementById("typewriter").innerHTML =temp;
        i--;
        setTimeout(erase, speed);
    }else{
        i=2;
        setTimeout(typeWriter, speed);
    }
}
typeWriter();
