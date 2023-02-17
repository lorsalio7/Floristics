var elem = document.querySelector('.catalog__list');
let mobileWidth = window.matchMedia("(max-width: 450px)");

if(elem) {

  let masonryOptions = {
    itemSelector: '.catalog__item',
    columnWidth: 350,
    gutter: 40,
    horizontalOrder: true,
    fitWidth: true
  }

  let msnry = new Masonry( elem, masonryOptions);

  function activeMasonry(isMobile) {
    if(isMobile) {
      msnry.destroy();
    } else {
      msnry = new Masonry( elem, masonryOptions);
    }
  }

  activeMasonry(mobileWidth.matches);

  mobileWidth.addEventListener("change", (e) => {
    activeMasonry(e.matches);
  })
}

// -----------------------------------------------------------

const compositionThumbs = document.querySelectorAll(".compositions__thumb");
const compositionBigImageWebp = document.querySelector(".compositions__picture source");
const compositionBigImageJpg = document.querySelector(".compositions__picture img");


compositionThumbs.forEach(item => {
  item.addEventListener("click", (e) => {
    let target = e.target;
    removeActiveClass(compositionThumbs, "compositions__thumb--active");
    target.classList.add("compositions__thumb--active");
    let imageSource = target.dataset.fullImage;

    compositionBigImageWebp.srcset = imageSource + ".webp";
    compositionBigImageJpg.src = imageSource + ".jpg";
  })
})

function removeActiveClass(items, activeClass) {
  for(let i = 0; i < items.length; i++) {
    items[i].classList.remove(activeClass);
  }
}

// -----------------------------------------------------------

const burgerButton = document.querySelector(".burger-button");

burgerButton.addEventListener("click", () => {
  burgerButton.classList.toggle("burger-button--active");

  if(burgerButton.classList.contains("burger-button--active")) {
    openSiteMenu();
  } else {
    closeSiteMenu();
  }
});

function openSiteMenu() {
  let siteMenu = document.querySelector(".mobile-menu");
  let overlay = document.querySelector(".header__overlay");
  let pageHtml = document.querySelector("html");

  pageHtml.classList.add("no-scroll");
  siteMenu.classList.add("mobile-menu--active");
  overlay.classList.add("header__overlay--active");
}

function closeSiteMenu() {
  let siteMenu = document.querySelector(".mobile-menu");
  let overlay = document.querySelector(".header__overlay");
  let pageHtml = document.querySelector("html");

  pageHtml.classList.remove("no-scroll");
  siteMenu.classList.remove("mobile-menu--active");
  overlay.classList.remove("header__overlay--active");
}
