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

// List of sentences
var _CONTENT = [
    " Web Designer",
    " Front-End Developer",
    "n Aerialist",
    "n Avid Traveler",
    "n Anime Enthusiast"
];

// Current sentence being processed
var _PART = 0;

// Character number of the current sentence being processed 
var _PART_INDEX = 0;

// Holds the handle returned from setInterval
var _INTERVAL_VAL;

// Element that holds the text
var _ELEMENT = document.querySelector("#text");

// Cursor element 
var _CURSOR = document.querySelector("#cursor");

// Implements typing effect
function Type() {
    // Get substring with 1 characater added
    var text = _CONTENT[_PART].substring(0, _PART_INDEX + 1);
    _ELEMENT.innerHTML = text;
    _PART_INDEX++;

    // If full sentence has been displayed then start to delete the sentence after some time
    if (text === _CONTENT[_PART]) {
        // Hide the cursor
        _CURSOR.style.display = 'none';

        clearInterval(_INTERVAL_VAL);
        setTimeout(function () {
            _INTERVAL_VAL = setInterval(Delete, 50);
        }, 1000);
    }
}

// Implements deleting effect
function Delete() {
    // Get substring with 1 characater deleted
    var text = _CONTENT[_PART].substring(0, _PART_INDEX - 1);
    _ELEMENT.innerHTML = text;
    _PART_INDEX--;

    // If sentence has been deleted then start to display the next sentence
    if (text === '') {
        clearInterval(_INTERVAL_VAL);

        // If current sentence was last then display the first one, else move to the next
        if (_PART == (_CONTENT.length - 1))
            _PART = 0;
        else
            _PART++;

        _PART_INDEX = 0;

        // Start to display the next sentence after some time
        setTimeout(function () {
            _CURSOR.style.display = 'inline-block';
            _INTERVAL_VAL = setInterval(Type, 100);
        }, 200);
    }
}

// Start the typing effect on load
_INTERVAL_VAL = setInterval(Type, 100);

// Toggle dark mode on and off
function toggleDarkMode(){
    const darkModeSwitch = document.getElementById("dark-mode");
    if (darkModeSwitch.checked == true){
        document.getElementById("theme").href = "style-dark.css";
        localStorage.setItem('isDarkMode', true);
      }else{
        document.getElementById("theme").href = "style.css";
        localStorage.setItem('isDarkMode', false);
      }
  }

// Check dark mode setting from last session
function checkPreferences(){
      if (localStorage.getItem('isDarkMode') === 'true') {
        document.getElementById("theme").href = "style-dark.css";
        document.getElementById("dark-mode").checked = true;
        }else{
            document.getElementById("theme").href = "style.css";
          }
}

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

  
