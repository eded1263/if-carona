<template>
  <div class="home-page container">
    <CustomHeader page="Home" class="header" />
    <Menu :menu="menuItems" class="menu" />
  </div>
</template>

<script>
import CustomHeader from '@/components/layout/CustomHeader.vue'
import Menu from '@/components/layout/Menu.vue'
export default {
  components: { CustomHeader, Menu },
  data() {
    return {
      menuItems: [
        {
          label: 'Meus Carros',
          to: 'meus-carros',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.home-page {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .header {
    flex: 1;
  }
  .menu {
    flex: 2;
    width: 100%;
  }
}
</style>