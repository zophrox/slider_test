let item = document.querySelectorAll(".images-slideshow .imageSlides");
let next = document.querySelector(".next");
let previous = document.querySelector(".previous");

let indexItem = [];
for (let i = 0; i < item.length; i++) {
  indexItem.push(i);
}

let active = Math.floor(indexItem.length / 2);
function loadShow() {
  let stt = 0;
  item[indexItem[active]].style.transform = `none`;
  item[indexItem[active]].style.zIndex = 1;
  item[indexItem[active]].style.filter = "none";
  item[indexItem[active]].style.opacity = 1;
  item[indexItem[active]].style.transition = "all 0.9s 0.1s ease-out";

  for (let i = active + 1; i < item.length; i++) {
    stt++;
    item[indexItem[i]].style.transform = `translateX(${200 * stt}px) scale(${
      0.8 - 0.2 * stt
    }) perspective(16px) rotateY(-1deg)`;
    item[indexItem[i]].style.zIndex = -stt;
    item[indexItem[i]].style.filter = "blur(5px)";
    item[indexItem[i]].style.opacity = stt > 2 ? 0.03 : 0.6;
    item[indexItem[i]].style.transition = "all 0.9s 0.1s ease-out";
  }
  stt = 0;
  for (let i = active - 1; i >= 0; i--) {
    stt++;
    item[indexItem[i]].style.transform = `translateX(${-200 * stt}px) scale(${
      0.8 - 0.2 * stt
    }) perspective(16px) rotateY(1deg)`;
    item[indexItem[i]].style.zIndex = -stt;
    item[indexItem[i]].style.filter = "blur(5px)";
    item[indexItem[i]].style.opacity = stt > 2 ? 0.03 : 0.6;
    item[indexItem[i]].style.transition = "all 0.9s 0.1s  ease-out";
  }
}

loadShow();
setInterval(() => {
  let lastImg = indexItem.pop();
  indexItem.unshift(lastImg);
  loadShow();
}, 7000);
next.onclick = () => {
  let lastImg = indexItem.pop();
  indexItem.unshift(lastImg);
  loadShow();
  console.log(indexItem);
};
previous.onclick = () => {
  let lastImg = indexItem.shift();
  indexItem.push(lastImg);
  loadShow();
};
