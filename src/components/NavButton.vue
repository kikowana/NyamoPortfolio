<template>
  <button class="nav-button" @click="scrollToTarget">
    <span><slot /></span>
    <div class="hover-heart">♡</div>
  </button>
</template>

<script setup>
const props = defineProps({
  targetId: String
})

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