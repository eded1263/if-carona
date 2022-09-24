<template>
  <div>
    <div class="carona-container app">
      <CircleButton
        v-if="shouldShowBackButton"
        class="button"
        @click.native="goBack"
      >
        <v-icon dark>mdi-arrow-left</v-icon>
      </CircleButton>
      <Nuxt class="children" />
    </div>
  </div>
</template>

<script>
import CircleButton from '@/components/layout/CircleButton.vue'
export default {
  components: { CircleButton },
  computed: {
    shouldShowBackButton() {
      return this.$store.state.layout.shouldShowBackButton
    },
  },
  methods: {
    goBack() {
      this.$store.commit('layout/SET_BACK_BUTTON', false)
      this.$router.go(-1)
    },
  },
}
</script>

<style lang="scss" scoped>
.carona-container {
  background-color: $primary;
  &.app {
    height: 100vh;
    width: 100vw;
    position: relative;
  }

  > .button {
    position: absolute;
    top: 25px;
    left: 25px;
  }
  > .children {
    padding: 0 25px;
  }
}
</style>

<style lang="scss">
@import '@/assets/global.scss';
* {
  box-sizing: border-box;
}
</style>