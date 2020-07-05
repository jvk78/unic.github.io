
let isMobile = {
  Android: function () {return navigator.userAgent.match(/Android/i);},
  BlackBerry: function () {return navigator.userAgent.match(/BlackBerry/i);},
  iOS: function () {return navigator.userAgent.match(/iPhone|iPad|iPod/i);},
  Opera: function () {return navigator.userAgent.match(/Opera Mini/i);},
  Windows: function () {return navigator.userAgent.match(/IEMobile/i);},
  any: function () {return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());}
};
let body = document.querySelector('body');
let arrow = document.getElementById('arrow');
let subNav = document.getElementById('subNav');
let subNavItems = document.getElementById('subNavItems');
let homeNav = document.getElementById('homeNav');

let scrolled;
let scrollSec;
let scrollPos;
let posTop;
let speedScroll = 70;
const anchors = document.querySelectorAll('a[href^="#"]');



anchors.forEach(function (item) {
  item.addEventListener('click', function (e) {
    e.preventDefault();
    scrolled = window.pageYOffset;
    const blockID = item.getAttribute('href').substr(1);
    scrollSec = document.getElementById(blockID);
    scrollPos = scrollSec.getBoundingClientRect().top;
    posTop = Math.round(scrollPos+scrolled);
    scrolled < posTop ? scrollUp() : scrollDown();
  })
})
function scrollUp() {
  if (scrolled < posTop) { 
    scrolled = scrolled + speedScroll;
    window.scrollTo(0, scrolled);
    requestAnimationFrame(scrollUp)
  } else {
      if(scrolled > posTop) {
        window.scrollTo(0, posTop);
      }
    }
}
function scrollDown() {
  if (scrolled > posTop) { 
    scrolled = scrolled - speedScroll;
    window.scrollTo(0, scrolled);
    requestAnimationFrame(scrollDown);
  } else {
      if(scrolled < posTop) {
        window.scrollTo(0,posTop);
      }
    } 
}



const hideSubMenu = (e) => {
  if (e.target.id != 'arrow'){
    homeNav.classList.remove('z_index');
    arrow.classList.remove('activ');
    subNavItems.classList.remove('show');
  }
}


if (isMobile.any()){
  body.classList.add('mobile');
  document.addEventListener('touchmove', hideSubMenu);
  document.addEventListener('click', hideSubMenu);
} else {
  body.classList.add('desktop');
}

window.onload = () => {
document.querySelector('body').classList.remove('preloader');
}

arrow.addEventListener('click', () =>{
//    e.preventDefault();
    homeNav.classList.toggle('z_index');
    subNavItems.classList.toggle('show');
    arrow.classList.toggle('activ');
  })





//document.onmousedown