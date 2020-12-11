<template>
  <div class="amplop">
    <div :class="{ showed: state.messageStatus }" class="success">
      Text Copied!
    </div>
    <img
      @click="handleClose"
      src="../assets/icons/icon-close.svg"
      alt="close"
      class="ic-close"
    />
    <div class="bg-top">
      <img src="../assets/images/bg-amplop-top.png" alt="" />
    </div>
    <div class="bg-bottom">
      <img src="../assets/images/bg-amplop-bottom.png" alt="" />
    </div>
    <h1 class="heading-0 mb-1">E-AMPLOP</h1>
    <p class="text-2">
      {{ state.multiLang[lang].desc }}
    </p>
    <div class="amplop__items mb-2">
      <div class="amplop__item">
        <span class="item-number">1.</span>
        <p class="text-3 mb-1">
          {{ lang === 'id' ? 'Kirim' : 'Send' }} via <strong>OVO</strong>
        </p>
        <img src="../assets/images/qr-ovo.png" alt="qr-ovo" />
        <p class="text-3 sm center">Phone Number +62877 0001 1296</p>
        <p class="text-3 sm center">Account Name Alfarra Haryono</p>
        <button @click.prevent="handleCopy($event, '088976512')" class="copy">
          Copy
        </button>
      </div>
      <div class="amplop__item">
        <span class="item-number">2.</span>

        <p class="text-3 mb-1">
          {{ lang === 'id' ? 'Kirim' : 'Send' }} via <strong>BCA</strong>
        </p>
        <img src="../assets/images/qr-bca.png" alt="qr-bca" />
        <p class="text-3 sm center">Bank Account 3190158933</p>
        <p class="text-3 sm center">Account Name Gammaditya<br/>Adhibarata Winarno</p>
        <button @click.prevent="handleCopy($event, '088976512')" class="copy">
          Copy
        </button>
      </div>
      <div class="amplop__item">
        <span class="item-number">3.</span>
        <p class="text-3 mb-1">
          {{ lang === 'id' ? 'Kirim' : 'Send' }} via <strong>Mandiri</strong>
        </p>
        <img src="../assets/images/qr-mandiri.png" alt="qr-mandiri" />
        <p class="text-3 sm center">Bank Account 9000033446627</p>
        <p class="text-3 sm center">Account Name Gammaditya<br/>Adhibarata Winarno</p>
        <button @click.prevent="handleCopy($event, '088976512')" class="copy">
          Copy
        </button>
      </div>
    </div>
    <p class="text-2 text-2--kado">
      {{ state.multiLang[lang].footer }}
    </p>
    <p class="text-3 sm">
      Jl. Mawar no 26 Komp.deplu <br />
      Pondok Aren, Tangerang Selatan 15225
    </p>
  </div>
</template>

<script>
import { reactive } from 'vue';
import AmplopMultiLang from '../json/E-Amplop.json';

export default {
  name: 'Amplop',
  props: {
    lang: String
  },
  setup(_props, ctx) {
    const state = reactive({
      multiLang: AmplopMultiLang,
      messageStatus: false
    });

    async function handleCopy(_event, text) {
      try {
        await navigator.clipboard.writeText(text);
        state.messageStatus = true;

        setTimeout(() => {
          state.messageStatus = false;
        }, 2000);
      } catch (error) {
        console.error(error);
      }
    }

    function handleClose(e) {
      ctx.emit('close', e);
    }

    return { handleClose, state, handleCopy };
  }
};
</script>

<style lang="scss" scoped>
@import '../scss/variables.scss';

.success {
  position: fixed;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%) translateY(4rem);
  background: $color-blue-b;
  padding: 1rem 2rem;
  border-radius: 5px;
  color: white;
  font-size: 1.6rem;
  width: 80%;
  text-align: center;
  opacity: 0;
  transition: all 0.4s;

  &.showed {
    opacity: 1;
    transform: translateX(-50%) translateY(0);
  }
}

.ic-close {
  position: absolute;
  top: 2rem;
  right: 2rem;
  cursor: pointer;
}

.amplop {
  width: 80%;
  height: 90%;
  background-color: $color-green-c;
  padding: 1rem 10rem;
  position: relative;
  z-index: 999;
  border-radius: 1.2rem;
  overflow: hidden;

  @media only screen and (max-width: 64em) {
    padding: 1rem 3rem;
  }

  @media only screen and (max-width: 28.175em) {
    width: 100%;
    height: 100%;
    padding: 1rem 2rem;
  }

  &__items {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: center;
    justify-items: center;
    margin-top: 1rem;
    border-bottom: 1px solid $color-green-a;
    padding-bottom: 2rem;
    gap: 0 3rem;

    @media only screen and (max-width: 90em) and (orientation: landscape) {
      padding-bottom: 1rem;
      margin-bottom: 1rem;
    }

    @media only screen and (max-width: 28.175em) {
      grid-template-columns: 1fr;
      justify-items: flex-start;
      padding: 0 2rem;
    }
  }

  &__item {
    position: relative;

    @media only screen and (max-width: 28.175em) {
      margin-bottom: 2rem;
      width: 100%;
    }

    .copy {
      display: none;
      @media only screen and (max-width: 28.175em) {
        display: block;
        position: absolute;
        right: 0;
        top: 30%;
        background: white;
        font-size: 1.2rem;
        padding: 0.5rem 1rem;
        border-radius: 3px;
        border: 1px solid $color-black-1;
        outline: none;
        transform: scale(1);

        &:active {
          transform: scale(0.95);
        }
      }
    }

    img {
      height: 11rem;

      @media only screen and (max-width: 90em) and (orientation: landscape) {
        height: 9rem;
      }

      @media only screen and (max-width: 64em) {
        height: 7rem;
      }

      @media only screen and (max-width: 28.175em) {
        display: none;
      }
    }
  }
}

.bg-top,
.bg-bottom {
  position: absolute;
  z-index: -1;

  img {
    height: 12.5rem;
  }
}

.bg-bottom {
  bottom: -1rem;
  right: 0;
}

.bg-top {
  top: -1rem;
  left: 0;
}

.heading-0 {
  color: $color-blue;
  text-align: center;
  font-size: 5rem;

  @media only screen and (max-width: 90em) and (orientation: landscape) {
    font-size: 3.5rem;
  }

  @media only screen and (max-width: 28.175em) {
    font-size: 3.5rem;
    text-align: left;
    margin-top: 8rem;
  }

  @media only screen and (max-width: 20em) {
    margin-top: 3rem;
  }
}

.text-2 {
  width: 70%;
  margin: 0 auto;
  text-align: center;
  color: $color-blue-b;
  line-height: 1.2;
  font-size: 1.7rem;

  @media only screen and (max-width: 90em) and (orientation: landscape) {
    font-size: 1.4rem;
  }

  @media only screen and (max-width: 28.175em) {
    text-align: left;
    width: 100%;
  }

  &--kado {
    text-align: left;
    width: 100%;
  }
}

.text-3 {
  color: $color-blue-b;

  &.center {
    text-align: center;

    @media only screen and (max-width: 28.175em) {
      text-align: left;
    }
  }

  &.sm {
    font-size: 1.2rem;
    color: $color-orange;

    @media only screen and (max-width: 90em) and (orientation: landscape) {
      font-size: 1rem;
    }
  }
}

.item-number {
  font-family: Bigilla;
  position: absolute;
  left: -2rem;
  top: -10px;
  font-size: 2.4rem;
  color: $color-green-a;
}
</style>
