let text = [
  '<br>이름 : 이새롬<br><br>혈액형 : B형<br><br>생년월일 : 1997년 1월 7일<br><br>포지션 : 리더,서브보컬<br>',
  '<br>이름 : 송하영<br><br>혈액형 : A형<br><br>생년월일 : 1997년 9월 29일<br><br>포지션 : 리드보컬,메인댄서<br>',
  '<br>이름 : 장규리<br><br>혈액형 : B형<br><br>생년월일 : 1997년 12월 27일<br><br>포지션 : 리더,리드보컬<br>',
  '<br>이름 : 박지원<br><br>혈액형 : A형<br><br>생년월일 : 1998년 3월 20일<br><br>포지션 : 메인보컬<br>',
  '<br>이름 : 노지선<br><br>혈액형 : B형<br><br>생년월일 : 1998년 11월 23일<br><br>포지션 : 센터,서브보컬<br>',
  '<br>이름 : 이서연<br><br>혈액형 : A형<br><br>생년월일 : 2000년 1월 22일<br><br>포지션 : 메인래퍼,서브보컬<br>',
  '<br>이름 : 이채영<br><br>혈액형 : B형<br><br>생년월일 : 2000년 5월 14일<br><br>포지션 : 리드래퍼,메인댄서<br>',
  '<br>이름 : 이나경<br><br>혈액형 : A형<br><br>생년월일 : 2000년 6월 1일<br><br>포지션 : 리드댄서,서브보컬<br>',
  '<br>이름 : 백지헌<br><br>혈액형 : B형<br><br>생년월일 : 2003년 4월 17일<br><br>포지션 : 서브보컬<br>',
];
let commentDiv;

function init() {
  commentDiv = document.getElementById('commentDiv');

  let imgArray = document.getElementsByTagName('img');
  for (i = 0; i < imgArray.length; i++) {
    imgArray[i].addEventListener('mouseover', over, false);
    imgArray[i].addEventListener('mouseout', hideCommentDiv, false);
  }
}

function over(e) {
  let n = 0;
  switch (e.target.id) {
    case '0':
      n = 0;
      break;
    case '1':
      n = 1;
      break;
    case '2':
      n = 2;
      break;
    case '3':
      n = 3;
      break;
    case '4':
      n = 4;
      break;
    case '5':
      n = 5;
      break;
    case '6':
      n = 6;
      break;
    case '7':
      n = 7;
      break;
    case '8':
      n = 8;
      break;
  }
  setCommentDiv(text[n], e);
}

function setCommentDiv(comment, e) {
  commentDiv.innerHTML = comment;
  commentDiv.style.left = e.clientX + 'px';
  commentDiv.style.top = e.clientY + 'px';
  commentDiv.style.position = 'fixed';
  commentDiv.style.background = 'white';
  commentDiv.style.visibility = 'visible';
  commentDiv.style.border = '2px solid pink';
  commentDiv.style.width = '220px';
  commentDiv.style.height = '200px';
}

function hideCommentDiv() {
  commentDiv.style.visibility = 'hidden';
}

function audioPlayer() {
  let currentSong = 0;
  $('#audioPlayer')[0].src = $('#playlist li a')[0];
  $('#playlist li a').click(function (e) {
    e.preventDefault();
    $('#audioPlayer')[0].src = this;
    $('#audioPlayer')[0].play;
    $('#playlist li').removeClass('current-song');
    currentSong = $(this).parent().index();
    $(this).parent().addClass('current-song');
  });

  $('#audioPlayer')[0].addEventListener('ended', function () {
    currentSong++;
    if (currentSong == $('#playlist li a').length) currentSong = 0;
    $('#playlist li').removeClass('current-song');
    $('#playlist li:eq(' + currentSong + ')').addClass('current-song');
    $('#audioPlayer')[0].src = $('#playlist li a')[currentSong].href;
    $('#audioPlayer')[0].play();
  });
}

audioPlayer();
