window.addEventListener("scroll", function () {

    const nav = document.querySelector("nav");

    if (window.scrollY > 50) {
        nav.style.background = "#020617";
        nav.style.boxShadow = "0 10px 25px rgba(0,0,0,.4)";
    } else {
        nav.style.background = "rgba(15,23,42,.9)";
        nav.style.boxShadow = "none";
    }

});