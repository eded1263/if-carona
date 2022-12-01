<template>
  <div class="criar-carro">
    <DetalhesCarroPage :is-update="true" />
  </div>
</template>

<script>
import DetalhesCarroPage from '@/components/detalhes-carro/DetalhesCarroPage.vue'
export default {
  components: { DetalhesCarroPage },
  middleware: 'isLoggedIn',
  fetch({ store, route }) {
    store.commit('layout/SET_BACK_BUTTON', true)
    return store.dispatch('carros/GET_CARRO', route.params.id)
  },
}
</script>

<style>
</style>