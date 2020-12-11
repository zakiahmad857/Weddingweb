<template>
  <div class="tooltip__overlay"></div>
  <div id="tooltip" class="tooltip" :class="this.position">
    <img
      @click.prevent="handleClose"
      src="../assets/icons/icon-close.svg"
      class="tooltip__close"
    />
    <h1 class="tooltip__header heading-1 mb-1">{{ header }}</h1>
    <p class="tooltip__content text-3 mb-3">{{ content }}</p>
    <div class="tooltip__step">
      {{ lang === 'id' ? 'Langkah' : 'Step' }} {{ currentStep + 1 }}
      {{ lang === 'id' ? 'dari' : 'from' }} {{ lastStep }}
    </div>
    <div class="tooltip__buttons">
      <div
        @click.prevent="handleBack"
        v-if="currentStep > 0"
        class="tooltip__back"
      >
        <img src="../assets/icons/icon-chevron-left.svg" alt="back" />
      </div>
      <Button
        v-if="lang === 'id'"
        @click.prevent="handleNext"
        class="tooltip__btn"
        >{{ currentStep + 1 === lastStep ? 'Selesai' : 'Lanjut' }}</Button
      >
      <Button v-else @click.prevent="this.handleNext" class="tooltip__btn">{{
        currentStep + 1 === lastStep ? 'Finish' : 'Next'
      }}</Button>
    </div>
  </div>
</template>

<script>
import { createPopper } from '@popperjs/core';
import Button from './Button.vue';

export default {
  components: { Button },
  name: 'tooltip',
  props: {
    target: String,
    currentStep: Number,
    lastStep: Number,
    header: String,
    content: String,
    position: String,
    modifiers: {
      type: Array,
      required: false
    },
    lang: String
  },
  setup(_props, ctx) {
    function handleNext(e) {
      ctx.emit('next', e);
    }

    function handleClose(e) {
      ctx.emit('close', e);
    }
    function handleBack(e) {
      ctx.emit('back', e);
    }

    return { handleNext, handleClose, handleBack };
  },
  data() {
    return {
      initialPopperZ: 0
    };
  },
  methods: {
    createStep() {
      const popper = document.querySelector(this.target);
      const tooltip = document.querySelector('#tooltip');
      this.initialPopperZ = popper.style.zIndex;
      popper.style.zIndex = '1050';

      const options = {
        placement: this.position,
        modifiers: this.modifiers || []
      };

      createPopper(popper, tooltip, options);
    }
  },
  mounted() {
    this.createStep();
  },
  unmounted() {
    const popper = document.querySelector(this.target);
    popper.style.zIndex = this.initialPopperZ;
  }
};
</script>

<style lang="scss" scoped>
@import '../scss/variables.scss';

.tooltip {
  padding: 2rem 1rem;
  padding-top: 1rem;
  background-color: $color-green-c;
  border-radius: 1rem;
  max-width: 28rem;
  position: relative;
  z-index: 1100;

  &.bottom {
    &:before {
      left: 50%;
      top: -1.6rem;
      transform: rotate(90deg) translateX(-50%);
    }
  }

  &.bottom-end {
    &:before {
      right: 10%;
      top: -2rem;
      transform: rotate(90deg);
    }
  }

  &.top-end {
    &::before {
      left: 10%;
      bottom: -2rem;
      transform: rotate(-90deg);
    }
  }

  &.top {
    &::before {
      left: 50%;
      bottom: -1.6rem;
      transform: rotate(-90deg) translateX(-50%);
    }
  }

  &.top-start {
    &::before {
      right: 10%;
      bottom: -2rem;
      transform: rotate(-90deg);
    }
  }

  &:before {
    content: '\A';
    border-style: solid;
    border-width: 2rem 2rem 2rem 0;
    border-color: transparent $color-green-c transparent transparent;
    position: absolute;
  }

  &__overlay {
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: rgba(0, 0, 0, 0.5);
    z-index: 999;
  }

  &__close {
    position: absolute;
    top: 1.5rem;
    right: 1.5rem;
    height: 1.5rem;
    cursor: pointer;
  }

  &__header {
    color: $color-blue;
    font-size: 2rem;
  }

  &__step {
    position: absolute;
    bottom: 2.5rem;
    left: 1rem;
  }

  &__back {
    margin-right: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    box-shadow: -1px -3px 6px 6px #f8f3ed, 3px 4px 10px 5px #c1aa94;
    background: #ede6dc;
    border: 1px solid #ede6dc;
    height: 2.5rem;
    width: 2.5rem;
    cursor: pointer;
    user-select: none;

    &:active {
      box-shadow: inset 0px -3px 7px 2px #f8f3ed, inset 3px 4px 9px 2px #c1aa94;
    }
  }

  &__content {
    font-size: 1.2rem;
  }

  &__btn {
    font-size: 1rem;
    min-width: 9rem;
    font-weight: 700;
    padding: 0.5rem;
    margin-right: 0.5rem;
  }

  &__buttons {
    margin-left: auto;
    width: fit-content;
    display: flex;
    align-items: center;
  }
}
</style>
