let item = document.querySelectorAll(".images-slideshow .imageSlides");
let next = document.querySelector(".next");
let previous = document.querySelector(".previous");

let array = [];
for (let i = 0; i < item.length; i++) {
  array.push(i);
}

let active = Math.floor(array.length / 2);
function loadShow() {
  let stt = 0;
  item[array[active]].style.transform = `none`;
  item[array[active]].style.zIndex = 1;
  item[array[active]].style.filter = "none";
  item[array[active]].style.opacity = 1;
  item[array[active]].style.transition = "all 0.3s 0.2s ease-out";
  console.log(item[array[active - 1]]);
  for (let i = active + 1; i < item.length; i++) {
    stt++;
    item[array[i]].style.transform = `translateX(${200 * stt}px) scale(${
      0.8 - 0.2 * stt
    }) perspective(16px) rotateY(-1deg)`;
    item[array[i]].style.zIndex = -stt;
    item[array[i]].style.filter = "blur(5px)";
    item[array[i]].style.opacity = stt > 2 ? 0.2 : 0.6;
    item[array[i]].style.transition = "all 0.4s 0.1s ease-out";
  }
  stt = 0;
  for (let i = active - 1; i >= 0; i--) {
    stt++;
    item[array[i]].style.transform = `translateX(${-200 * stt}px) scale(${
      0.8 - 0.2 * stt
    }) perspective(16px) rotateY(1deg)`;
    item[array[i]].style.zIndex = -stt;
    item[array[i]].style.filter = "blur(5px)";
    item[array[i]].style.opacity = stt > 2 ? 0.2 : 0.6;
    item[array[i]].style.transition = "all 0.4s 0.1s  ease-out";
  }
}

loadShow();

next.onclick = function setSlides() {
  let lastImg = array.pop();
  array.unshift(lastImg);
  loadShow();
};
previous.onclick = function setSlides() {
  let lastImg = array.shift();
  array.push(lastImg);
  loadShow();
};
