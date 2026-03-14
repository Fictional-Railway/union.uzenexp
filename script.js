// ページが読み込まれた後に実行
document.addEventListener('DOMContentLoaded', function() {
  
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