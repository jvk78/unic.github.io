const homeLogo = document.getElementById('homeLogo');
const bookImg = document.getElementById('bookImg');
let butterfly = document.getElementById('butterfly');
let butterflyTop = butterfly.getBoundingClientRect().top
window.addEventListener('scroll', () => {
  let value = window.scrollY;
  butterfly.style.right =-value * .5 + 'px';
  butterfly.style.top =value * .7 + 'px';
  butterfly.style.transform ='scale('+ (1-((value * .2)/100))+')';
  homeLogo.style.top = value * 1.2 + 'px';
  homeNav.style.opacity = 1 - ((value * .7)/100);
  homeNav.style.transform ='scale('+ (1 - ((value * .7)/100))+')';
  homeNav.style.top = value * 1.2 + 'px';
  bookImg.style.transform ='scale('+ (1+((value * .4)/100))+')';
  bookImg.style.top = value * .2 + 'px';
//  console.log(butterflyTop)
//  console.log((value * .5 )/100+ 'px')
})