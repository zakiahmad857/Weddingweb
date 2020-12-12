<template>
  <loading v-if="state.isPageLoading.length < 13" />
  <div class="siraman">
    <navigation v-show="state.showNav" />
    <div ref="preWed1" class="siraman__1">
      <h1 class="heading-0">PENGAJIAN</h1>
      <p class="text-3 mb-2"></p>
      <div class="video">
        <vue-plyr
          :options="{ settings: ['captions', 'quality', 'speed', 'loop'] }"
          ref="plyr"
        >
          <div class="plyr__video-embed">
            <iframe
              width="560"
              height="315"
              src="https://youtu.be/c1CAOt0Pssc"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </vue-plyr>
        <div class="creator">
          Videographer & Editor Potomoto
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
    <div ref="siramanTwo" class="siraman__2">
      <img
        @load="handleLoad"
        class="img"
        src="../assets/images/pengajian-1.png"
      />
    </div>
    <div class="siraman__3">
      <div class="img-container">
        <img @load="handleLoad" src="../assets/images/pengajian-2.png" alt="" />
      </div>
    </div>
    <div class="siraman__4">
      <img
        @load="handleLoad"
        src="../assets/images/pengajian-3.png"
        class="img"
      />
    </div>
    <div class="siraman__5">
      <div class="container">
        <div class="img-container">
          <img
            @load="handleLoad"
            src="../assets/images/pengajian-4.png"
            alt=""
          />
        </div>
        <div class="img-container">
          <img
            @load="handleLoad"
            src="../assets/images/pengajian-5.png"
            alt=""
          />
        </div>
      </div>
    </div>
    <div class="siraman__6">
      <div class="img-container">
        <img @load="handleLoad" src="../assets/images/pengajian-6.png" alt="" />
      </div>
      <div class="img-container">
        <img @load="handleLoad" src="../assets/images/pengajian-7.png" alt="" />
      </div>
    </div>
    <div class="siraman__7">
      <div class="img-container">
        <img @load="handleLoad" src="../assets/images/pengajian-9.png" alt="" />
      </div>
    </div>
    <div class="siraman__8">
      <div class="img-container">
        <img
          @load="handleLoad"
          src="../assets/images/pengajian-10.png"
          alt=""
        />
      </div>
      <div class="img-container">
        <img
          @load="handleLoad"
          src="../assets/images/pengajian-11.png"
          alt=""
        />
      </div>
      <div class="img-container">
        <img
          @load="handleLoad"
          src="../assets/images/pengajian-12.png"
          alt=""
        />
      </div>
    </div>
    <div class="siraman__9">
      <div class="img-container">
        <img
          @load="handleLoad"
          src="../assets/images/pengajian-13.png"
          alt=""
        />
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
  name: 'Siraman',
  components: {
    Navigation,
    BackToTop,
    Loading
  },
  setup() {
    const state = reactive({
      isScroll: false,
      isPageLoading: [],
      lastScrollTop: 0,
      showNav: true
    });
    const siramanTwo = ref(null);
    const iframe = ref(null);
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

    async function handleLoad() {
      await promiseTimeOut(1000);
      state.isPageLoading.push(true);
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

    return {
      scrollToTwo,
      siramanTwo,
      state,
      scrollToTop,
      handleLoad,
      iframe,
      preWed1
    };
  }
};
</script>

<style lang="scss" scoped>
@import '../scss/Siraman.scss';
</style>
