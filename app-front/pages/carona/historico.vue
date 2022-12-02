<template>
  <div class="carona-historico"><CaronaHistoricoPage /></div>
</template>

<script>
import CaronaHistoricoPage from '@/components/carona/CaronaHistoricoPage.vue'
export default {
  components: { CaronaHistoricoPage },
  middleware: 'isLoggedIn',
}
</script>

<style>
</style>