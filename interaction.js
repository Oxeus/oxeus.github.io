//https://stackoverflow.com/questions/39903036/open-close-sidenav-bar-same-button
function toggleNavbar() {
  let size = document.getElementById("sidebar").style.width;
  var media = window.matchMedia("(max-width: 768px)");
  if(media.matches){
    if (size == "175px") {
        closeNavbar();
      } else {
        openNavbar();
      }
  }
}

//https://www.w3schools.com/howto/howto_js_collapse_sidebar.asp
function openNavbar() {
  document.getElementById("sidebar").style.setProperty("width", "175px");
  document.getElementById("content").style.setProperty("margin-left", "175px");
  document.getElementById("sidebar-content").style.setProperty("display", "block");
}

//https://www.w3schools.com/howto/howto_js_collapse_sidebar.asp
function closeNavbar() {
  document.getElementById("sidebar").style.setProperty("width", "45px");
  document.getElementById("content").style.setProperty("margin-left", "45px");
  document.getElementById("sidebar-content").style.setProperty("display", "none");
}

//https://www.w3schools.com/howto/howto_js_media_queries.asp
function mobileNavbar(media) {
  if (media.matches) {
    closeNavbar();
  }
}

function desktopNavbar(media_large) {
  if (media_large.matches) {
    openNavbar();
  }
}

function change() {
  //https://www.w3schools.com/howto/howto_js_media_queries.asp
  var media = window.matchMedia("(max-width: 768px)");
  media.addEventListener("change", mobileNavbar);

  var media_large = window.matchMedia("(min-width: 769px)");
  media_large.addEventListener("change", desktopNavbar);

  //https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_accordion
  var acc = document.getElementsByClassName("accord");
  for (let i = 0; i < acc.length; ++i) {
    acc[i].addEventListener("click", function () {
      this.classList.toggle("active");
      var block = this.nextElementSibling;
      if (block.style.display === "block") {
        block.style.display = "none";
      } else {
        block.style.display = "block";
      }
    });
  }
  var navbtns = document.getElementsByClassName("navbtn");
  for (let i = 0; i < navbtns.length; ++i) {
    navbtns[i].addEventListener("click", toggleNavbar);
  }
}

function load() {
  var media = window.matchMedia("(max-width: 768px)");
  var media_large = window.matchMedia("(min-width: 769px)");
  if (media.matches) {
    closeNavbar();
  }
  if (media_large.matches) {
    openNavbar();
  }
}

change();