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
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    } else {
      console.error(`Element with id ${props.targetId} not found`)
    }
  }, 50)
}
</script>

<style>
/* 削除: .nav-button のローカルスタイル（グローバルCSSで統一管理） */
</style>