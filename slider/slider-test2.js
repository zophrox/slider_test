let item = document.querySelectorAll(".images-slideshow .imageSlides");
let next = document.querySelector(".next");
let previous = document.querySelector(".previous");

let active = 3;
function loadShow() {
  let stt = 0;
  item[active].style.transform = `none`;
  item[active].style.zIndex = 1;
  item[active].style.filter = "none";
  item[active].style.opacity = 1;
  item[active].style.transition = "all 0.3s 0.2s ease-out";
  //   item[active].style.opacity = 1;
  //   item[active].style.opacity = 1;
  for (let i = active + 1; i < item.length; i++) {
    stt++;
    item[i].style.transform = `translateX(${200 * stt}px) scale(${
      0.8 - 0.2 * stt
    }) perspective(16px) rotateY(-1deg)`;
    item[i].style.zIndex = -stt;
    item[i].style.filter = "blur(5px)";
    item[i].style.opacity = stt > 2 ? 0.2 : 0.6;
    item[i].style.transition = "all 0.4s 0.1s ease-out";
  }
  stt = 0;
  for (let i = active - 1; i >= 0; i--) {
    stt++;
    item[i].style.transform = `translateX(${-200 * stt}px) scale(${
      0.8 - 0.2 * stt
    }) perspective(16px) rotateY(1deg)`;
    item[i].style.zIndex = -stt;
    item[i].style.filter = "blur(5px)";
    item[i].style.opacity = stt > 2 ? 0.2 : 0.6;
    item[i].style.transition = "all 0.4s 0.1s  ease-out";
  }
}
loadShow();

function setSlides(num) {
  active =
    active + num < item.length || active + num == -1 ? active + num : active;
  loadShow();
  console.log(active);
}
// next.onclick = function setSlides() {
//   active = active + 1 < item.length ? active + 1 : active;
//   loadShow();
//   console.log("I am button");
// };
