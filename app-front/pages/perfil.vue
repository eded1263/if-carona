<template>
  <div class="criar-carro">
    <DetalhesPerfilPage />
  </div>
</template>

<script>
import DetalhesPerfilPage from '@/components/usuarios/DetalhesPerfilPage.vue'
export default {
  components: { DetalhesPerfilPage },
  fetch({ store }) {
    store.commit('layout/SET_BACK_BUTTON', true)
  },
}
</script>

<style>
</style>