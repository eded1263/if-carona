<template>
  <div :class="['back-button', `-${size}`]">
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    size: {
      type: String,
      default: 'small',
    },
  },
}
</script>

<style lang="scss" scoped>
.back-button {
  border-radius: 50%;
  background-color: $button;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &.-small {
    height: 50px;
    width: 50px;
  }
}
</style>