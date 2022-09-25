<template>
  <button :class="['round-button', `-${size}`]" :type="type">
    <slot />
  </button>
</template>

<script>
export default {
  props: {
    size: {
      type: String,
      default: 'small',
    },
    type: {
      type: String,
      default: 'button',
    },
  },
}
</script>

<style lang="scss" scoped>
.round-button {
  border-radius: 5px;
  background-color: $button;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #fff;
  font-size: 20px;
  font-weight: 600;
  height: 50px;

  &.-long {
    width: 100%;
  }

  &.-short-rounded {
    height: 30px;
    border-radius: 15px;
    font-size: 16px;
    padding: 0 15px;
  }
}
</style>