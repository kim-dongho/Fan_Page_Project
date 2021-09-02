let index = 0;

window.onload = function () {
  slideShow();
};

function slideShow() {
  let i;
  let x = document.getElementsByTagName('p');

  for (i = 0; i < x.length; i++) {
    x[i].style.display = 'none';
  }
  index++;
  if (index > x.length) {
    index = 1;
  }

  x[index - 1].style.display = 'block';
  setTimeout(slideShow, 1000);
}
