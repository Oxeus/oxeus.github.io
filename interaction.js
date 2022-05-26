//https://stackoverflow.com/questions/39903036/open-close-sidenav-bar-same-button
function toggleNavbar() {
    let size = document.getElementById("sidebar").style.width;
    console.log(size);
    if(size == "175px"){
        closeNavbar();
    }
    else {
        openNavbar();
    }
}

//https://www.w3schools.com/howto/howto_js_collapse_sidebar.asp
function openNavbar() {
    document.getElementById("sidebar").style.setProperty("width", "175px");
    document.getElementById("content").style.setProperty("margin-left", "175px");
    console.log("opem");
}

//https://www.w3schools.com/howto/howto_js_collapse_sidebar.asp
function closeNavbar() {
    document.getElementById("sidebar").style.setProperty("width", "45px");
    document.getElementById("content").style.setProperty("margin-left", "45px");
}