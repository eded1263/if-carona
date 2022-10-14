<template>
  <div class="listagem-area-comum">
    <CustomHeader page="Listagem de Áreas comuns" class="header" />
    <div :class="['area', { '-not-empty': state.total > 0 }]">
      <p v-if="state.total <= 0" class="empty">
        Não há Áreas comuns cadastradas.
      </p>
      <div v-else class="lista">
        <CardAreaComum
          v-for="areaComum in state.areasComuns"
          :key="areaComum.id"
          :area-comum="areaComum"
          class="areaComum"
        />
      </div>
    </div>
    <div class="botao">
      <CircleButton @click.native="redirect({ name: 'area-comum-novo' })">
        <v-icon dark> mdi-plus </v-icon>
      </CircleButton>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import CustomHeader from '@/components/layout/CustomHeader.vue'
import CircleButton from '@/components/layout/CircleButton.vue'
import CardAreaComum from '@/components/area-comum/CardAreaComum.vue'
export default {
  components: { CustomHeader, CircleButton, CardAreaComum },
  computed: {
    ...mapState({
      state: 'area-comum',
    }),
  },
  methods: {
    redirect(route) {
      this.$router.push(route)
    },
  },
}
</script>

<style lang="scss" scoped>
.listagem-area-comum {
  padding: 0;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  > .header {
    flex: 1;
  }
  > .area {
    flex: 2;

    & .not-empty {
      width: 90%;
    }
    > .empty {
      color: $font-primary;
      font-size: 20px;
    }
    > .lista {
      display: flex;
      width: 100%;
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