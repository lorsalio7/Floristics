"use strict";

var elem = document.querySelector('.catalog__list');

if (elem) {
  var msnry = new Masonry(elem, {
    // options
    itemSelector: '.catalog__item',
    columnWidth: 350,
    gutter: 40,
    horizontalOrder: true,
    fitWidth: true
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
}