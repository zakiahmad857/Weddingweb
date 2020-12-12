<template>
  <div class="souvenir">
    <img
      @click="handleClose"
      src="../assets/icons/icon-close.svg"
      alt="close"
      class="ic-close"
    />
    <h1 class="heading-0 mb-4">SOUVENIR</h1>
    <div class="souvenir__container">
      <p class="text-2">
        At first the bride did not want to design anything at all as it would
        put too much pressure on her.
        <br /><br />
        The groom however always reminded her of what she’s capable of and thus
        the souvenirs and website illustrations that you see here.
      </p>
      <img
        class="souvenir__img"
        src="../assets/images/img-souvenir.webp"
        alt="Souvenir"
      />
      <p class="text-2">
        The bride and groom hopes you know how much you all mean to them, if
        situations were different, it would be an honor for them, for you all to
        come. <br /><br />

        However, they wish you would stay at home, staying healthy and safe
        always. <br /><br />

        This was a token of their appreciation for you----the one reading this.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Souvenir',
  setup(_props, ctx) {
    function handleClose(e) {
      ctx.emit('close', e);
    }

    return { handleClose };
  }
};
</script>

<style lang="scss" scoped>
@import '../scss/variables.scss';
.souvenir {
  width: 80%;
  height: 90%;
  background-color: $color-green-c;
  padding: 3rem;
  position: relative;
  z-index: 999;
  border-radius: 1.2rem;
  overflow: auto;

  /* width */
  &::-webkit-scrollbar {
    width: 7px;
  }

  /* Track */
  &::-webkit-scrollbar-track {
    background: $color-green-c;
  }

  /* Handle */
  &::-webkit-scrollbar-thumb {
    background: $color-green-b;
  }

  /* Handle on hover */
  &::-webkit-scrollbar-thumb:hover {
    background: $color-green-a;
  }

  @media only screen and (max-width: 28.125em) {
    width: 100%;
    height: 100%;
    border-radius: unset;
  }

  &__container {
    display: grid;
    grid-template-columns: 3fr 4fr;
    grid-gap: 2rem;
    gap: 2rem;

    @media only screen and (orientation: portrait) {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;

      @supports not (gap: 2rem) {
        .souvenir__img {
          margin: 2rem 0;
        }
      }
    }
  }

  &__img {
    height: 27rem;
    grid-column: 1 / 2;
    grid-row: 1 / 3;
    justify-self: flex-end;

    @media only screen and (max-width: 90em) and (orientation: landscape) {
      height: 22rem;
    }

    @media only screen and (max-width: 28.125em) {
      justify-self: unset;
    }
  }
}

.heading-0 {
  text-align: center;
  font-weight: 400;
  color: $color-blue;
  font-size: 5.25rem;

  @media only screen and (max-width: 28.125em) {
    text-align: left;
  }
}

.text-2 {
  font-size: 1.6rem;
  margin-top: -0.5rem;
  line-height: 1.2;
  color: $color-blue;
}

.ic-close {
  position: absolute;
  top: 2rem;
  right: 2rem;
  cursor: pointer;
}
</style>
