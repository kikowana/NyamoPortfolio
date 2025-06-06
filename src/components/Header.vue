<template>  <header class="header">
    <div class="header-inner">      <a href="/" class="header-title-link">
        <div class="header-title">
          <span class="title-decoration title-decoration-left">❀</span>
          <span class="title-text">nya萌のアトリエ</span>
          <span class="title-decoration title-decoration-right">❀</span>
        </div>
      </a>      <nav class="nav"><template v-if="pageType === 'home' || !pageType">
          <NavButton class="nav-button-appear" targetId="about" style="--delay: 0.1s">About</NavButton>
          <NavButton class="nav-button-appear" targetId="flow" style="--delay: 0.2s">Flow</NavButton>
          <NavButton class="nav-button-appear" targetId="price" style="--delay: 0.3s">Price</NavButton>
          <NavButton class="nav-button-appear" targetId="links" style="--delay: 0.4s">Links</NavButton>
          <NavButton class="nav-button-appear" pageLink="gallery" :rightIcon="true" style="--delay: 0.5s">Gallery</NavButton>
        </template>
        <template v-else-if="pageType === 'gallery'">
          <NavButton class="nav-button-appear" pageLink="/" :leftIcon="true" style="--delay: 0.1s">Home</NavButton>
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
  white-space: nowrap; /* タイトルを改行しないように */
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
  /* ホバー時の微妙な効果 - 位置は変えない */
  filter: drop-shadow(0 0 2px rgba(233, 30, 99, 0.3));
}

/* アニメーションを削除して位置が変わらないようにする */

.nav {
  display: flex;
  justify-content: flex-end; /* 中央揃えから右寄せに戻す */
  gap: 12px;
  padding: 0;
  margin-left: auto; /* 右寄せを強化 */
  flex-wrap: wrap; /* ボタンが折り返せるように設定 */
}

.nav-button {
  border-radius: 20px; /* デフォルトで全てのボタンの角を丸くする */
  transition: transform 0.2s ease, box-shadow 0.2s ease; /* スムーズなエフェクトのために遷移を追加 */
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

/* PC表示でも狭いウィンドウのための調整 */
@media (min-width: 851px) and (max-width: 1000px) {
  .header-inner {
    padding: 0 20px;
  }
  
  .header-title {
    font-size: 1.7rem;
  }
  
  .nav {
    gap: 10px;
  }
  
  .nav-button {
    padding: 7px 15px;
    font-size: 0.95rem;
  }
}

/* 850px以下のサイズでは中央揃えにする（PC画面で重なりを防ぐため） */
@media (max-width: 850px) {
  .nav {
    justify-content: center; /* モバイルとタブレットでは中央揃え */
    margin-left: 0; /* 右寄せをキャンセル */
    width: 100%; /* 幅を100%に設定 */
  }
  
  .header-inner {
    flex-direction: column;
    height: auto;
    padding: 12px 16px;
    transition: all 0.3s ease-in-out; /* スムーズな変化のためのトランジション */
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
    transition: all 0.3s ease-in-out; /* スムーズな変化のためのトランジション */
  }
  
  .header-title {
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
    padding-bottom: 2px;
    margin-top: 2px;
    white-space: normal; /* 幅が小さい場合は折り返し可能に */
  }
  
  .title-text {
    position: relative;
    text-align: center;
  }
}

@media (min-width: 601px) and (max-width: 850px) {
  .header-title {
    font-size: 1.6rem; /* タイトルを少し小さくする */
  }
  
  .nav-button {
    padding: 5px 14px; 
    font-size: 0.85rem;
    margin-bottom: 4px; /* 下側に少し余白を追加 */
  }
  
  .nav {
    gap: 8px; /* ボタン間の間隔を調整 */
    padding-bottom: 4px; /* ナビゲーションの下側に余白を追加 */
  }
  
  .title-decoration {
    font-size: 1rem; /* 装飾も少し小さく */
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
    font-size: 1.15rem !important; /* 1.25remから1.15remへさらに小さく */
    margin-bottom: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .title-decoration {
    font-size: 0.9rem; /* 装飾アイコンも小さく */
  }  
  .header-title:hover {
    /* モバイル表示時もホバー効果を変更 - 位置は変えない */
    filter: drop-shadow(0 0 2px rgba(233, 30, 99, 0.3));
  }
  
  /* モバイル表示でもアニメーションを削除 */
  
  .header-title:hover .title-text {
    letter-spacing: 0.02em;
    text-shadow: 0 0 3px rgba(233, 30, 99, 0.2);
  }
    /* モバイル表示でのアニメーションを削除 */
  .header-title:hover .title-decoration {
    transform: scale(1.05); /* モバイルでは控えめな効果に */
    filter: drop-shadow(0 0 3px rgba(233, 30, 99, 0.4));
  }
  
  .nav {
    width: 100%;
    justify-content: space-evenly;
    gap: 0px; /* ギャップをなくす */
  }
  
  .nav-button {
    padding: 2px 1px; /* パディングを最小限に */
    font-size: 0.65rem; /* フォントサイズをさらに小さく */
    min-width: 35px; /* ボタンの最小幅をさらに小さく */
    margin: 0;
    border-radius: 12px; /* 小さいボタンに合わせて角丸も調整 */
  }
  
  /* アイコンもさらに小さく */
  .mobile-icon {
    font-size: 10px !important;
    margin-top: 1px !important;
    margin-bottom: -1px;
  }
  
  /* スクリーンサイズに応じてボタンサイズを動的調整 */
  @media (max-width: 380px) {
    .nav-button {
      font-size: 0.6rem; /* さらに小さく */
      min-width: 30px;
      padding: 2px 0px;
    }
    
    .mobile-icon {
      font-size: 9px !important;
    }
  }
  
  /* 画面が非常に小さい場合 */
  @media (max-width: 340px) {
    .nav-button {
      font-size: 0.55rem; /* 極小サイズに */
      min-width: 28px;
    }
    
    .header-title {
      font-size: 1.05rem !important; /* タイトルも極小に */
    }
  }
}
</style>