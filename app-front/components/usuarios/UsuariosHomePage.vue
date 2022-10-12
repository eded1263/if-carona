<template>
  <div class="home-page container">
    <CustomHeader page="Alunos" class="header" />
    <Menu :menu="getMenuItems()" class="menu" />
  </div>
</template>

<script>
import CustomHeader from '@/components/layout/CustomHeader.vue'
import Menu from '@/components/layout/Menu.vue'
export default {
  components: { CustomHeader, Menu },
  computed: {
    user() {
      return this.$store.state.user.currentUser
    },
  },
  methods: {
    getMenuItems() {
      return [
        {
          label: 'Listar alunos',
          to: 'usuarios-listagem',
        },
        {
          label: 'Adicionar Alunos',
          to: 'usuarios-novo',
          condition: this.user.isAdmin,
        },
      ]
    },
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