<template>
  <div class="card-user">
    <div class="descricao">
      <span class="user"> {{ user.nome }}, RA: {{ user.RA }} </span>
    </div>
    <div class="info">
      <span class="cpf"> CPF: {{ user.cpf }} </span>
      <span class="email"> Email: {{ user.email }} </span>
    </div>
    <div class="action">
      <RoundButton
        class="button"
        size="short-rounded"
        @click.native="detalhesUsuario"
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
    user: {
      type: Object,
      required: true,
    },
  },
  methods: {
    detalhesUsuario() {
      this.$router.push({
        name: 'usuarios-id',
        params: {
          id: this.user.id,
        },
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.card-user {
  background-color: #fff;
  color: $font-primary;
  display: grid;
  grid-template-rows: 30px 30px 30px;
  border-radius: 15px;
  padding: 20px;
  > .descricao {
    font-weight: 600;
  }
  > .action {
    width: 100%;
    > .button {
      margin: 0 auto;
    }
  }
}
</style>