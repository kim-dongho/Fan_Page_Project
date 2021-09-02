var vid1 = document.getElementById('video1');
var vid2 = document.getElementById('video2');
var vid3 = document.getElementById('video3');
var vid4 = document.getElementById('video4');
var cover1 = document.getElementById('cover1');
var cover2 = document.getElementById('cover2');
var cover3 = document.getElementById('cover3');
var cover4 = document.getElementById('cover4');
var btn1 = document.getElementById('button1');
var btn2 = document.getElementById('button2');
var btn3 = document.getElementById('button3');
var btn4 = document.getElementById('button4');

function play1() {
  if (vid1.paused) {
    vid1.play();
    cover1.style.visibility = 'hidden';
    vid2.pause();
    vid2.currentTime = 0;
    cover2.style.visibility = 'visible';
    vid3.pause();
    vid3.currentTime = 0;
    cover3.style.visibility = 'visible';
    vid4.pause();
    vid4.currentTime = 0;
    cover4.style.visibility = 'visible';
  } else {
    vid1.pause();
  }
}
function play2() {
  if (vid2.paused) {
    vid2.play();
    cover2.style.visibility = 'hidden';
    vid1.pause();
    vid1.currentTime = 0;
    cover1.style.visibility = 'visible';
    vid3.pause();
    vid3.currentTime = 0;
    cover3.style.visibility = 'visible';
    vid4.pause();
    vid4.currentTime = 0;
    cover4.style.visibility = 'visible';
  } else {
    vid2.pause();
  }
}
function play3() {
  if (vid3.paused) {
    vid3.play();
    cover3.style.visibility = 'hidden';
    vid1.pause();
    vid1.currentTime = 0;
    cover1.style.visibility = 'visible';
    vid2.pause();
    vid2.currentTime = 0;
    cover2.style.visibility = 'visible';
    vid4.pause();
    vid4.currentTime = 0;
    cover4.style.visibility = 'visible';
  } else {
    vid3.pause();
  }
}
function play4() {
  if (vid4.paused) {
    vid4.play();
    cover4.style.visibility = 'hidden';
    vid1.pause();
    vid1.currentTime = 0;
    cover1.style.visibility = 'visible';
    vid2.pause();
    vid2.currentTime = 0;
    cover2.style.visibility = 'visible';
    vid3.pause();
    vid3.currentTime = 0;
    cover3.style.visibility = 'visible';
  } else {
    vid4.pause();
  }
}
