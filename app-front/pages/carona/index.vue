<template>
  <div class="carona-index">
    <CaronaPage />
  </div>
</template>

<script>
import CaronaPage from '@/components/carona/CaronaPage.vue'
export default {
  components: { CaronaPage },
  middleware: 'isLoggedIn',
}
</script>

<style>
</style>