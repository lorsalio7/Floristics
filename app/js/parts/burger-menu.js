let mobileWidth = window.matchMedia("(max-width: 450px)");

let siteHeader = document.querySelector(".header");

window.addEventListener("scroll", () => {
  let offsetTop = window.pageYOffset;

  if(offsetTop > 0) {
    siteHeader.classList.add("header--active");
  } else {
    siteHeader.classList.remove("header--active");
  }
});


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
