<template>
  <div class="criar-carro">
    <DetalhesUsuarioPage />
  </div>
</template>

<script>
import DetalhesUsuarioPage from '@/components/usuarios/DetalhesUsuarioPage.vue'
export default {
  components: { DetalhesUsuarioPage },
  fetch({ store }) {
    store.commit('layout/SET_BACK_BUTTON', true)
  },
}
</script>

<style>
</style>