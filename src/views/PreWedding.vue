<template>
  <loading v-if="this.isLoading.length < 23" />
  <div class="pre-wedding">
    <navigation v-show="state.showNav" variant="transparent" />
    <div class="pre-wedding__1">
      <h1 class="heading-0">Pre-<br />Wed</h1>
      <h1 class="heading mobile mb-1">PreWed</h1>
      <p class="creator">
        Photographed by Ivan Dimas Saputra <br />
        Edited Photos by Gamma Winarno <br />
        MUA by Raisha Monianti <br />
      </p>
      <div class="one__img-container">
        <img
          @load="this.handleLoad"
          class="img-1"
          src="../assets/images/prewed-1.webp"
          alt="Pre Wedding"
        />
        <div class="one__description">
          “Knowing that love is to share, Each one believing that love never
          dies. Watching their eyes, And hoping I'm always there, I will be
          there, and everywhere, Here, there and everywhere.”
        </div>
      </div>
      <div @click="this.scrollToTwo" class="one__arrow-down">
        <img
          @load="this.handleLoad"
          src="../assets/icons/icon-arrow-down.svg"
          alt="Arrow Down"
        />
      </div>
    </div>
    <div ref="preWed2" class="pre-wedding__2">
      <div class="img-container">
        <img
          @load="this.handleLoad"
          src="../assets/images/prewed-4.webp"
          alt="Pre Wedding"
        />
      </div>
      <div class="description">
        <p class="text-2">
          Both of us have a deep, rooted, Javanese background, with Alfarra
          having half Sundanese on her side. To honour that half, we decided to
          use Sundanese attire on the ceremony whilst also having Javanese as
          the core of the event. We respect and honour all our heritages very
          much.
        </p>
        <img
          @load="this.handleLoad"
          class="underline"
          src="../assets/images/prewed-underline.webp"
          alt="underline"
        />
      </div>
    </div>
    <div class="pre-wedding__3">
      <div class="description">
        <p class="text-2">
          Fun fact: Alfarra looks exactly like her mother in these Javanese
          series. It creeps everyone out. Especially Gamma.
        </p>
        <img
          class="underline"
          src="../assets/images/prewed-underline.webp"
          alt="underline"
        />
      </div>
      <div class="img-container">
        <div class="aspect-ratio">
          <img
            @load="this.handleLoad"
            src="../assets/images/prewed-5.webp"
            alt="Pre Wedding"
          />
        </div>
      </div>
    </div>
    <div class="pre-wedding__4">
      <div class="img"></div>
    </div>
    <div class="pre-wedding__5">
      <div class="img-container">
        <div class="aspect-ratio">
          <img
            @load="this.handleLoad"
            src="../assets/images/prewed-2.webp"
            alt="Pre Wedding"
          />
        </div>
      </div>
      <div class="img-container">
        <div class="aspect-ratio">
          <img
            @load="this.handleLoad"
            src="../assets/images/prewed-3.webp"
            alt="Pre Wedding"
          />
        </div>
        <p class="mt-2 text-2">
          We both really loved this shoot, it was super fun and very us. We even
          used Gamma’s dad’s vintage rackets. <br />
          Another fun fact: on the way to the court, Alfarra spilled coffee all
          over her white dress. She’s not at all clumsy. But she did clean it up
          really well and made it work!
        </p>
      </div>
      <div class="text-2 text-2--portrait-1">
        We both really loved this shoot, it was super fun and very us. We even
        used Gamma’s dad’s vintage rackets.
      </div>
      <div class="text-2 text-2--portrait-2">
        Another fun fact: on the way to the court, Alfarra spilled coffee all
        over her white dress. She’s not at all clumsy. But she did clean it up
        really well and made it work!
      </div>
    </div>
    <div class="pre-wedding__6">
      <div class="img-container">
        <div class="aspect-ratio">
          <img
            @load="this.handleLoad"
            src="../assets/images/prewed-7.webp"
            alt="Pre Wedding"
          />
        </div>
      </div>
      <div class="img-container">
        <div class="aspect-ratio">
          <img
            @load="this.handleLoad"
            src="../assets/images/prewed-8.webp"
            alt="Pre Wedding"
          />
        </div>
        <p class="text-2 mt-2">
          In a parallel universe, this would be how we would’ve met.
        </p>
      </div>
    </div>
    <div class="pre-wedding__7">
      <img src="../assets/images/prewed-9.webp" alt="Pre Wedding" />
    </div>
    <div class="pre-wedding__8">
      <div class="img-container">
        <p class="text-2">
          Months before the wedding Gamma decided to pick this moment to propose
          to Alfarra.
        </p>
        <div class="aspect-ratio">
          <img
            @load="this.handleLoad"
            src="../assets/images/prewed-10.webp"
            alt="Pre Wedding"
          />
        </div>
      </div>
      <div class="img-container">
        <p class="text-2">
          Months before the wedding Gamma decided to pick this moment to propose
          to Alfarra.
        </p>
        <div class="aspect-ratio">
          <img
            @load="this.handleLoad"
            src="../assets/images/prewed-11.webp"
            alt="Pre Wedding"
          />
        </div>
        <p class="text-2">
          We all know Alfarra would say yes anyway, but every girl deserves a
          proposal yes?
        </p>
      </div>
      <div class="img-container">
        <div class="aspect-ratio">
          <img
            @load="this.handleLoad"
            src="../assets/images/prewed-12.webp"
            alt="Pre Wedding"
          />
        </div>
        <p class="text-2">
          We all know Alfarra would say yes anyway, but every girl deserves a
          proposal yes?
        </p>
      </div>
    </div>
    <div class="pre-wedding__9">
      <div class="img"></div>
      <div class="img"></div>
    </div>
    <div class="pre-wedding__10">
      <div class="img-container">
        <img
          @load="this.handleLoad"
          src="../assets/images/prewed-15.webp"
          alt="Pre Wedding"
        />
      </div>
      <div class="img-container">
        <img
          @load="this.handleLoad"
          src="../assets/images/prewed-16.webp"
          alt="Pre Wedding"
        />
      </div>
      <div class="img-container">
        <img
          @load="this.handleLoad"
          src="../assets/images/prewed-17.webp"
          alt="Pre Wedding"
        />
      </div>
    </div>
    <div class="pre-wedding__11">
      <img
        @load="this.handleLoad"
        src="../assets/images/prewed-18.webp"
        alt="Pre Wedding"
      />
    </div>
    <div class="pre-wedding__12">
      <img
        @load="this.handleLoad"
        src="../assets/images/prewed-19.webp"
        alt="Pre Wedding"
      />
    </div>
    <div class="pre-wedding__13">
      <img
        @load="this.handleLoad"
        src="../assets/images/prewed-20.webp"
        alt="Pre Wedding"
      />
    </div>
    <div class="pre-wedding__14">
      <img
        @load="this.handleLoad"
        src="../assets/images/prewed-21.webp"
        alt="Pre Wedding"
      />
    </div>
    <div class="pre-wedding__15">
      <div class="img-container">
        <img
          @load="this.handleLoad"
          src="../assets/images/prewed-22.webp"
          alt="Pre Wedding"
        />
      </div>
      <div class="img-container">
        <img
          @load="this.handleLoad"
          src="../assets/images/prewed-23.webp"
          alt="Pre Wedding"
        />
      </div>
    </div>
    <div class="pre-wedding__16">
      <img
        @load="this.handleLoad"
        src="../assets/images/prewed-24.webp"
        alt="Pre Wedding"
      />
    </div>
    <div
      :class="{ showed: isScroll }"
      @click="this.scrollToTop"
      class="back-to-top"
    >
      <div class="back-to-top__container">
        <img
          @load="this.handleLoad"
          src="../assets/icons/icon-arrow-down.svg"
          alt=""
        />
      </div>
      <p class="text-3 mt-1">Back To Top</p>
    </div>
  </div>
