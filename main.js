window.addEventListener("scroll", () => {
  document
    .querySelector("nav")
    .classList.toggle("window-scrolled", window.scrollY > 0);
});

const textButtons = document.querySelectorAll(".contact-btn");

textButtons.forEach((textButton) => {
  let text = textButton.querySelector("p");

  text.innerHTML = text.innerHTML
    .split("")
    .map(
      (character, index) =>
        `<span style="transform: rotate(${index * 12}deg)">${character}</span>`
    )
    .join("");
});

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    599: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1023: {
      slidesPerView: 3,
      spaceBetween: 60,
    },
  },
});

const nav = document.querySelector('.nav-links');
const openNavbtn = document.querySelector('#nav-toggle-open');
const closeNavBtn = document.querySelector('#nav-toggle-close');

const openNav = () => {
  nav.getElementsByClassName.display = 'flex';
  openNavbtn.getElementsByClassName.display = 'none';
  closeNavBtn.getElementsByClassName.display = 'inline-block';
}

openNavbtn.addEventListener('click', openNav);

const closeNav = () => {
  nav.getElementsByClassName.display = 'none';
  openNavbtn.getElementsByClassName.display = 'inline-block';
  closeNavBtn.getElementsByClassName.display = 'none';
}

closeNavbtn.addEventListener('click', closeNav);

nav.querySelectorAll('li a').forEach(navLink => {
  navLink.addEventListener('click', closeNav);
})