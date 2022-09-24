<template>
  <div class="custom-input">
    <v-text-field
      v-model="inputValue"
      :prefix="prefix"
      background-color="#fff"
      color="#AD9049"
      solo
      flat
      filled
      dense
      class="input"
      :rules="rules"
    />
  </div>
</template>

<script>
export default {
  props: {
    prefix: {
      type: String,
      required: true,
    },
    value: {
      type: String,
      required: true,
    },
    rules: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    inputValue: {
      get() {
        return this.value
      },
      set(newValue) {
        this.$emit('update:value', newValue)
      },
    },
  },
}
</script>

<style lang="scss" scoped>
.custom-input {
  > .input {
    & .v-text-field {
      color: $font-primary !important;
    }
  }
}
</style>
<style lang="scss">
.v-text-field__prefix {
  color: $font-primary;
  font-weight: 600;
}
.v-input input {
  color: $font-primary !important;
}
</style>