</template>

<script>
import { onMounted, onUnmounted, reactive } from 'vue';
import Loading from '../components/Loading.vue';
import Navigation from '../components/Navigation.vue';
import { promiseTimeOut } from '../utils/promiseTimeOut';

export default {
  components: { Navigation, Loading },
  name: 'PreWedding',
  setup() {
    const state = reactive({
      lastScrollTop: 0,
      showNav: true
    });

    onMounted(() => {
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

    return { state };
  },
  data() {
    return {
      isScroll: false,
      isPlay: false,
      isLoading: []
    };
  },
  mounted() {
    const root = document.getElementsByTagName('html')[0];
    root.classList.add('snap-scroll');

    document.addEventListener('scroll', this.handleScroll);
  },
  unmounted() {
    const root = document.getElementsByTagName('html')[0];
    root.classList.remove('snap-scroll');

    document.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    scrollToTwo() {
      const { top } = this.$refs.preWed2.getBoundingClientRect();
      window.scrollTo({ top, behavior: 'smooth', left: 0 });
    },
    scrollToTop() {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    },
    handleScroll() {
      const { top } = this.$refs.preWed2.getBoundingClientRect();

      if (window.scrollY > top) {
        this.isScroll = true;
      } else {
        this.isScroll = false;
      }
    },
    async handleLoad() {
      await promiseTimeOut(1000);
      this.isLoading.push(true);
    }
  }
};
</script>

<style lang="scss" scoped>
@import '../scss/variables.scss';
@import '../scss/PreWedding.scss';
</style>

<style>
html.snap-scroll {
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
}
</style>
