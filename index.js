let prevScrollPos = window.pageYOffset;

window.onscroll = function() {
  const currentScrollPos = window.pageYOffset;
  
  if (prevScrollPos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-95px"; 
  }

  prevScrollPos = currentScrollPos;
};

const navEl = document.querySelector(".navR");
const BEl = document.querySelector(".burger");

BEl.addEventListener("click", () => {
  navEl.classList.toggle(".nav--open");
  BEl.classList.toggle(".burger.active");
});

BEl.addEventListener("click", () => {
  navEl.classList.remove(".nav--open");
  BEl.classList.remove(".burger.active");
});

