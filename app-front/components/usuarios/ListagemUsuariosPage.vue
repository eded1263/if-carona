<template>
  <div class="listagem-usuarios">
    <CustomHeader page="Listagem de usuários" class="header" />
    <div class="usuarios">
      <p v-if="total <= 0" class="empty">Não há usuários além de você.</p>
      <div v-else class="lista">
        <CardUser
          v-for="user in users"
          :key="user.id"
          :user="user"
          class="user"
        />
      </div>
    </div>
    <div class="botao">
      <CircleButton @click.native="redirect({ name: 'usuarios-novo' })">
        <v-icon dark> mdi-plus </v-icon>
      </CircleButton>
    </div>
  </div>
</template>

<script>
import CustomHeader from '@/components/layout/CustomHeader.vue'
import CircleButton from '@/components/layout/CircleButton.vue'
import CardUser from '@/components/usuarios/CardUser.vue'
export default {
  name: 'ListagemUsuariosPage',
  components: { CustomHeader, CircleButton, CardUser },
  computed: {
    total() {
      return this.$store.state.user.total
    },
    users() {
      return this.$store.state.user.users
    },
  },
  methods: {
    redirect(route) {
      this.$router.push(route)
    },
  },
}
</script>

<style lang="scss" scoped>
.listagem-usuarios {
  padding: 0;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  > .header {
    flex: 1;
  }
  > .usuarios {
    flex: 2;
    width: 90%;
    > .empty {
      color: $font-primary;
      font-size: 20px;
    }
    > .lista {
      display: flex;
      max-width: 100%;
      flex-wrap: wrap;
      justify-content: center;
      gap: 10px;
      padding-bottom: 20px;
    }
  }

  > .botao {
    position: fixed;
    bottom: 25px;
    right: 25px;
  }
}
</style>