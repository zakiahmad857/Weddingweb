<template>
  <div class="thankyou">
    <h1 class="mb-2">
      {{ lang === 'id' ? 'Terima Kasih' : 'Thank You' }} <br />
      {{ lang === 'id' ? 'atas ucapannya' : 'For The Wishes' }}
    </h1>
    <img
      class="couple mb-3"
      src="../assets/images/image-couple.png"
      alt="gamma alfarra"
    />
    <img
      class="gamma-alfarra mb-3"
      src="../assets/images/text-gamma-alfarra.png"
      alt="gamma alfarra"
    />
    <Button @click="handleClick" style="width: 20rem" color="grey">{{
      lang === 'id' ? 'Masuk Ke Acara' : 'Enter Event'
    }}</Button>
  </div>
</template>

<script>
import Button from '../components/Button.vue';

export default {
  name: 'Thankyou',
  components: {
    Button
  },
  props: {
    lang: String
  },
  setup(_props, ctx) {
    function handleClick(e) {
      ctx.emit('done', e);
    }

    return { handleClick };
  }
};
</script>

<style lang="scss" scoped>
h1 {
  font-family: 'Alex Brush', cursive;
  font-size: 4.75rem;
  font-weight: 400;
  letter-spacing: 2px;
  text-align: center;
  line-height: 1;

  @media only screen and (max-width: 90em) and (orientation: landscape) {
    font-size: 4rem;
  }
}

.btn {
  position: relative;
  z-index: 10;
}

.couple {
  height: 20rem;
  position: relative;
  z-index: 10;

  @media only screen and (max-width: 90em) and (orientation: landscape) {
    height: 15rem;
  }
}

.thankyou {
  padding: 3rem 4rem;
  width: 80%;
  height: 90%;
  border-radius: 0.625rem;
  box-shadow: 0 0.625rem 1.125rem rgba(0, 0, 0, 0.15);
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f6f5f5;
  position: relative;

  transform: scale(0);
  transition: transform 1s ease-out;

  @media only screen and (max-width: 28.125em) {
    height: 100%;
    width: 100%;
  }

  &.showing {
    display: unset;
  }

  &.showed {
    display: flex;
    transform: scale(1);
  }

  &.collapsing {
    display: flex;
    transition: transform 0.5s;
    transform: scale(0);
  }

  .gamma-alfarra {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 0;

    @media only screen and (max-width: 90em) and (orientation: landscape) {
      height: 15rem;
    }
  }
}
</style>
