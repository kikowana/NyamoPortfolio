<template>
  <header class="header">
    <nav class="nav">
      <NavButton targetId="about" color="pastelPink">About</NavButton>
      <NavButton targetId="price" color="pastelPink">Price</NavButton>
      <NavButton targetId="flow" color="pastelPink">Flow</NavButton>
      <NavButton targetId="links" color="pastelPink">Links</NavButton>
    </nav>
  </header>
</template>

<script setup>
import NavButton from './NavButton.vue'
</script>

<style>
.header {
  position: fixed;
  top: 0;
  width: 100%;
  background: white;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  z-index: 999;
}

.nav {
  display: flex;
  justify-content: center;
  gap: 24px;
  padding: 16px 0;
}
</style>