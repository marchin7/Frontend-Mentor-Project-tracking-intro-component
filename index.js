const nav = document.getElementById("nav");
const menuBtns = document.getElementById("menu-btns");
const hamburger = document.getElementById("hamburger");
const closeBtn = document.getElementById("close-menu-btn");

menuBtns.addEventListener("click", () => {
    nav.classList.toggle("active");

    if (nav.classList.contains("active")) {
        hamburger.classList.add("active");
        closeBtn.classList.add("active");
    } else {
        hamburger.classList.remove("active");
        closeBtn.classList.remove("active");
    }
});
