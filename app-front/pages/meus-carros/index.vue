<template>
  <div class="meus-carros">
    <MeusCarrosPage />
  </div>
</template>

<script>
import MeusCarrosPage from '@/components/meus-carros/MeusCarrosPage.vue'
export default {
  component: { MeusCarrosPage },
  middleware: 'isLoggedIn',
  fetch({ store }) {
    store.commit('layout/SET_BACK_BUTTON', true)
    return store.dispatch('carros/GET_CARROS')
  },
}
</script>

<style>
</style>