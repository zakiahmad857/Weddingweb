<template>
  <div class="loading">
    <img
      class="mb-2"
      src="../assets/images/text-gamma-alfarra-before-event.png"
      alt="gamma-alfarra"
    />
    <loading-animation />
  </div>
</template>

<script>
import { onMounted, onUnmounted } from 'vue';
import LoadingAnimation from './LoadingAnimation.vue';
export default {
  name: 'Loading',
  components: { LoadingAnimation },
  setup() {
    onMounted(() => {
      document.body.style.overflow = 'hidden';
    });

    onUnmounted(() => {
      document.body.style.overflow = 'auto';
    });
  }
};
</script>

<style lang="scss" scoped>
@import '../scss/variables.scss';

.loading {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  max-height: 100vh;
  max-width: 100vw;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: $color-green-c;
  z-index: 9999999;

  img {
    height: 15rem;
  }

  &.collapsed {
    display: none;
  }
}
</style>
