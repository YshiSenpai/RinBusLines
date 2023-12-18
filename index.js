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



