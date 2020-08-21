// Select DOM Items
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuBranding = document.querySelector('.menu-branding');
const navItems = document.querySelectorAll('.nav-item');

// Set Initial State Of Menu
let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add('close');
    menu.classList.add('show');
    menuNav.classList.add('show');
    menuBranding.classList.add('show');
    navItems.forEach(item => item.classList.add('show'));

    // Set Menu State
    showMenu = true;
  } else {
    menuBtn.classList.remove('close');
    menu.classList.remove('show');
    menuNav.classList.remove('show');
    menuBranding.classList.remove('show');
    navItems.forEach(item => item.classList.remove('show'));

    // Set Menu State
    showMenu = false;
  }
}
/* //Select DOM Item

const menuBtn = document.querySelector('.menu-btn')
const menu = document.querySelector('.menu')
const menuNav = document.querySelector('.menu-nav')
const menuBranding = document.querySelector('.menu-branding')
const navItem = document.querySelectorAll('.nav-item')


//Set Initial State of Menu

let showMenu = false

menuBtn.addEventListener('click',toggleMenu)

function toggleMenu(){
  if(!showMenu){
    menuBtn.classList.add('close')
    menu.classList.add('show')
    menuNav.classList.add('close')
    menuBranding.classList.add('close')
    navItem.forEach(item=>item.classList.add('show'))


    

    //set Menu state
    showMenu=true;
  }else{

    menuBtn.classList.remove('close')
    menu.classList.remove('show')
    menuNav.classList.remove('close')
    menuBranding.classList.remove('close')
    navItem.forEach(item=>item.classList.remove('show'))

    //set Menu state
    showMenu=false;
  }


} */


