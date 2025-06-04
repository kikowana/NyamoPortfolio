<template>
  <button class="nav-button" @click="handleClick">
    <span>
      <span v-if="leftIcon" class="material-icons-round icon">arrow_back_ios</span>
      <slot />
      <span v-if="rightIcon" class="material-icons-round icon">arrow_forward_ios</span>
    </span>
    <div class="hover-heart">♡</div>
  </button>
</template>

<script setup>
const props = defineProps({
  targetId: String,
  pageLink: String,
  rightIcon: Boolean,
  leftIcon: Boolean
})

function handleClick() {
  if (props.pageLink) {
    // ページ遷移の場合
    navigateToPage(props.pageLink);
  } else if (props.targetId) {
    // 同じページ内のスクロールの場合
    scrollToTarget();
  }
}

function navigateToPage(path) {
  // メインコンテンツ要素を取得
  const mainContent = document.querySelector('.page-content');
  if (!mainContent) return;
  // パスに基づいて適切なアニメーションクラスを適用
  if (path === 'gallery') {
    // ギャラリーへの遷移時は右へフェードアウト
    mainContent.classList.add('page-transition-to-gallery');
    // アニメーション中にスクロールを防止
    document.body.style.overflow = 'hidden';
    // アニメーションが終わってから遷移
    setTimeout(() => {
      window.location.href = path;
    }, 500);
  } else if (path === '/' || path === 'index.html') {
    // ホームへの遷移時は左へフェードアウト
    mainContent.classList.add('page-transition-to-home');
    // アニメーション中にスクロールを防止
    document.body.style.overflow = 'hidden';
    setTimeout(() => {
      window.location.href = path;
    }, 500);
  } else {
    // その他のページ遷移
    window.location.href = path;
  }
}

function scrollToTarget() {
  setTimeout(() => {
    const el = document.getElementById(props.targetId)
    if (el) {
      // モバイルデバイスかどうかを確認
      const isMobile = window.innerWidth <= 600
      // 特にAboutセクションの場合は追加のオフセットを適用
      let offset = -100
      if (isMobile) {
        offset = props.targetId === 'about' ? -300 : -250
      }
      // 現在のスクロール位置を考慮した絶対位置を計算
      const elementPosition = el.getBoundingClientRect().top + window.pageYOffset
      window.scrollTo({
        top: elementPosition + offset,
        behavior: 'smooth'
      })
    } else {
      console.error(`Element with id ${props.targetId} not found`)
    }
  }, 50)
}
</script>

<style>
/* 削除: .nav-button のローカルスタイル（グローバルCSSで統一管理） */
</style>