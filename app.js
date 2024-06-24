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

var gallery = document.getElementById("project-gallery")
var modal = document.querySelector(".modal");
var closeBtn = document.querySelector(".closeBtn");
// var exLink = document.querySelector(".exLink");

gallery.addEventListener('click', function (event) {
  var image = event.target.querySelector('img')
  // var imgSrc = event.target.getAttribute('data-modal-src');
  console.log(image.getAttribute('src'));
  // console.log(imgSrc);

  modal.setAttribute('style', 'display: block;')
  modal.querySelector('.modal-content').setAttribute('src', image.getAttribute('src'))
  //set alt text to caption
  var alt = image.getAttribute('alt');
  // console.log(alt);
  document.querySelector('.caption').innerHTML = alt;
  // document.querySelector('.ex-link').href = dataSrc;
})

closeBtn.addEventListener('click', function (event) {
  modal.removeAttribute('style', 'display: block;')
})


