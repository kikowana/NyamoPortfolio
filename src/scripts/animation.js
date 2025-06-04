// ページ読み込み時のアニメーション処理
document.addEventListener('DOMContentLoaded', () => {
  // アニメーション終了時にスクロールを有効に戻す
  setTimeout(() => {
    document.body.style.overflow = 'auto';
    
    // ページ内リンクのスムーズスクロールを復元
    const links = document.querySelectorAll('.nav-button');
    links.forEach(link => {
      link.style.pointerEvents = 'auto';
    });
      // ギャラリー画像の処理
    // 画像サイズはCSSで固定されているため、動的な調整は必要ありません
  }, 700); // アニメーション時間に合わせる
});

// ギャラリー項目のサイズを固定に保つ関数
function adjustGalleryItemSize(img) {
  // 動的なサイズ調整をせず、CSSのスタイル設定に任せる
  // 何もしない - サイズは完全にCSSで制御
}
