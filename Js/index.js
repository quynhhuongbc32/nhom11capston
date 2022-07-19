function showMenu() {
    document.getElementsByClassName("box__overlay")[0].style.visibility  = "visible";
}  

function closeMenu() {
    document.getElementsByClassName("box__overlay")[0].style.visibility  = "hidden";
}   

var icon_sun = document.getElementById('icon_sun');
var icon_moon = document.getElementById('icon_moon');
var elm_body = document.getElementById('elm_body');

// var search_bar = document.getElementById('search-bar');
// var search_icon = document.getElementById('search_icon');

icon_moon.onclick = function(){
    icon_moon.classList.add("display-none");
    icon_sun.classList.remove('display-none');
    elm_body.classList.add('theme__dark');
        
};
icon_sun.onclick = function(){
    icon_sun.classList.add("display-none");
    icon_moon.classList.remove('display-none');
    elm_body.classList.remove("theme__dark");

    // search_bar.classList.remove("bg-color-black");
    
};