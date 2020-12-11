<template>
  <loading v-if="state.isLoading < 3" />
  <div class="gallery">
    <decoration />
    <navigation ref="navRef" :disableBack="true" />
    <div class="gallery__container">
      <h1 class="heading-0 mb-2">GALLERY</h1>
      <div class="galleries">
        <router-link :to="`/${state.lang}/gallery/siraman`">
          <div class="gallery-item">
            <h2 class="heading-1">Siraman</h2>
            <img
              @load="handleLoad"
              src="../assets/images/artwork-canvas.webp"
              alt="siraman"
            />
          </div>
        </router-link>
        <router-link :to="`/${state.lang}/gallery/pre-wedding`">
          <div class="gallery-item gallery-item--lg">
            <h2 class="heading-1">Pre-Wedding</h2>
            <img
              @load="handleLoad"
              src="../assets/images/artwork-canvas.webp"
              alt="pre-wedding"
            />
          </div>
        </router-link>
        <router-link :to="`/${state.lang}/gallery/pengajian`">
          <div class="gallery-item">
            <h2 class="heading-1">Pengajian</h2>
            <img
              @load="handleLoad"
              src="../assets/images/artwork-canvas.webp"
              alt="pengajian"
            />
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, ref, watch } from 'vue';
import Decoration from '../components/Decoration.vue';
import { useRoute } from 'vue-router';
import Navigation from '../components/Navigation.vue';
import Loading from '../components/Loading.vue';
import { promiseTimeOut } from '../utils/promiseTimeOut';

export default {
  name: 'Gallery',
  components: {
    Decoration,
    Navigation,
    Loading
  },
  setup() {
    const state = reactive({ lang: '', isLoading: [] });
    const navRef = ref(null);
    const route = useRoute();

    watch(state.isLoading, async (isLoading, _prevLoading) => {
      if (isLoading.length >= 3) {
        // await promiseTimeOut(1000);
        // navRef.value.playMusic();
      }
    });

    route.path.startsWith('/id') ? (state.lang = 'id') : (state.lang = 'en');

    async function handleLoad() {
      await promiseTimeOut(1000);
      state.isLoading.push(true);
    }

    return { state, handleLoad, navRef };
  }
};
</script>
<style lang="scss" scoped>
@import '../scss/variables.scss';

.gallery {
  min-height: 100vh;
  min-height: -webkit-fill-available;
  background-color: $color-green-c;

  &__container {
    display: flex;
    flex-direction: column;
    padding-top: 25vh;
    align-items: center;
    position: relative;
    z-index: 999;

    @media only screen and (orientation: portrait) {
      padding-top: 20vh;
    }
  }
}

.galleries {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 4rem;
  width: 80%;
  text-align: center;

  @media only screen and (orientation: portrait) {
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
    gap: 2rem;
    width: 100%;

    & > a {
      &:nth-child(2) {
        grid-column: 1 / -1;
        grid-row: 1 / 2;
      }
    }
  }
}

.gallery-item {
  cursor: pointer;
  position: relative;

  &:hover {
    img {
      transform: scale(1.05);
    }
  }

  &:active {
    img {
      transform: scale(0.95);
    }
  }

  img {
    height: 20rem;
    transition: all 0.3s;
    transform: scale(1);

    @media only screen and (max-width: 28.175em) {
      height: 15rem;
    }
  }

  &--lg {
    img {
      transform: scale(1.2);
    }

    &:hover {
      img {
        transform: scale(1.25);
      }
    }

    &:active {
      img {
        transform: scale(1.15);
      }
    }
  }
}

.heading-0 {
  font-weight: 400;
  color: $color-blue;
}

.heading-1 {
  font-weight: 400;
  color: $color-black-2;
  font-size: 1.875rem;
  position: absolute;
  top: 46%;
  left: 50%;
  transform: translate(-50%, -50%);
  white-space: nowrap;
  z-index: 10;

  @media only screen and (max-width: 28.175em) {
    font-size: 1.4rem;
  }
}
</style>
