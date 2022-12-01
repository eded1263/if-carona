<template>
  <div class="home-page">
    <HomePage />
  </div>
</template>

<script>
import HomePage from '@/components/home/HomePage.vue'
export default {
  components: { HomePage },
  middleware: 'isLoggedIn',
}
</script>

<style>
</style>