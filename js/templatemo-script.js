jQuery(document).ready(function(){"use strict";function o(){$(".header").removeClass("open"),$(".navbar-button").addClass("collapsed")}$(".gallery-slider").slick({slidesToShow:5,slidesToScroll:3,autoplay:!1,dots:!0,autoplaySpeed:2e3,arrows:!1,responsive:[{breakpoint:1024,settings:{slidesToShow:4,slidesToScroll:4,infinite:!0,dots:!0}},{breakpoint:767,settings:{slidesToShow:3,slidesToScroll:3}},{breakpoint:575,settings:{slidesToShow:2,slidesToScroll:2}}]}),$(".navbar-button").click(function(o){o.stopPropagation(),$(".header").toggleClass("open"),$(".navbar-button").toggleClass("collapsed")}),$(".navbar .navbar-nav > .nav-item > a.nav-link").click(function(s){s.stopPropagation(),o()}),$("html").click(function(s){o()}),$(".single-page-nav").singlePageNav({filter:":not(.external)",updateHash:!0})});
