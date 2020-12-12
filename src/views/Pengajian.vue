<template>
  <loading v-if="state.isLoading.length < 12" />
  <div class="pengajian">
    <navigation v-show="state.showNav" />
    <div ref="preWed1" class="pengajian__1">
      <h1 class="heading-0">SIRAMAN</h1>
      <p class="text-3 mb-2"></p>
      <div class="img-container">
        <img src="../assets/images/siraman-1.png" alt="Pre Wedding" />
        <div class="creator"></div>
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
        <img @load="handleLoad" src="../assets/images/siraman-3.png" alt="" />
      </div>
      <div class="img-container">
        <img @load="handleLoad" src="../assets/images/siraman-4.png" alt="" />
      </div>
    </div>
    <div class="pengajian__4">
      <div class="img"></div>
    </div>
    <div class="pengajian__5">
      <div class="container">
        <div class="img-container">
          <img @load="handleLoad" src="../assets/images/siraman-6.png" alt="" />
        </div>
        <div class="img-container">
          <img @load="handleLoad" src="../assets/images/siraman-7.png" alt="" />
        </div>
      </div>
    </div>
    <div class="pengajian__6">
      <div class="img-container">
        <img @load="handleLoad" src="../assets/images/siraman-8.png" alt="" />
      </div>
      <div class="img-container">
        <img @load="handleLoad" src="../assets/images/siraman-9.png" alt="" />
      </div>
    </div>
    <div class="pengajian__7">
      <div class="img-container">
        <img @load="handleLoad" src="../assets/images/siraman-10.png" alt="" />
      </div>
    </div>
    <div class="pengajian__8">
      <div class="img-container">
        <img @load="handleLoad" src="../assets/images/siraman-11.png" alt="" />
      </div>
      <div class="img-container">
        <img @load="handleLoad" src="../assets/images/siraman-12.png" alt="" />
      </div>
      <div class="img-container">
        <img @load="handleLoad" src="../assets/images/siraman-13.png" alt="" />
      </div>
    </div>
    <div class="pengajian__9">
      <div class="img-container">
        <img @load="handleLoad" src="../assets/images/siraman-14.png" alt="" />
      </div>
    </div>
    <back-to-top
      @click="scrollToTop"
      :isScroll="state.isScroll && state.showNav"
    />
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
    const preWed1 = ref(null);

    const appHeight = () => {
      const doc = preWed1.value;

      doc.style.height = `${window.innerHeight}px`;
    };

    onMounted(() => {
      window.addEventListener('resize', appHeight);
      appHeight();
    });

    onUnmounted(() => {
      window.removeEventListener('resize', appHeight);
    });

    onMounted(() => {
      const root = document.getElementsByTagName('html')[0];
      document.body.classList.add('snap-scroll');
      root.classList.add('snap-scroll');

      document.addEventListener('scroll', handleScroll);
    });

    onUnmounted(() => {
      const root = document.getElementsByTagName('html')[0];
      document.body.classList.remove('snap-scroll');
      root.classList.remove('snap-scroll');

      document.removeEventListener('scroll', handleScroll);
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
      if (isIOS()) window.scroll({ left: 0, top, behavior: 'smooth' });
      else window.scrollTo({ top, behavior: 'smooth', left: 0 });
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
      if (!isIOS()) window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
      else window.scroll({ top: 0, left: 0, behavior: 'smooth' });
    }

    async function handleLoad() {
      await promiseTimeOut(1000);
      state.isLoading.push(true);
    }

    return { scrollToTwo, siramanTwo, state, scrollToTop, handleLoad, preWed1 };
  }
};
</script>

<style lang="scss" scoped>
@import '../scss/Pengajian.scss';
</style>
