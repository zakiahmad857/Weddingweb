<template>
  <loading v-if="state.isLoading.length < 13" />
  <div class="pengajian">
    <navigation v-show="state.showNav" />
    <div class="pengajian__1">
      <h1 class="heading-0">PENGAJIAN</h1>
      <p class="text-3 mb-2">
        Pengajian merupakan blablablabla Pengajian merupakan blablablabla
        Pengajian merupakan blablablabla Pengajian merupakan
        blablablablaPengajian merupakan blablablablaPengajian merupakan
        blablablabla
      </p>
      <div class="img-container">
        <img src="../assets/images/prewed-9.webp" alt="Pre Wedding" />
        <div class="creator">
          Videographer by Ivan Dimas Saputra <br />
          Editor by Gamma Winarno
        </div>
      </div>
      <div @click="scrollToTwo" class="arrow-down">
        <img
          @load="handleLoad"
          src="../assets/icons/icon-arrow-down.svg"
          alt="Arrow Down"
        />
      </div>
    </div>
    <div ref="siramanTwo" class="pengajian__2">
      <div class="img"></div>
    </div>
    <div class="pengajian__3">
      <div class="img-container">
        <img @load="handleLoad" src="../assets/images/prewed-4.webp" alt="" />
      </div>
      <div class="img-container">
        <img @load="handleLoad" src="../assets/images/prewed-4.webp" alt="" />
      </div>
    </div>
    <div class="pengajian__4">
      <div class="img"></div>
    </div>
    <div class="pengajian__5">
      <div class="container">
        <div class="img-container">
          <img @load="handleLoad" src="../assets/images/prewed-2.webp" alt="" />
        </div>
        <div class="img-container">
          <img @load="handleLoad" src="../assets/images/prewed-3.webp" alt="" />
        </div>
      </div>
    </div>
    <div class="pengajian__6">
      <div class="img-container">
        <img @load="handleLoad" src="../assets/images/prewed-4.webp" alt="" />
      </div>
      <div class="img-container">
        <img @load="handleLoad" src="../assets/images/prewed-4.webp" alt="" />
      </div>
    </div>
    <div class="pengajian__7">
      <div class="img-container">
        <img @load="handleLoad" src="../assets/images/prewed-9.webp" alt="" />
      </div>
    </div>
    <div class="pengajian__8">
      <div class="img-container">
        <img @load="handleLoad" src="../assets/images/prewed-10.webp" alt="" />
      </div>
      <div class="img-container">
        <img @load="handleLoad" src="../assets/images/prewed-11.webp" alt="" />
      </div>
      <div class="img-container">
        <img @load="handleLoad" src="../assets/images/prewed-12.webp" alt="" />
      </div>
    </div>
    <div class="pengajian__9">
      <div class="img-container">
        <img @load="handleLoad" src="../assets/images/prewed-13.webp" alt="" />
      </div>
      <div class="img-container">
        <img @load="handleLoad" src="../assets/images/prewed-14.webp" alt="" />
      </div>
    </div>
    <back-to-top @click="scrollToTop" :isScroll="state.isScroll" />
  </div>
</template>

<script>
import { onMounted, onUnmounted, reactive, ref } from 'vue';
import Navigation from '../components/Navigation.vue';
import BackToTop from '../components/BackToTop.vue';
import Loading from '../components/Loading.vue';
import { promiseTimeOut } from '../utils/promiseTimeOut';

export default {
  name: 'Pengajian',
  components: {
    Navigation,
    BackToTop,
    Loading
  },
  setup() {
    const state = reactive({
      isScroll: false,
      isLoading: [],
      lastScrollTop: 0,
      showNav: true
    });
    const siramanTwo = ref(null);

    onMounted(() => {
      const root = document.getElementsByTagName('html')[0];
      root.classList.add('snap-scroll');

      document.addEventListener('scroll', handleScroll);
    });

    onMounted(() => {
      // element should be replaced with the actual target element on which you have applied scroll, use window in case of no target element.
      window.addEventListener('scroll', handleScrollNav, false);
    });

    onUnmounted(() => {
      window.removeEventListener('scroll', handleScrollNav, false);
    });

    function handleScrollNav() {
      // or window.addEventListener("scroll"....
      var st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
      if (st > state.lastScrollTop) {
        // downscroll code
        state.showNav = false;
      } else {
        // upscroll code
        state.showNav = true;
      }
      state.lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
    }

    function scrollToTwo() {
      const { top } = siramanTwo.value.getBoundingClientRect();
      window.scrollTo({ top, behavior: 'smooth', left: 0 });
    }

    function handleScroll() {
      const { top } = siramanTwo.value.getBoundingClientRect();

      if (window.scrollY > top) {
        state.isScroll = true;
      } else {
        state.isScroll = false;
      }
    }

    function scrollToTop() {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }

    async function handleLoad() {
      await promiseTimeOut(1000);
      state.isLoading.push(true);
    }

    return { scrollToTwo, siramanTwo, state, scrollToTop, handleLoad };
  }
};
</script>

<style lang="scss" scoped>
@import '../scss/Pengajian.scss';
</style>
