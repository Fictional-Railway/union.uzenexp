document.addEventListener('DOMContentLoaded', function() {
  
  var AUTH_KEY = 'uzen_union_logged_in';
  var DEMO_PASSWORD = 'uzen1991';

  function isLoggedIn() {
    return sessionStorage.getItem(AUTH_KEY) === '1';
  }

  function requireAuth() {
    if (document.body && document.body.dataset.requiresAuth === 'true' && !isLoggedIn()) {
      alert('このページは組合員ログインが必要です。ログインページへ移動します。');
      window.location.href = 'login.html';
    }
  }

  // ログインフォームの処理
  var loginForm = document.getElementById('login-form');
  if (loginForm && isLoggedIn()) {
    window.location.href = 'members.html';
  }
  if (loginForm) {
    loginForm.addEventListener('submit', function(event) {
      event.preventDefault();

      var passwordInput = document.getElementById('login-password');
      var loginError = document.getElementById('login-error');
      var password = passwordInput ? passwordInput.value.trim() : '';

      if (password === DEMO_PASSWORD) {
        sessionStorage.setItem(AUTH_KEY, '1');
        window.location.href = 'members.html';
      } else if (loginError) {
        loginError.textContent = 'パスワードが正しくありません。機関誌記載の情報をご確認ください。';
      }
    });
  }

  // ログアウト処理
  var logoutBtn = document.getElementById('logout-btn');
  if (logoutBtn) {
    logoutBtn.addEventListener('click', function() {
      sessionStorage.removeItem(AUTH_KEY);
      window.location.href = 'login.html';
    });
  }

  // お問い合わせフォームの取得
  var contactForm = document.getElementById('contact-form');
  

  // 送信ボタンが押された時の処理
  if (contactForm) {
    contactForm.addEventListener('submit', function(event) {
      // 実際のページ遷移（送信）を防ぐ
      event.preventDefault();
      

      // 確認のアラートを表示
      alert('ご意見を受け付けました。\n（※架空のサイトのため、実際にはデータは送信されません）');
      

      // フォームの内容をリセットする
      contactForm.reset();
    });
  }
  
});

  requireAuth();