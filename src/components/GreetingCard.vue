<template>
  <div class="greeting-card">
    <h1 class="mb-2">Dear Gamma & Alfarra</h1>
    <textarea
      :placeholder="state.multiLang[lang].textAreaPlaceHolder"
      class="lined-textarea text-1"
      name=""
      id="idpesan"
      v-model="state.message"
    ></textarea>
    <p>With Love</p>
    <Input
      class="mb-4 input-custom"
      :placeholder="state.multiLang[lang].placeholder"
      id="idnama"
      v-model="state.name"
    />
    <Button
      @click="handleClick"
      :isLoading="isLoading"
      class="btn--grey btn-custom"
      >{{ state.multiLang[lang].button }}</Button
    >
  </div>
</template>

<script>
import Input from './Input.vue';
import Button from './Button.vue';
import WelcomeMultiLang from '../json/Welcome.json';
import { reactive } from 'vue';

export default {
  name: 'GreetingCard',
  components: {
    Input,
    Button
  },
  props: {
    lang: String,
    isLoading: Boolean
  },
  setup(_props, ctx) {
    const state = reactive({
      multiLang: WelcomeMultiLang,
      name: '',
      message: ''
    });

    function handleClick() {
      ctx.emit('send', state.name, state.message);
    }

    return { handleClick, state };
  }
};
</script>

<style lang="scss" scoped>
@import '../scss/variables.scss';
.greeting-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f6f5f5;
  padding: 3rem 4rem;
  width: 80%;
  height: 90%;
  border-radius: 0.625rem;
  box-shadow: 0 0.625rem 1.125rem rgba(0, 0, 0, 0.15);
  display: none;
  transform: scale(0);
  transition: transform 0.5s 0.5s;

  @media only screen and (max-width: 90em) and (orientation: landscape) {
    padding: 2rem 4rem;
  }

  @media only screen and (orientation: portrait) {
    overflow: auto;
  }

  @media only screen and (max-width: 28.125em) {
    height: 100%;
    width: 100%;
  }

  &.showing {
    display: unset;
    transition: transform 0.5s;
  }

  &.showed {
    display: flex;
    transform: scale(1);
  }

  &.collapsing {
    display: flex;
    transition: transform 0.5s;
    transform: scale(0);
  }
}

.input-custom {
  font-size: 1.5rem;
  min-width: 25rem;

  @media only screen and (max-width: 90em) and (orientation: landscape) {
    margin-bottom: 2rem;
    padding: 0.5rem;
  }
}

.btn-custom {
  background: #f6f5f5;
  box-shadow: 0px -3px 6px 6px #fefdfc, 3px 4px 10px 5px #e0d1d1;
  color: $color-green-a;
  font-weight: 700;
  width: 17rem;
}

.lined-textarea {
  align-self: flex-start;
  display: block;
  width: 100%;
  padding: 2px 0;
  resize: none;
  line-height: 40px;
  background-image: linear-gradient($color-black-4 1px, #f6f5f5 1px);
  background-size: 100% 40px;
  border: 0;
  outline: 0;
  font-weight: 400;
  margin-bottom: 2rem;
  height: 100%;

  &::placeholder {
    color: $color-green-b;
  }

  @media only screen and (max-width: 90em) and (orientation: landscape) {
    margin-bottom: 1rem;
    line-height: 30px;
    background-size: 100% 30px;
    font-size: 1.6rem;
  }

  @media only screen and (orientation: portrait) {
    min-height: 205px;
  }
}

h1 {
  font-family: 'Alex Brush', cursive;
  font-size: 4.75rem;
  font-weight: 400;
  align-self: flex-start;
  letter-spacing: 2px;

  @media only screen and (max-width: 90em) and (orientation: landscape) {
    font-size: 4rem;
    margin-bottom: 0;
  }

  @media only screen and (max-width: 28.125em) {
    font-size: 3.5rem;
    line-height: 1.2;
    margin-bottom: 4rem;
  }
}

p {
  font-family: 'Dawning of a New Day', sans-serif;
  font-size: 3rem;
  font-weight: 400;

  @media only screen and (max-width: 90em) and (orientation: landscape) {
    font-size: 2.5rem;
  }
}
</style>
