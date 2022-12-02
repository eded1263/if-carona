<template>
  <div class="caronas-disponiveis">
    <CustomHeader page="Caronas" class="header" />
    <div class="carros">
      <p v-if="totalDeCarros <= 0" class="empty">Não há caronas disponíveis</p>
      <div v-else class="lista">
        <CardCarro
          v-for="carro in carros"
          :key="carro.id"
          :carro="carro"
          class="caronas"
        />
      </div>
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
import CardCarro from '@/components/meus-carros/CardCarro.vue'
export default {
  components: { CustomHeader, CircleButton, CardCarro },
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
.caronas-disponiveis {
  padding: 0;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  > .header {
    flex: 1;
  }
  > .caronas {
    flex: 2;
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