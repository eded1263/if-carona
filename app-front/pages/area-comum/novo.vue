<template>
  <div class="criar-carro">
    <DetalhesAreaComumPage />
  </div>
</template>

<script>
import DetalhesAreaComumPage from '@/components/area-comum/DetalhesAreaComumPage.vue'
export default {
  components: { DetalhesAreaComumPage },
  middleware: 'isLoggedIn',
  fetch({ store }) {
    store.commit('layout/SET_BACK_BUTTON', true)
  },
}
</script>

<style>
</style>