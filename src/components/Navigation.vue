<template>
  <nav class="nav-items">
    <div class="home-back">
      <router-link :to="`/${state.lang}/live-wedding`">
        <div
          :class="{ transparent: this.variant === 'transparent' }"
          class="nav-item"
        >
          <img
            v-if="this.variant === 'transparent'"
            src="../assets/icons/icon-home-grey.svg"
            alt="home"
          />
          <img v-else src="../assets/icons/icon-home.svg" alt="home" />
        </div>
      </router-link>
      <div
        v-if="!this.disableBack"
        @click="handleBack"
        :class="{ transparent: this.variant === 'transparent' }"
        class="back nav-item ml-1"
      >
        <img
          v-if="this.variant === 'transparent'"
          src="../assets/icons/icon-back-grey.svg"
          alt="back"
        />
        <img v-else src="../assets/icons/icon-back.svg" alt="back" />
      </div>
    </div>
    <div
      :class="{ transparent: this.variant === 'transparent' }"
      class="nav-item"
    >
      <img
        v-if="this.variant === 'transparent' && !isPlay"
        src="../assets/icons/icon-sound-off-grey.webp"
        alt="home"
        @click.prevent="this.playMusic"
      />
      <img
        v-else-if="!isPlay"
        src="../assets/icons/icon-sound-off.webp"
        alt="home"
        @click.prevent="this.playMusic"
      />
      <img
        v-else-if="isPlay && this.variant !== 'transparent'"
        src="../assets/icons/icon-sound-on.webp"
        alt="home"
        @click.prevent="this.stopMusic"
      />
      <img
        v-else
        src="../assets/icons/icon-sound-on-grey.webp"
        alt="sound-on"
        @click.prevent="this.stopMusic"
      />
      <div style="display: none">
        <vue-plyr ref="plyr">
          <div class="plyr__video-embed">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/5PJXAHzqr8U"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </vue-plyr>
      </div>
    </div>
  </nav>
</template>

<script>
import { computed, reactive } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import store from '../store';
import { promiseTimeOut } from '../utils/promiseTimeOut';

export default {
  name: 'Navigation',
  props: {
    variant: String,
    disableBack: {
      type: Boolean,
      default: false
    }
  },
  setup() {
    const state = reactive({ lang: '' });
    const route = useRoute();
    const router = useRouter();
    const isPlay = computed(() => store.state.isPlay);
    route.path.startsWith('/id') ? (state.lang = 'id') : (state.lang = 'en');

    function handleBack() {
      router.push(`/${state.lang}/gallery`);
    }

    return { state, isPlay, handleBack };
  },
  async mounted() {
    const iframe = document.getElementsByTagName('iframe');

    if (
      !(
        this.$route.path === `/${this.state.lang}/gallery` ||
        this.$route.path === `/${this.state.lang}/gallery/pre-wedding` ||
        this.$route.path === `/${this.state.lang}/gallery/pengajian` ||
        this.$route.path === `/${this.state.lang}/gallery/` ||
        this.$route.path === `/${this.state.lang}/gallery/pre-wedding/` ||
        this.$route.path === `/${this.state.lang}/gallery/pengajian/`
      ) &&
      iframe.length < 2
    ) {
      window.location.reload();
    } else if (iframe.length < 1) {
      window.location.reload();
    } else {
      await promiseTimeOut(1500);
      this.playMusic();
    }
  },
  methods: {
    playMusic() {
      this.$refs.plyr.player.play();
      store.dispatch('playMusic');
    },
    stopMusic() {
      this.$refs.plyr.player.stop();
      store.dispatch('stopMusic');
    }
  }
};
</script>

<style lang="scss" scoped>
@import '../scss/variables.scss';
.nav-items {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
  height: 8rem;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 9999;
}

.nav-item {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: $color-green-c;
  cursor: pointer;
  transform: scale(1);
  transition: all 0.3s;

  &.transparent {
    background: transparent;
  }

  &:hover {
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }

  img {
    height: 6rem;
  }
}

.home-back {
  display: flex;
  align-items: center;
}
</style>
