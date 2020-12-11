<template>
  <div :class="{ showed: isScroll }" class="back-to-top">
    <div class="back-to-top__container">
      <img src="../assets/icons/icon-arrow-down.svg" alt="" />
    </div>
    <p class="text-3 mt-1">Back To Top</p>
  </div>
</template>

<script>
export default {
  name: 'BackToTop',
  props: {
    isScroll: Boolean
  }
};
</script>

<style lang="scss" scoped>
@import '../scss/variables.scss';

.back-to-top {
  position: fixed;
  bottom: 3rem;
  right: 3rem;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  opacity: 0;
  z-index: -999;
  transition: opacity 0.3s;

  @media only screen and (max-width: 28.175em) {
    right: 50%;
    transform: translate(50%);
  }

  &.showed {
    opacity: 1;
    z-index: 1;
  }

  &__container {
    height: 5rem;
    width: 5rem;
    border-radius: 50%;
    background: rgba(196, 196, 196, 0.1);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .text-3 {
    text-align: center;
    font-weight: 700;
    color: $color-blue-c;
  }

  img {
    transform: rotate(180deg);
  }
}
</style>
