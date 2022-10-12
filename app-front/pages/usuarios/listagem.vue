<template>
  <div class="listagem-usuarios">
    <ListagemUsuariosPage />
  </div>
</template>

<script>
import ListagemUsuariosPage from '@/components/usuarios/ListagemUsuariosPage.vue'
export default {
  components: { ListagemUsuariosPage },
  fetch({ store }) {
    store.commit('layout/SET_BACK_BUTTON', true)
    return store.dispatch('user/GET_USERS')
  },
}
</script>

<style lang="scss" scoped>
</style>