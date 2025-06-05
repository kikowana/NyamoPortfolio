<template>
  <button class="nav-button" @click="handleClick">
    <span>
      <span v-if="leftIcon" class="material-icons-round icon">arrow_back_ios</span>
      <slot />
      <span v-if="rightIcon" :class="{'material-icons-round': true, 'icon': true, 'mobile-icon': isMobileView}">arrow_forward_ios</span>
    </span>
    <div class="hover-heart">♡</div>
  </button>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  targetId: String,
  pageLink: String,
  rightIcon: Boolean,
  leftIcon: Boolean
})

// サーバー側かクライアント側かを判断
const isBrowser = typeof window !== 'undefined'
const isMobileView = ref(false)

// 画面サイズの変更を監視する
const updateMobileView = () => {
  if (isBrowser) {
    isMobileView.value = window.innerWidth <= 600
  }
}

onMounted(() => {
  // マウント時に最初のサイズをチェック
  updateMobileView()
  
  if (isBrowser) {
    window.addEventListener('resize', updateMobileView)
  }
})

onUnmounted(() => {
  if (isBrowser) {
    window.removeEventListener('resize', updateMobileView)
  }
})

function handleClick() {
  if (!isBrowser) return; // サーバーサイドでは何もしない
  
  if (props.pageLink) {
    // ページ遷移の場合
    navigateToPage(props.pageLink);
  } else if (props.targetId) {
    // 同じページ内のスクロールの場合
    scrollToTarget();
  }
}

function navigateToPage(path) {
  if (!isBrowser) return; // サーバーサイドでは何もしない
  
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
  if (!isBrowser) return; // サーバーサイドでは何もしない
  
  // スクロール調整のためにタイムアウトを設定
  setTimeout(() => {
    const el = document.getElementById(props.targetId)
    if (el) {
      // モバイルデバイスかどうかを確認（より適切な判定）
      const isMobile = window.innerWidth <= 600
      const isTablet = window.innerWidth > 600 && window.innerWidth <= 700
      
      // デフォルトのオフセット値を設定（PCサイズ）
      let offset = -100
      
      // 画面サイズに応じてオフセットを調整
      if (isMobile) {
        // モバイル表示時のオフセット値を大幅に調整
        switch (props.targetId) {
          case 'about':
            offset = -80; // 微調整
            break;
          case 'flow':
            offset = -80; // 微調整
            break;
          case 'price':
            offset = -80; // 微調整
            break;
          case 'links':
            offset = -80; // 微調整
            break;
          default:
            offset = -80; // デフォルト値
        }
        
        // ヘッダーの高さを取得して動的に調整
        const header = document.querySelector('.header');
        if (header) {
          const headerHeight = header.offsetHeight;
          const additionalOffset = 0; // 必要に応じて追加オフセットを調整
          offset = -headerHeight + additionalOffset;
        }
      } else if (isTablet) {
        // タブレットサイズの場合は適切なオフセット
        offset = -150;
      }
      
      // スクロール位置の計算をより正確に行う
      const currentScrollPosition = window.scrollY;
      const elementPosition = el.getBoundingClientRect().top + currentScrollPosition;
      
      // スクロール
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
@media (max-width: 600px) {
  .mobile-icon {
    display: block;
    font-size: 12px !important;
    margin-top: 2px !important;
    margin-bottom: -2px;
  }
}
</style>