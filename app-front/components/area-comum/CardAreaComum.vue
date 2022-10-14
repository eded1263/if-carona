<template>
  <div class="card-area-comum">
    <div class="descricao">
      <span class="area"> {{ areaComum.nome }}</span>
    </div>
    <div class="info">
      <span class="lat"> Latitude: {{ areaComum.latitude }} </span>
      <span class="long"> Longitude: {{ areaComum.longitude }} </span>
    </div>
    <div class="action">
      <RoundButton
        class="button"
        size="short-rounded"
        @click.native="detalhesAreaComum"
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
    areaComum: {
      type: Object,
      required: true,
    },
  },
  methods: {
    detalhesAreaComum() {
      this.$router.push({
        name: 'area-comum-id',
        params: {
          id: this.areaComum.id,
        },
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.card-area-comum {
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