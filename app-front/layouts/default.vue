<template>
  <div>
    <div class="carona-container app">
      <RoundButton
        v-if="shouldShowBackButton"
        class="button"
        @click.native="goBack"
      >
        <v-icon dark>mdi-arrow-left</v-icon>
      </RoundButton>
      <Nuxt class="container" />
    </div>
  </div>
</template>

<script>
import RoundButton from '@/components/layout/RoundButton.vue'
export default {
  components: { RoundButton },
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
}
</style>