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
