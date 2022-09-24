<template>
  <div class="meus-carros">
    <CustomHeader page="Meus Carros" class="header" />
    <div class="carros">
      <p v-if="totalDeCarros <= 0" class="empty">
        Você não possui carros cadastrados
      </p>
      <div v-else class="lista"></div>
    </div>
    <div class="botao">
      <CircleButton @click.native="redirect({ name: 'meus-carros-novo' })">
        <v-icon dark> mdi-plus </v-icon>
      </CircleButton>
    </div>
  </div>
</template>

<script>
import CustomHeader from '@/components/layout/CustomHeader.vue'
import CircleButton from '@/components/layout/CircleButton.vue'
export default {
  components: { CustomHeader, CircleButton },
  computed: {
    totalDeCarros() {
      return this.$store.state.carros.total
    },
    carros() {
      return this.$store.state.carros.carros
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
.meus-carros {
  padding: 0;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  > .header {
    flex: 1;
  }
  > .carros {
    flex: 2;
    > .empty {
      color: $font-primary;
      font-size: 20px;
    }
  }

  > .botao {
    position: fixed;
    bottom: 25px;
    right: 25px;
  }
}
</style>