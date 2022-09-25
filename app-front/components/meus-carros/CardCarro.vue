<template>
  <div class="card-carro">
    <div class="descricao">
      <span class="carro"> {{ carro.modelo }}, {{ carro.cor }} </span>
    </div>
    <div class="info">
      <span class="ano"> Ano: {{ carro.ano }} </span>
      <span class="placa"> Placa: {{ carro.placa }} </span>
    </div>
    <div class="action">
      <RoundButton
        class="button"
        size="short-rounded"
        @click.native="detalhesCarro"
      >
        Detalhes
      </RoundButton>
    </div>
  </div>
</template>

<script>
import RoundButton from '../layout/RoundButton.vue'
export default {
  components: { RoundButton },
  props: {
    carro: {
      type: Object,
      required: true,
    },
  },
  methods: {
    detalhesCarro() {
      this.$router.push({
        name: 'meus-carros-id',
        params: {
          id: this.carro.id,
        },
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.card-carro {
  background-color: #fff;
  color: $font-primary;
  display: grid;
  grid-template-rows: 30px 30px 30px;
  justify-content: space-between;
  border-radius: 15px;
  padding: 20px;
  > .descricao {
    font-weight: 600;
  }
  > .action {
    > .button {
      margin: 0 auto;
    }
  }
}
</style>