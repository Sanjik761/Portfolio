const home = document.querySelector('.home');
const about = document.querySelector('.about');
const contact = document.querySelector('.contact');
const homeSec = document.querySelector('.homeSec');
const homePort = document.querySelector('.homePort');
const aboutPort = document.querySelector('.aboutPort');
const contactPort = document.querySelector('.contactPort');
const footer = document.querySelector('.footer');


home.addEventListener('click', () => {
  homeSec.style.cssText = "display: none"
  aboutPort.style.cssText = "display: none"
  contactPort.style.cssText = "display: none"
  homePort.style.cssText = "display: block"
});