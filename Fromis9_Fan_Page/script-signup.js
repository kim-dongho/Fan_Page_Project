function Save() {
  let password = document.getElementById('pw');
  let name = document.getElementById('name');

  if (!window.sessionStorage) {
    alert('세션 스토리지를 지원하지 않습니다.');
    return;
  }

  sessionStorage.setItem(name.value, password.value);

  alert('회원가입이 완료되었습니다.');
  window.location.href = 'fromis_9_main.html';
}
