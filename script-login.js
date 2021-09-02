let findName = document.getElementById('findName');
let findPassword = document.getElementById('findPassword');

function Save() {
  if (!window.sessionStorage) {
    alert('세션 스토리지를 지원하지 않습니다.');
    return;
  }
  let check1 = sessionStorage.getItem(findName.value, findPassword.value);

  if (check1 == null) alert('잘못된 정보입니다.');
  else alert('로그인 되었습니다.');
  window.location.href = 'fromis_9_main.html';
}
