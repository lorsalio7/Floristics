let elem = document.querySelector('.catalog__list');
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
