var elem = document.querySelector('.catalog__list');

if(elem) {
  var msnry = new Masonry( elem, {
    // options
    itemSelector: '.catalog__item',
    columnWidth: 350,
    gutter: 40,
    horizontalOrder: true,
    fitWidth: true
  });
}

