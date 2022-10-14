<template>
  <div class="listagem-usuarios">
    <ListagemAreaComumPage />
  </div>
</template>

<script>
import ListagemAreaComumPage from '@/components/area-comum/ListagemAreaComumPage.vue'
export default {
  components: { ListagemAreaComumPage },
  middleware: 'isAdmin',
  fetch({ store }) {
    store.commit('layout/SET_BACK_BUTTON', true)
    return store.dispatch('area-comum/GET_AREAS_COMUNS')
  },
}
</script>

<style lang="scss" scoped>
</style>