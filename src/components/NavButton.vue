<template>
  <button :class="['nav-button', color]" @click="scrollToTarget">
    <slot />
  </button>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  targetId: String,
  color: String
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
.nav-button {
  padding: 10px 20px;
  font-size: 14px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background 0.3s ease;
}
</style>