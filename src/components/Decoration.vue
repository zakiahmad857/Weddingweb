<template>
  <div class="bg-top"></div>
  <div class="bg-bottom"></div>
</template>

<script>
export default {
  name: 'Decoration'
};
</script>

<style lang="scss" scoped>
.bg-top {
  background-image: url('../assets/images/bg-login-flower-top.png');
  height: 30vh;
  top: 0;
  background-position: center bottom;

  @media only screen and (max-width: 90em) {
    height: 25vh;
  }

  @media only screen and (max-width: 28.125em) {
    height: 20vh !important;
  }
}

.bg-bottom {
  bottom: 0;
  height: 40vh;
  background-image: url('../assets/images/bg-login-flower-bottom.png');
  background-position: center top;

  @media only screen and (max-width: 28.125em) {
    height: 30vh;
    background-image: url('../assets/images/bg-login-flower-bottom-mobile.png');
  }
}

.bg-top,
.bg-bottom {
  position: absolute;
  left: 0;
  width: 100%;
  background-size: cover;
  z-index: 0;
}
</style>
