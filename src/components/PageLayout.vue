<template>
  <div class="page-container">
    <div class="fixed-header">
      <Header :pageType="pageType" />
    </div>
    
    <div class="page-content">
      <slot></slot>
    </div>
    
    <div class="fixed-footer">
      <Footer />
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';
import Header from './Header.vue';
import Footer from './Footer.vue';

defineProps({
  pageType: {
    type: String,
    default: 'home'
  }
});
</script>

<style>
/* ヘッダータイトルの一貫性を保つためのスタイル */
.fixed-header {
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
}

.fixed-header .header-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.fixed-header .header-title {
  flex: 0 0 auto;
  padding: 0;
  margin: 0;
}

/* モバイル端末での表示調整 */
@media (max-width: 768px) {
  .page-content {
    padding-top: 60px;
  }
}
</style>
