// toggle active and inactive menu items

var menu = document.getElementById("menu");
var navLinks = document.querySelectorAll(".navLinks")
var menuCircle = document.querySelector(".menu_circle")

menu.addEventListener("click", function () {
  const lines = document.querySelectorAll(".line");
  menu.classList.toggle("active");
  lines.forEach((line) => {
    line.classList.remove("no-animation");
    line.classList.toggle("active");
    line.classList.toggle("inactive");
  });
  navLinks.forEach((link) => {
    link.classList.toggle("close");
    link.classList.toggle("open");
  });
  menuCircle.classList.remove("no-animation");
  menuCircle.classList.toggle("circle2");
  menuCircle.classList.toggle("collapse_menu");
});

// Mobile Nav
const hamburger = document.querySelector(".hamburger");
const bar1 = document.querySelector(".bar1");
const bar2 = document.querySelector(".bar2");
const bar3 = document.querySelector(".bar3");
const mobileNav = document.querySelector(".mobileNav");

hamburger.addEventListener("click", () => {
  bar1.classList.toggle("animateBar1");
  bar2.classList.toggle("animateBar2");
  bar3.classList.toggle("animateBar3");
  mobileNav.classList.toggle("openDrawer");
})

function toggleDarkMode(){
  const darkModeSwitch = document.getElementById("dark-mode") ;
  if (darkModeSwitch.checked == false){
      document.getElementById("theme").href = "style-dark-v2.css";
    }else{
      document.getElementById("theme").href = "style.css";
    }
}

//Image gallery popup

var modalEle = document.querySelector(".modal");
var modalCaption = document.querySelector(".caption");
var modalImage = document.querySelector(".modalImage");
var galleryImages = document.querySelectorAll(".ImgThumbnail");


Array.from(document.querySelectorAll(".ImgThumbnail")).forEach(item => {
   item.addEventListener("click", event => {
      modalEle.style.display = "block";
      modalImage.src = event.target.src;
      console.log(event.target.slideIndex);
      modalCaption.innerHTML = event.target.alt;
   });

});

document.querySelector(".closeModal").addEventListener("click", () => {
  modalEle.style.display = "none";
});

