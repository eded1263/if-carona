<template>
  <div class="custom-header">
    <div class="titulos">
      <h1 class="titulo">Carona Estudantil</h1>
      <span class="subtitulo">{{ page }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    page: {
      type: String,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.custom-header {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding-bottom: 25px;
  color: $font-primary;
  > .titulos {
    text-align: center;
    > .titulo {
      font-size: 52px;
    }
    > .subtitulo {
      font-size: 24px;
    }
  }
}
</style>