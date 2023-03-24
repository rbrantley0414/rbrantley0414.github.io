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

//Image gallery popup

var gallery = document.querySelector(".project-gallery")
var modal = document.querySelector(".modal");
var closeBtn = document.querySelector(".closeBtn");
var exLink = document.querySelector(".exLink");

gallery.addEventListener('click', function (event) {
  // the event.target could be the `li` or the `img`, but we only want the `img`
  var image = event.target.closest('li').querySelector('img')
  var dataSrc = event.target.getAttribute('data-modal-src');
    // console.log(image);
    // console.log(dataSrc);

  modal.setAttribute('style', 'display: block;')
  modal.querySelector('.modal-content').setAttribute('src', image.getAttribute('src'))
  //set alt text to caption
  var alt = image.getAttribute('alt');
    // console.log(alt);
  document.querySelector('.caption').innerHTML = alt;
  document.querySelector('.ex-link').href = dataSrc;
})

closeBtn.addEventListener('click', function (event) {
  modal.removeAttribute('style')
})