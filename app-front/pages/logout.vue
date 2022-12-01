<template><div /></template>

<script lang="js">
import {resetAuthToken} from '~/utils/auth'
export default {
  created(){
    resetAuthToken();
    this.$store.commit("user/SET_CURRENT_USER", {})
    this.$router.push({name: 'index'})
  }
}
</script>

<style>
</style>