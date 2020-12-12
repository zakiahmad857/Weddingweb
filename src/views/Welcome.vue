<template>
  <div class="welcome">
    <div v-if="state.isLoading.length < 2" class="img-to-loaded">
      <loading />
      <img
        @load="handleLoad"
        src="../assets/images/bg-live-wedding.jpg"
        alt=""
      />
      <img
        @load="handleLoad"
        src="../assets/icons/icon-sound-off.png"
        alt="sound-off"
      />
    </div>
    <decoration v-if="!state.transitioning" />
    <loading style="z-index: 0" v-else />
    <div
      class="welcome-step-1"
      :class="{
        showing: state.currentStep === 'step-1',
        'fade-out': state.currentStep !== 'step-1' && state.currentStep !== ''
      }"
    >
      <div class="bg"></div>
      <div class="bg-1"></div>
      <img
        src="../assets/images/image-welcome.png"
        alt="welcome"
        class="welcome-img"
        :class="{
          show: state.currentStep === 'step-1' && state.isLoading.length >= 2,
          hide: state.currentStep === ''
        }"
      />
    </div>
    <div
      :class="{ showed: state.currentStep === 'step-2' }"
      class="welcome-step-2"
    >
      <GreetingCard
        :lang="state.lang"
        @send="handleSend"
        :isLoading="isFetching"
        :class="{
          showing: state.currentStep === 'step-2-showing',
          showed: state.currentStep === 'step-2',
          collapsing: state.currentStep === 'step-2-collapsing'
        }"
      />
    </div>
    <div
      :class="{ showed: state.currentStep === 'step-3' }"
      class="welcome-step-3"
    >
      <Thankyou
        :lang="state.lang"
        @done="handleDone"
        :class="{
          showing: state.currentStep === 'step-3-showing',
          showed: state.currentStep === 'step-3',
          collapsing: state.currentStep === 'step-3-collapsing'
        }"
      />
    </div>
  </div>
</template>

<script>
import { computed, reactive, ref, watch } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { promiseTimeOut } from '../utils/promiseTimeOut';
import GreetingCard from '../components/GreetingCard.vue';
import Thankyou from '../components/Thankyou.vue';
import Decoration from '../components/Decoration.vue';
import Loading from '../components/Loading.vue';

export default {
  name: 'Welcome',
  components: { GreetingCard, Thankyou, Decoration, Loading },
  setup() {
    const state = reactive({
      currentStep: '',
      lang: '',
      isLoading: [],
      transitioning: false
    });
    const route = useRoute();
    const router = useRouter();

    const fetch = ref(false);

    route.path.startsWith('/id') ? (state.lang = 'id') : (state.lang = 'en');

    const isFetching = computed(() => fetch.value);

    watch(state.isLoading, async (isLoading, _prevLoading) => {
      if (isLoading.length >= 2) {
        state.currentStep = 'step-2-showing';
        await promiseTimeOut(300);
        state.currentStep = 'step-2';
      }
    });

    async function handleSend(name, message) {
      fetch.value = true;
      await runapi(name, message);
      fetch.value = false;

      state.currentStep = 'step-2-collapsing';
      await promiseTimeOut(1000);
      state.currentStep = 'step-3-showing';
      await promiseTimeOut(300);
      state.currentStep = 'step-3';
    }

    async function handleDone(_e) {
      state.currentStep = 'step-3-collapsing';
      await promiseTimeOut(500).then(async () => {
        state.currentStep = 'step-1';
        await promiseTimeOut(2000);
        state.currentStep = 'a';
        state.transitioning = true;
        await promiseTimeOut(1000);
        let lang;
        route.path.startsWith('/id') ? (lang = 'id') : (lang = 'en');
        router.push(`/${lang}/live-wedding`);
      });
    }

    async function handleLoad() {
      state.isLoading.push(true);
    }

    function runapi(name, message) {
      var theURL =
        'https://script.google.com/macros/s/AKfycbyvizGr77lzhWwPfgqOKK-KHwPxKbpx_5eQzfVJLA7dDq8ddtc/exec?sheet=pesan&nama=' +
        name +
        '&pesan=' +
        message;
      return new Promise(function(resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', theURL);
        xhr.onload = function() {
          if (this.status >= 200 && this.status < 300) {
            resolve(xhr.response);
          } else {
            reject({
              status: this.status,
              statusText: xhr.statusText
            });
          }
        };
        xhr.onerror = function() {
          reject({
            status: this.status,
            statusText: xhr.statusText
          });
        };
        xhr.send();
      });
    }

    return { state, handleSend, handleDone, handleLoad, isFetching };
  }
};
</script>

<style lang="scss" scoped>
@import '../scss/variables.scss';

.welcome {
  min-height: 100vh;
  min-height: -webkit-fill-available;
  background: $color-green-c;
}

.welcome-img {
  height: 90vh;
  width: auto;
  transition: transform 1s ease-out;

  @media only screen and (max-width: 28.125em) {
    height: 70vh;
  }

  &.hide {
    transform: scale(0);
  }

  &.show {
    transform: scale(1);
  }
}

.welcome-step-1 {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 9999;

  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;

  transition: opacity 1s ease-out, blur 1s 2s;

  &.fade-out {
    opacity: 0;
    filter: blur(20px);
    z-index: 0;
  }

  &.showing {
    opacity: 1;
  }

  .bg,
  .bg-1 {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
  }

  .bg {
    background-color: $color-orange-c;
    z-index: -2;
  }

  .bg-1 {
    background: radial-gradient(
      108.79% 108.79% at 51.91% 51.95%,
      #fafafa 36.46%,
      rgba(255, 255, 255, 0) 100%
    );
    z-index: -1;
  }
}

.welcome-step-1,
.welcome-step-2,
.welcome-step-3 {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;

  &.showed {
    z-index: 100;
  }
}

.welcome-step-2 {
  justify-content: center;
  align-items: center;
  display: flex;
}

.welcome-step-3 {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
