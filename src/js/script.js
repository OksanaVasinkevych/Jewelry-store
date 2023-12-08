//scroll btn
window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    if (
        document.body.scrollTop > 70 ||
        document.documentElement.scrollTop > 70
    ) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}
function topFunction() {
    document.documentElement.scrollTop = 0;
}
//slider
$("#slider").slick({
    arrows: true,
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: "linear",
    appendArrows: ".mybuttons",
    prevArrow: "<span class='mybuttons__item mybuttons__item_prev'></span>",
    nextArrow: "<span class='mybuttons__item mybuttons__item_next'></span>",
    appendDots: ".mydotts",
    dotsClass: "dots-box",
});

//menu
const menuButton = $(".menu-button");
const darkOverlay = $(".dark-overlay");
const mobileMenu = $(".mobile-menu");

$(document).on("click", ".menu-button", handleMenu);
$(document).on("click", ".is-submenu", handleToggleMenu);

function handleMenu(e) {
    e.preventDefault();
    darkOverlay.toggleClass("visible");
    mobileMenu.toggleClass("visible");
}

function handleToggleMenu(e) {
    e.preventDefault();
    const $this = $(this);
    $this.parent(".has-submenu").toggleClass("opened");
    $this.next("ul").slideToggle(500, function () {
        console.log(this);
        $(this)
            .find(".has-submenu")
            .removeClass("opened")
            .children("ul")
            .hide();
    });

    $this
        .parent(".has-submenu")
        .toggleClass("opened")
        .siblings("li")
        .removeClass("opened")
        .find("ul")
        .slideUp();
}

function resetMobileMemu() {
    darkOverlay.removeClass("visible");
    mobileMenu.removeClass("visible");
    $(".mobile-navigation  .has-submenu")
        .removeClass("opener")
        .find("ul")
        .hide();
}
//slider_category
$("#slider_2").slick({
    arrows: true,
    infinite: true,
    speed: 500,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    cssEase: "linear",
    appendArrows: ".mybuttons_2",
    prevArrow: "<span class='mybuttons__item mybuttons__item_prev'></span>",
    nextArrow: "<span class='mybuttons__item mybuttons__item_next'></span>",
});
/* ==================== */
/*
function initMobile() {
    console.log("is-mobile");
}

function initDesktop() {
    console.log("is-desktop");
}

ssm.addState({
    id: "tablet",
    query: "(max-width: 768px)",
    onEnter: function () {
        initMobile();
    },
});

ssm.addState({
    id: "desktop",
    query: "(min-width: 768px)",
    onEnter: function () {
        initDesktop();
    },
});
function onEntry(entry) {
    entry.forEach((change) => {
        if (change.isIntersecting) {
            change.target.classList.add("element-show");
        }
    });
}
let options = {
    threshold: [0.5],
};
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll(".element-animation");

for (let elm of elements) {
    observer.observe(elm);
}
*/
