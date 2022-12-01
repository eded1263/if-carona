<template>
  <div>
    <LoginPage />
  </div>
</template>

<script>
import LoginPage from '@/components/login/LoginPage.vue'
export default {
  components: { LoginPage },
  fetch({ store, redirect }) {
    if (store.state.user.currentUser?.id) {
      redirect('/home')
    }
  },
}
</script>

<style>
</style>