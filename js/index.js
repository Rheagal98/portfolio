const header = document.querySelector("#header");

// Sticky Navbar when scrolling
window.onscroll = function () {
    header.classList.toggle("sticky", window.scrollY > 0);
    nav_list.classList.remove("active");
    menu_bar.classList.remove('nav-active');
}

// Nav Bar Behavior
const menu_bar = document.querySelector("#header .menu-bar");
const nav_list = document.querySelector("#header .nav-list");
const nav_list_li = nav_list.querySelectorAll("a");

menu_bar.onclick = function () {
    nav_list.classList.toggle("active");
    this.classList.toggle('nav-active');
}

nav_list_li.forEach(function(link, index) {
    link.onclick = function() {
        nav_list.classList.remove("active");
    }
})

const sr = ScrollReveal ({
    distance: '45px',
    duration: 2700,
    reset: true
})

sr.reveal('.introduce', {delay: 350, origin:'left'});
sr.reveal('.my-img', {delay: 350, origin:'right'});

sr.reveal('#skills,#about .row, #work, #project', {delay: 200, origin:'bottom'});