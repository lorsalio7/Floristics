"use strict";

AOS.init({
  once: true
});
;
var mobileWidth = window.matchMedia("(max-width: 450px)");
var siteHeader = document.querySelector(".header");
window.addEventListener("scroll", function () {
  var offsetTop = window.pageYOffset;

  if (offsetTop > 0) {
    siteHeader.classList.add("header--active");
  } else {
    siteHeader.classList.remove("header--active");
  }
});
var burgerButton = document.querySelector(".burger-button");

if (burgerButton) {
  var openSiteMenu = function openSiteMenu() {
    var widthScroll = window.innerWidth - document.body.offsetWidth + "px";
    pageHtml.classList.add("no-scroll");
    burgerButton.style.marginRight = widthScroll;
    siteMenu.classList.add("mobile-menu--active");
    overlay.classList.add("header__overlay--active");
    document.body.style.paddingRight = widthScroll;

    if (overlay.classList.contains("header__overlay--active")) {
      overlay.addEventListener("click", closeSiteMenu);
    }

    if (siteMenu.classList.contains("mobile-menu--active")) {
      siteNavigationLinks.forEach(function (item) {
        item.addEventListener("click", closeSiteMenu);
      });
    }
  };

  var closeSiteMenu = function closeSiteMenu() {
    burgerButton.classList.remove("burger-button--active");
    pageHtml.classList.remove("no-scroll");
    siteMenu.classList.remove("mobile-menu--active");
    overlay.classList.remove("header__overlay--active");
    document.body.style.paddingRight = 0;
    burgerButton.style.marginRight = 0;
  };

  var changeMenuView = function changeMenuView(width) {
    if (!width) {
      closeSiteMenu();
    }
  };

  burgerButton.addEventListener("click", function () {
    burgerButton.classList.toggle("burger-button--active");

    if (burgerButton.classList.contains("burger-button--active")) {
      openSiteMenu();
    } else {
      closeSiteMenu();
    }
  });
  var siteMenu = document.querySelector(".mobile-menu");
  var overlay = document.querySelector(".header__overlay");
  var pageHtml = document.querySelector("html");
  var burgerMenuWidth = window.matchMedia("(max-width: 1124px)");
  var siteNavigationLinks = siteMenu.querySelectorAll(".site-navigation__link");
  document.addEventListener("keydown", function (e) {
    if (siteMenu.classList.contains("mobile-menu--active") && e.keyCode === 27) {
      closeSiteMenu();
    }
  });

  burgerMenuWidth.onchange = function (e) {
    changeMenuView(e.matches);
  };
}

;
var scroll = new SmoothScroll(".site-navigation__link", {
  header: ".header"
});
;
var elem = document.querySelector('.catalog__list');

if (elem) {
  var activeMasonry = function activeMasonry(isMobile) {
    if (isMobile) {
      msnry.destroy();
    } else {
      msnry = new Masonry(elem, masonryOptions);
    }
  };

  var masonryOptions = {
    itemSelector: '.catalog__item',
    columnWidth: 350,
    gutter: 40,
    horizontalOrder: true,
    fitWidth: true
  };
  var msnry = new Masonry(elem, masonryOptions);
  activeMasonry(mobileWidth.matches);

  mobileWidth.onchange = function (e) {
    activeMasonry(e.matches);
  };
}

;
var compositionThumbs = document.querySelectorAll(".compositions__thumb");
var compositionBigImageWebp = document.querySelector(".compositions__picture source");
var compositionBigImageJpg = document.querySelector(".compositions__picture img");

if (compositionThumbs) {
  var removeActiveClass = function removeActiveClass(items, activeClass) {
    for (var i = 0; i < items.length; i++) {
      items[i].classList.remove(activeClass);
    }
  };

  compositionThumbs.forEach(function (item) {
    item.addEventListener("click", function (e) {
      var target = e.target;
      removeActiveClass(compositionThumbs, "compositions__thumb--active");
      target.classList.add("compositions__thumb--active");
      var imageSource = target.dataset.fullImage;
      compositionBigImageWebp.srcset = imageSource + ".webp";
      compositionBigImageJpg.src = imageSource + ".jpg";
    });
  });
}

;