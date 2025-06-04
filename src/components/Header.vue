<template>
  <header class="header">
    <div class="header-inner">
      <div class="header-title">nya萌のアトリエ</div>      <nav class="nav">
        <NavButton class="nav-button-appear" targetId="about" style="--delay: 0.1s">About</NavButton>
        <NavButton class="nav-button-appear" targetId="flow" style="--delay: 0.2s">Flow</NavButton>
        <NavButton class="nav-button-appear" targetId="price" style="--delay: 0.3s">Price</NavButton>
        <NavButton class="nav-button-appear" targetId="links" style="--delay: 0.4s">Links</NavButton>
      </nav>
    </div>
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

.header-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 32px;
  height: 68px;
}

.header-title {
  font-family: 'Noto Sans JP', sans-serif;
  font-size: 1.7rem;
  color: #e91e63;
  font-weight: bold;
  letter-spacing: 0.05em;
}

.nav {
  display: flex;
  justify-content: center;
  gap: 12px;
  padding: 0;
}

.nav-button-appear {
  animation: popIn 0.5s ease-in-out forwards;
  transform: translateY(-20px);
  opacity: 0;
  animation-delay: var(--delay, 0s);
}

@keyframes popIn {
  0% {
    transform: translateY(-20px);
    opacity: 0;
  }
  60% {
    transform: translateY(5px);
    opacity: 0.9;
  }
  80% {
    transform: translateY(-3px);
    opacity: 1;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

@media (max-width: 700px) {
  .header-inner {
    flex-direction: column;
    height: auto;
    padding: 12px 16px;
  }
  
  .header-title {
    margin-bottom: 10px;
  }
    .nav {
    gap: 8px;
  }
  
  .nav-button {
    padding: 6px 16px;
    font-size: 0.9rem;
  }
}

@media (max-width: 600px) {
  .header {
    padding-bottom: 2px;
  }
  .header-inner {
    padding: 6px 8px 2px 8px;
  }
  .header-title {
    font-size: 1.25rem;
    margin-bottom: 4px;
  }.nav {
    width: 100%;
    justify-content: space-evenly;
    gap: 4px;
  }  .nav-button {
    padding: 6px 6px;
    font-size: 0.85rem;
    min-width: 55px;
    margin: 0 2px;
  }
}
</style>