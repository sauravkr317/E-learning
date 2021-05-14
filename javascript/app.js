console.log("hello");

window.addEventListener("scroll", function(){
    let nav_div = document.querySelector(".nav-div");
    nav_div.classList.toggle("sticky", window.scrollY > 0);
})

let hamburger_icon = document.querySelector(".hamburger-icon");
let nav_list = document.querySelector(".nav-list");
hamburger_icon.addEventListener("click", function(){
    nav_list.classList.toggle("show");
})