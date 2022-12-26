//Makes sure that sidebar style is set onload, prevents first click failing
function load() {
  var media = window.matchMedia("(max-width: 768px)");
  var media_large = window.matchMedia("(min-width: 769px)");
  if (media.matches) {
    closeNavbar("45px", "45px");
  }
  if (media_large.matches) {
    openNavbar("175px", "175px");
  }
  personal_projects();
}

function proj_data(element, number) {
  var holder = document.getElementById("inner");
  var proj_item = document.createElement("div");
  proj_item.className = "carousel-item";
  if (number == 0) proj_item.classList.add("active");

  var proj_slide = document.createElement("div");
  proj_slide.className = "proj-slide full default-grid";

  var proj_name = document.createElement("h2");
  proj_name.className = "head center flex-center default-padding";
  proj_name.innerText = element.name;

  var proj_link = document.createElement("div");
  proj_link.className = "link center flex-center";

  var proj_url = document.createElement("a");
  proj_url.href = element.html_url;

  var proj_icon = document.createElement("i");
  proj_icon.className = "fa-brands fa-github center awesome";
  proj_icon.innerText = " Github";

  var proj_desc = document.createElement("div");
  proj_desc.className = "desc center flex-center";

  var proj_para = document.createElement("p");
  proj_para.innerText = element.description;

  proj_desc.appendChild(proj_para);

  proj_url.appendChild(proj_icon);
  proj_link.appendChild(proj_url);

  proj_slide.appendChild(proj_name);
  proj_slide.appendChild(proj_link);
  proj_slide.appendChild(proj_desc);

  proj_item.appendChild(proj_slide);
  holder.appendChild(proj_item);
}

function personal_projects() {
  $.ajax({
    url: "https://api.github.com/users/oxeus/repos",
    type: "GET",
    dataType: 'json',
    success: function (data) {
      var proj = document.getElementById("proj-head");
      proj.innerText = "Projects (" + data.length + ")";

      for (let i = 0; i < data.length; ++i) {
        proj_data(data[i], i);
      }
    }
  });
}

//https://stackoverflow.com/questions/39903036/open-close-sidenav-bar-same-button
//Only active on mobile
function toggleNavbar() {
  let size = document.getElementById("sidebar").style.width;
  var media = window.matchMedia("(max-width: 768px)");
  if (media.matches) {
    if (size == "45px") {
      openNavbar("100%", "45px");
    } else {
      closeNavbar("45px", "45px");
    }
  }
}

//https://www.w3schools.com/howto/howto_js_collapse_sidebar.asp
function openNavbar(width, margin_open) {
  document.getElementById("sidebar").style.setProperty("width", width);
  document.getElementById("content").style.setProperty("margin-left", margin_open);
  document.getElementById("sidebar-content").style.setProperty("display", "block");
}

//https://www.w3schools.com/howto/howto_js_collapse_sidebar.asp
function closeNavbar(width, margin_close) {
  document.getElementById("sidebar").style.setProperty("width", width);
  document.getElementById("content").style.setProperty("margin-left", margin_close);
  document.getElementById("sidebar-content").style.setProperty("display", "none");
}

//https://www.w3schools.com/howto/howto_js_media_queries.asp
function mobileNavbar(media) {
  if (media.matches) {
    closeNavbar("45px", "45px");
  }
}

function desktopNavbar(media_large) {
  if (media_large.matches) {
    openNavbar("175px", "175px");
  }
}

function resize() {
  //https://www.w3schools.com/howto/howto_js_media_queries.asp
  var media = window.matchMedia("(max-width: 768px)");
  media.addEventListener("change", mobileNavbar);

  var media_large = window.matchMedia("(min-width: 769px)");
  media_large.addEventListener("change", desktopNavbar);
}

function accord() {
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
}

function navButtons() {
  var navbtns = document.getElementsByClassName("navbtn");
  for (let i = 0; i < navbtns.length; ++i) {
    navbtns[i].addEventListener("click", toggleNavbar);
  }
}

function change() {
  resize();
  accord();
  navButtons();
}

function send_contact() {

}

change();