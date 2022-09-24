<template>
  <div class="loading-component">
    <v-progress-circular
      indeterminate
      color="primary"
      :size="80"
      :width="10"
    ></v-progress-circular>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.loading-component {
  position: absolute;
  height: 100vh;
  width: 100vw;
  left: 0;
  top: 0;
  background-color: #000000ca;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
}
</style>