<template>
  <div class="tour">
    <div v-for="(step, i) in usedSteps" :key="step.target">
      <tooltip
        :lang="lang"
        v-if="state.currentStep === i"
        :content="step.content"
        :header="step.header"
        :currentStep="state.currentStep"
        :lastStep="usedSteps.length"
        :target="step.target"
        :modifiers="step.modifiers"
        :position="step.position"
        @close="handleClose"
        @next="handleNext"
        @back="handleBack"
      />
    </div>
  </div>
</template>

<script>
import { computed, reactive } from 'vue';
import Cookies from 'js-cookie';
import Tooltip from './Tooltip.vue';
import { isMobile } from '../utils/isMobile';

export default {
  components: { Tooltip },
  name: 'tour',
  props: {
    steps: Array,
    lang: String,
    stepsMobile: {
      type: Array,
      default: () => []
    }
  },
  setup(props, _ctx) {
    const state = reactive({
      currentStep: -1
    });

    const usedSteps = computed(() =>
      props.stepsMobile.length > 0 && isMobile()
        ? props.stepsMobile
        : props.steps
    );

    function handleClose() {
      state.currentStep = -1;
      const cookie = Cookies.get('isFinishedTutorial');
      if (!cookie) {
        Cookies.set('isFinishedTutorial', true);
      }
    }

    function handleNext() {
      if (state.currentStep < props.steps.length - 1) state.currentStep++;
      else {
        state.currentStep = -1;
        const cookie = Cookies.get('isFinishedTutorial');
        if (!cookie) {
          Cookies.set('isFinishedTutorial', true);
        }
      }
    }

    function handleBack() {
      state.currentStep--;
    }

    function start() {
      state.currentStep = 0;
    }

    return { state, handleClose, handleNext, handleBack, start, usedSteps };
  }
};
</script>

<style></style>
