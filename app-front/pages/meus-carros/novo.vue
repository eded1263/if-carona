<template>
  <div class="criar-carro">
    <DetalhesCarroPage />
  </div>
</template>

<script>
import DetalhesCarroPage from '@/components/detalhes-carro/DetalhesCarroPage.vue'
export default {
  components: { DetalhesCarroPage },
  fetch({ store }) {
    store.commit('layout/SET_BACK_BUTTON', true)
  },
}
</script>

<style>
</style>