<template>  <header class="header">
    <div class="header-inner">      <a href="/" class="header-title-link">
        <div class="header-title">
          <span class="title-decoration title-decoration-left">❀</span>
          <span class="title-text">nya萌のアトリエ</span>
          <span class="title-decoration title-decoration-right">❀</span>
        </div>
      </a>
      <nav class="nav"><template v-if="pageType === 'home' || !pageType">
          <NavButton class="nav-button-appear" targetId="about" style="--delay: 0.1s">About</NavButton>
          <NavButton class="nav-button-appear" targetId="flow" style="--delay: 0.2s">Flow</NavButton>
          <NavButton class="nav-button-appear" targetId="price" style="--delay: 0.3s">Price</NavButton>
          <NavButton class="nav-button-appear" targetId="links" style="--delay: 0.4s">Links</NavButton>
          <NavButton class="nav-button-appear" pageLink="gallery" rightIcon="true" style="--delay: 0.5s">Gallery</NavButton>
        </template>
        <template v-else-if="pageType === 'gallery'">
          <NavButton class="nav-button-appear" pageLink="/" leftIcon="true" style="--delay: 0.1s">Home</NavButton>
        </template>
      </nav>
    </div>
  </header>
</template>

<script setup>
import NavButton from './NavButton.vue'
import { ref, onMounted } from 'vue'

const props = defineProps({
  pageType: {
    type: String,
    default: 'home'
  }
})
</script>

<style>
.header {
  width: 100%;
  background: linear-gradient(to right, rgba(255,255,255,0.95), rgba(254,245,247,0.95), rgba(255,255,255,0.95));
  box-shadow: 0 3px 10px rgba(233,30,99,0.15);
  z-index: 999;
  border-bottom: 1px solid rgba(253, 218, 221, 0.4);
}

.header-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 32px;
  height: 72px; /* 高さを68pxから72pxに増加 */
  position: relative;
  padding-bottom: 4px; /* 下部に少しパディングを追加 */
}

.header-title {
  font-family: 'DM Serif Display', 'Noto Sans JP', sans-serif;
  font-size: 1.8rem;
  color: #e91e63;
  font-weight: bold;
  letter-spacing: 0.05em;
  display: flex;
  align-items: center;
  height: 100%;
  position: absolute;
  left: 32px;
  top: 60%;  /* 50%から60%に変更して下に移動 */
  transform: translateY(-50%);
  text-shadow: 2px 2px 4px rgba(233, 30, 99, 0.2);
  position: relative;
  cursor: pointer;
  padding-bottom: 4px; /* 下部に少しパディングを追加 */
}

.title-text {
  display: inline-block;
  position: relative;
  transition: all 0.3s ease;
  color: #e91e63;
}

.header-title:hover .title-text {
  color: #d81b60;
  text-shadow: 0 0 4px rgba(233, 30, 99, 0.25);
  letter-spacing: 0.04em;
}

.header-title-link {
  text-decoration: none;
  position: absolute;
  left: 32px;
  top: 60%;  /* 50%から60%に変更して下に移動 */
  transform: translateY(-50%);
  height: 100%;
  display: flex;
  align-items: center;
}

.header-title-link:active .header-title {
  transform: translateY(-48%) scale(0.98);
  transition: all 0.1s ease;
}

.header-title:hover {
  /* タイトル全体のアニメーションは控えめにする */
  animation: titleFloat 2.5s ease-in-out infinite;
}

@keyframes titleFloat {
  0%, 100% {
    transform: translateY(-50%);
  }
  50% {
    transform: translateY(-52%);
  }
}

.nav {
  display: flex;
  justify-content: flex-end;
  gap: 12px;
  padding: 0;
  margin-left: auto;
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
  .header-title-link {
    position: relative;
    left: 0;
    top: 0;
    transform: none;
    margin-bottom: 10px;
    text-align: center;
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
  }  .header-title {
    position: relative;
    left: 0;
    transform: none;
    text-align: center;
    width: 100%;
    top: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    height: auto;
    padding-bottom: 2px; /* モバイル表示時のパディング調整 */
    margin-top: 2px; /* 上側に少し余白を追加 */
  }
  
  .title-text {
    position: relative;
    text-align: center;
  }
  
  .hover-title {
    width: 100%;
    text-align: center;
  }
    .nav {
    gap: 8px;
  }
  
  .nav-button {
    padding: 6px 16px;
    font-size: 0.9rem;
  }
}

.title-decoration {
  font-size: 1.2rem;
  color: var(--pastel-pink);
  opacity: 0.8;
  display: inline-block;
  animation: floatAnimation 3s ease-in-out infinite;
  transition: all 0.3s ease;
}

.title-decoration-left {
  margin-right: 8px;
  animation-delay: 0s;
}

.title-decoration-right {
  margin-left: 8px;
  animation-delay: 1.5s;
}

@keyframes floatAnimation {
  0%, 100% {
    transform: translateY(0) rotate(0deg);
  }
  50% {
    transform: translateY(-5px) rotate(5deg);
  }
}

.header-title:hover .title-decoration {
  color: #e91e63;
  opacity: 1;
  animation: decorationPulse 1.5s ease-in-out infinite alternate;
  transform-origin: center;
}

@keyframes decorationPulse {
  0% {
    transform: translateY(0) rotate(0deg) scale(1);
    text-shadow: 0 0 5px rgba(233, 30, 99, 0.4);
  }
  100% {
    transform: translateY(-8px) rotate(15deg) scale(1.2);
    text-shadow: 0 0 12px rgba(233, 30, 99, 0.8);
  }
}

@media (max-width: 600px) {
  .header {
    padding-bottom: 2px;
  }
  .header-inner {
    padding: 6px 8px 2px 8px;
  }  .header-title {
    font-size: 1.25rem;
    margin-bottom: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .title-decoration {
    font-size: 1rem;
  }
    .header-title:hover {
    animation: titleFloat 2.5s ease-in-out infinite;
  }
  
  @keyframes titleFloat {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-2px);
    }
  }
  
  .header-title:hover .title-text {
    letter-spacing: 0.02em;
    text-shadow: 0 0 3px rgba(233, 30, 99, 0.2);
  }
  
  @keyframes decorationPulse {
    0% {
      transform: translateY(0) rotate(0deg) scale(1);
      text-shadow: 0 0 5px rgba(233, 30, 99, 0.4);
    }
    100% {
      transform: translateY(-6px) rotate(12deg) scale(1.3);
      text-shadow: 0 0 10px rgba(233, 30, 99, 0.8);
    }
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