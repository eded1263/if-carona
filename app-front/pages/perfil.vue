<template>
  <div class="criar-carro">
    <DetalhesPerfilPage />
  </div>
</template>

<script>
import DetalhesPerfilPage from '@/components/usuarios/DetalhesPerfilPage.vue'
export default {
  components: { DetalhesPerfilPage },
  middleware: 'isLoggedIn',
  async fetch({ store }) {
    store.commit('layout/SET_BACK_BUTTON', true)
    return await store.dispatch('user/GET_CURRENT_USER')
  },
}
</script>

<style>
</style>