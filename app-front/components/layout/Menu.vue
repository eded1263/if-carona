<template>
  <div class="menu-component">
    <v-row class="wrapper">
      <v-col
        v-for="(item, index) in menuItems"
        :key="index"
        sm="12"
        :class="['coluna']"
        @click="redirect(item)"
      >
        <nuxt-link ref="link" :to="{ name: item.to }" class="link" @click.stop>
          {{ item.label }}
        </nuxt-link>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  props: {
    menu: {
      type: Array,
      required: true,
    },
  },
  computed: {
    menuItems() {
      return this.menu.filter(
        (item) => item.condition === undefined || item.condition
      )
    },
  },
  methods: {
    redirect(item) {
      this.$router.push({
        name: item.to,
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.menu-component {
  > .wrapper {
    width: 60%;
    margin: 0 auto;
    > .coluna {
      > .link {
        text-decoration: none;
        color: $font-primary;
        font-weight: 600;
        font-size: 28px;
        height: 50px;
        border-radius: 5px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #fff;
      }
    }
  }
}
</style>