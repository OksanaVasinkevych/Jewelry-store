function scrollFunction(){document.body.scrollTop>70||document.documentElement.scrollTop>70?document.getElementById("myBtn").style.display="block":document.getElementById("myBtn").style.display="none"}function topFunction(){document.documentElement.scrollTop=0}window.onscroll=function(){scrollFunction()},$("#slider").slick({arrows:!0,dots:!0,infinite:!0,speed:500,fade:!0,cssEase:"linear",appendArrows:".mybuttons",prevArrow:"<span class='mybuttons__item mybuttons__item_prev'></span>",nextArrow:"<span class='mybuttons__item mybuttons__item_next'></span>",appendDots:".mydotts",dotsClass:"dots-box"});const menuButton=$(".menu-button"),darkOverlay=$(".dark-overlay"),mobileMenu=$(".mobile-menu");function handleMenu(e){e.preventDefault(),darkOverlay.toggleClass("visible"),mobileMenu.toggleClass("visible")}function handleToggleMenu(e){e.preventDefault();const n=$(this);n.parent(".has-submenu").toggleClass("opened"),n.next("ul").slideToggle(500,(function(){console.log(this),$(this).find(".has-submenu").removeClass("opened").children("ul").hide()})),n.parent(".has-submenu").toggleClass("opened").siblings("li").removeClass("opened").find("ul").slideUp()}function resetMobileMemu(){darkOverlay.removeClass("visible"),mobileMenu.removeClass("visible"),$(".mobile-navigation  .has-submenu").removeClass("opener").find("ul").hide()}$(document).on("click",".menu-button",handleMenu),$(document).on("click",".is-submenu",handleToggleMenu),$("#slider_2").slick({arrows:!0,infinite:!0,speed:500,fade:!0,slidesToShow:1,slidesToScroll:1,cssEase:"linear",appendArrows:".mybuttons_2",prevArrow:"<span class='mybuttons__item mybuttons__item_prev'></span>",nextArrow:"<span class='mybuttons__item mybuttons__item_next'></span>"});