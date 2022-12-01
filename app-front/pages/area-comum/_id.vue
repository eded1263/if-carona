<template>
  <div class="criar-carro">
    <DetalhesAreaComumPage :is-update="true" />
  </div>
</template>

<script>
import DetalhesAreaComumPage from '@/components/area-comum/DetalhesAreaComumPage.vue'
export default {
  components: { DetalhesAreaComumPage },
  middleware: 'isLoggedIn',
  fetch({ store, route }) {
    store.commit('layout/SET_BACK_BUTTON', true)
    return store.dispatch('area-comum/GET_AREA_COMUM', route.params.id)
  },
}
</script>

<style>
</style>