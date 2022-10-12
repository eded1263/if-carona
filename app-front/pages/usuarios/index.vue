<template>
  <div class="meus-carros">
    <UsuariosHomePage />
  </div>
</template>

<script>
import UsuariosHomePage from '@/components/usuarios/UsuariosHomePage.vue'
export default {
  component: { UsuariosHomePage },
  middleware: 'isAdmin',
  fetch({ store }) {
    store.commit('layout/SET_BACK_BUTTON', true)
  },
}
</script>

<style>
</style>