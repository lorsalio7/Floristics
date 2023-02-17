"use strict";

var elem = document.querySelector('.catalog__list');
var mobileWidth = window.matchMedia("(max-width: 450px)");

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
  mobileWidth.addEventListener("change", function (e) {
    activeMasonry(e.matches);
  });
} // -----------------------------------------------------------


var compositionThumbs = document.querySelectorAll(".compositions__thumb");
var compositionBigImageWebp = document.querySelector(".compositions__picture source");
var compositionBigImageJpg = document.querySelector(".compositions__picture img");
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

function removeActiveClass(items, activeClass) {
  for (var i = 0; i < items.length; i++) {
    items[i].classList.remove(activeClass);
  }
} // -----------------------------------------------------------


var burgerButton = document.querySelector(".burger-button");
burgerButton.addEventListener("click", function () {
  burgerButton.classList.toggle("burger-button--active");

  if (burgerButton.classList.contains("burger-button--active")) {
    openSiteMenu();
  } else {
    closeSiteMenu();
  }
});

function openSiteMenu() {
  var siteMenu = document.querySelector(".mobile-menu");
  var overlay = document.querySelector(".header__overlay");
  var pageHtml = document.querySelector("html");
  pageHtml.classList.add("no-scroll");
  siteMenu.classList.add("mobile-menu--active");
  overlay.classList.add("header__overlay--active");
}

function closeSiteMenu() {
  var siteMenu = document.querySelector(".mobile-menu");
  var overlay = document.querySelector(".header__overlay");
  var pageHtml = document.querySelector("html");
  pageHtml.classList.remove("no-scroll");
  siteMenu.classList.remove("mobile-menu--active");
  overlay.classList.remove("header__overlay--active");
}