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

about.addEventListener('click', () => {
  homePort.style.cssText = "display: none"
  homeSec.style.cssText = "display: none"
 aboutPort.style.cssText = "display: block; background: none"
  contactPort.style.cssText = "display: none"
  footer.style.cssText = "display: flex; justify-content: space-between; margin: 0 50px; color: rgb(100, 100, 100); font-family: sans-serif; font-size: 15px;"
});

contact.addEventListener('click', () => {
  aboutPort.style.cssText = "display: none"
 homePort.style.cssText = "display: none"
  homeSec.style.cssText = "display: none"
  contactPort.style.cssText = "display: block; background-size: 110%; background-image: url(https://www.catenon.com/front/img/backgrounds/bg-contact.jpg); background-repeat: no-repeat"
});