<template>
  <div class="criar-carro">
    <DetalhesUsuarioPage :is-update="true" />
  </div>
</template>

<script>
import DetalhesUsuarioPage from '@/components/usuarios/DetalhesUsuarioPage.vue'
export default {
  components: { DetalhesUsuarioPage },
  middleware: 'isLoggedIn',
  fetch({ store, route }) {
    store.commit('layout/SET_BACK_BUTTON', true)
    return store.dispatch('user/GET_USER', route.params.id)
  },
}
</script>

<style>
</style>