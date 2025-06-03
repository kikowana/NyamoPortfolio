<template>
  <footer class="footer">
    <div class="copyright">
      © 2025 nya萌のアトリエ. All Rights Reserved.
    </div>
  </footer>
</template>

<script setup>
// シンプルなフッター用のスクリプト
</script>

<style>
.footer {
  width: 100%;
  padding: 20px;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(8px);
  border-top: 1px solid rgba(var(--theme-color-rgb, 233, 30, 99), 0.2);
  transition: all 0.5s ease;
  position: relative;
  margin-top: 20px;
}

.copyright {
  text-align: center;
  font-size: 0.9rem;
  color: rgba(0, 0, 0, 0.6);
}

@media (max-width: 700px) {
  .footer {
    padding: 15px;
  }
}
</style>
