//https://stackoverflow.com/questions/39903036/open-close-sidenav-bar-same-button
function toggleNavbar() {
  let size = document.getElementById("sidebar").style.width;
  if (size == "175px") {
    closeNavbar();
  } else {
    openNavbar();
  }
}

//https://www.w3schools.com/howto/howto_js_collapse_sidebar.asp
function openNavbar() {
  document.getElementById("sidebar").style.setProperty("width", "175px");
  document.getElementById("content").style.setProperty("margin-left", "175px");
}

//https://www.w3schools.com/howto/howto_js_collapse_sidebar.asp
function closeNavbar() {
  document.getElementById("sidebar").style.setProperty("width", "45px");
  document.getElementById("content").style.setProperty("margin-left", "45px");
}

//https://www.w3schools.com/howto/howto_js_media_queries.asp
function mobileNavbar(media) {
  if (media.matches) {
    document.getElementById("sidebar").style.setProperty("width", "45px");
    document.getElementById("content").style.setProperty("margin-left", "45px");
  }
}

function desktopNavbar(media_large) {
  if (media_large.matches) {
    document.getElementById("sidebar").style.setProperty("width", "175px");
    document.getElementById("content").style.setProperty("margin-left", "175px");
  }
}

function change() {
  //https://www.w3schools.com/howto/howto_js_media_queries.asp
  var media = window.matchMedia("(max-width: 768px)");
  media.addEventListener("change", mobileNavbar);

  var media_large = window.matchMedia("(min-width: 769px)");
  media_large.addEventListener("change", desktopNavbar);
}

function load() {
  var media = window.matchMedia("(max-width: 768px)");
  var media_large = window.matchMedia("(min-width: 769px)");
  if (media.matches) {
    document.getElementById("sidebar").style.setProperty("width", "45px");
    document.getElementById("content").style.setProperty("margin-left", "45px");
  }
  if(media_large.matches){
    document.getElementById("sidebar").style.setProperty("width", "175px");
    document.getElementById("content").style.setProperty("margin-left", "175px");
  }
}

change();
