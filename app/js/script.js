var scroll = new SmoothScroll(".site-navigation__link",  {
  header: ".header"
});

var elem = document.querySelector('.catalog__list');
let mobileWidth = window.matchMedia("(max-width: 450px)");

let siteHeader = document.querySelector(".header");

window.addEventListener("scroll", () => {
  let offsetTop = window.pageYOffset;

  if(offsetTop > 0) {
    siteHeader.classList.add("header--active");
  } else {
    siteHeader.classList.remove("header--active");
  }
})

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

  mobileWidth.onchange = (e) => {
    activeMasonry(e.matches);
  }
}

// -----------------------------------------------------------

const compositionThumbs = document.querySelectorAll(".compositions__thumb");
const compositionBigImageWebp = document.querySelector(".compositions__picture source");
const compositionBigImageJpg = document.querySelector(".compositions__picture img");

if(compositionThumbs) {
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
}


// -----------------------------------------------------------

const burgerButton = document.querySelector(".burger-button");


if(burgerButton) {
  burgerButton.addEventListener("click", () => {
    burgerButton.classList.toggle("burger-button--active");

    if(burgerButton.classList.contains("burger-button--active")) {
      openSiteMenu();
    } else {
      closeSiteMenu();
    }
  });



  let siteMenu = document.querySelector(".mobile-menu");
  let overlay = document.querySelector(".header__overlay");
  let pageHtml = document.querySelector("html");
  let burgerMenuWidth = window.matchMedia("(max-width: 1124px)");
  let siteNavigationLinks = siteMenu.querySelectorAll(".site-navigation__link");



  function openSiteMenu() {
    let widthScroll = window.innerWidth - document.body.offsetWidth + "px";
    pageHtml.classList.add("no-scroll");
    burgerButton.style.marginRight = widthScroll;
    siteMenu.classList.add("mobile-menu--active");
    overlay.classList.add("header__overlay--active");
    document.body.style.paddingRight = widthScroll;

    if(overlay.classList.contains("header__overlay--active")) {
      overlay.addEventListener("click", closeSiteMenu);
    }

    if(siteMenu.classList.contains("mobile-menu--active")) {
      siteNavigationLinks.forEach(item => {
        item.addEventListener("click", closeSiteMenu);
      })
    }

  }

  function closeSiteMenu() {
    burgerButton.classList.remove("burger-button--active");
    pageHtml.classList.remove("no-scroll");
    siteMenu.classList.remove("mobile-menu--active");
    overlay.classList.remove("header__overlay--active");
    document.body.style.paddingRight = 0;
    burgerButton.style.marginRight = 0;
  }

  document.addEventListener("keydown", (e) => {
    if(siteMenu.classList.contains("mobile-menu--active") && e.keyCode === 27) {
      closeSiteMenu();
    }
  })

  function changeMenuView(width) {
    if(!width) {
      closeSiteMenu();
    }
  }

  burgerMenuWidth.onchange = (e) => {
    changeMenuView(e.matches);
  }


}

