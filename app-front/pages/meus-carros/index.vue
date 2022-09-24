<template>
  <div class="meus-carros">Meus Carros</div>
</template>

<script>
export default {
  created() {
    this.$store.commit('layout/SET_BACK_BUTTON', true)
  },
}
</script>

<style>
</style>