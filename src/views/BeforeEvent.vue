<template>
  <div class="before-event">
    <div class="before-event__bg" />
    <div class="before-event__container">
      <div class="couple">
        <img src="../assets/images/img-bride.webp" alt="bride" />
      </div>
      <div class="info">
        <img
          src="../assets/images/text-gamma-alfarra-before-event.png"
          alt="gamma-alfarra"
          class="mb-2"
        />
        <h1 class="heading-1 mb-3">THE WEDDING CEREMONY</h1>
        <p class="text-1">
          Website dapat diakses <br />
          pada tanggal 13 December 2020 <br />
          mulai jam 8.00 WIB <br />
        </p>
      </div>
      <div class="couple">
        <img src="../assets/images/img-groom.webp" alt="groom" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BeforeEvent'
};
</script>

<style lang="scss" scoped>
@import '../scss/variables.scss';
.before-event {
  height: 100vh;
  background: $color-green-c;
  position: relative;

  &__bg {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    background: url('../assets/images/bg-before-event.webp');
    height: 40vh;
    background-size: cover;
    background-position: center top;

    @media only screen and (max-width: 28.175em) {
      height: 25vh;
    }
  }

  &__container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    height: 100%;
    justify-items: center;

    @media only screen and (max-width: 64em) and (orientation: portrait) {
      padding-top: 10rem;
    }

    @media only screen and (max-width: 75em) {
      grid-template-columns: 1fr 1.5fr 1fr;
    }

    @media only screen and (max-width: 28.175em) {
      padding-top: 25%;
    }
  }
}

.couple {
  padding-top: 2rem;
  position: relative;

  @media only screen and (max-width: 28.175em) {
    &:first-child {
      img {
        left: -3rem;
      }
    }

    &:last-child {
      img {
        right: -3rem;
      }
    }
  }

  img {
    height: 35rem;
    width: auto;

    @media only screen and (max-width: 90em) {
      height: 30rem;
    }

    @media only screen and (max-width: 64em) {
      height: 25rem;
    }

    @media only screen and (max-width: 56.25em) {
      height: 20rem;
    }

    @media only screen and (max-width: 28.175em) {
      height: 20rem;
      position: absolute;
      top: -7rem;
    }
  }
}

.info {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 5rem;

  img {
    height: 12rem;

    @media only screen and (max-width: 75em) {
      height: 10rem;
    }

    @media only screen and (max-width: 56.25em) {
      height: 8rem;
    }

    @media only screen and (max-width: 28.175em) {
      height: 10rem;
    }
  }

  @media only screen and (max-width: 21.25em) {
    padding-top: 0;
  }

  .heading-1 {
    color: $color-maroon-a;
    font-size: 4rem;

    @media only screen and (max-width: 64em) {
      font-size: 4rem;
    }

    @media only screen and (max-width: 56.25em) {
      font-size: 3.5rem;
    }

    @media only screen and (max-width: 28.175em) {
      font-size: 4rem;
    }
  }

  .text-1 {
    color: $color-green;
    font-size: 1.6rem;
  }

  .heading-1,
  .text-1 {
    text-align: center;
  }
}
</style>
