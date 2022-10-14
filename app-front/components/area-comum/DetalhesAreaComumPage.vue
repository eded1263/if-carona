<template>
  <div class="detalhes-area-comum">
    <transition name="fade">
      <Loading v-if="state.isLoading" />
    </transition>
    <CustomHeader
      :page="isUpdate ? 'Dados da Área Comum' : 'Cadastrar nova área'"
      class="header"
    />
    <v-form ref="form" class="formulario" @submit.prevent="submitForm">
      <v-row>
        <v-col sm="12" md="6" class="custom">
          <CustomInput
            prefix="Longitude:"
            :value.sync="form.longitude"
            :readonly="isUpdate"
            :rules="[rules.required]"
          />
        </v-col>
        <v-col sm="12" md="6" class="custom">
          <CustomInput
            prefix="Latitude:"
            :readonly="isUpdate"
            :value.sync="form.latitude"
            :rules="[rules.required]"
          />
        </v-col>
      </v-row>
      <v-row>
        <v-col sm="12" class="custom">
          <CustomInput
            prefix="Nome da área comum:"
            :value.sync="form.nome"
            :rules="[rules.required]"
          />
        </v-col>
      </v-row>
      <v-row>
        <v-col sm="12" md="6" class="custom">
          <RoundButton
            :type="isUpdate ? 'button' : 'reset'"
            size="long"
            @click.native="excluirUser"
          >
            {{ isUpdate ? 'Excluir' : 'Apagar' }}
          </RoundButton>
        </v-col>
        <v-col sm="12" md="6" class="custom">
          <RoundButton type="submit" size="long"> Salvar </RoundButton>
        </v-col>
      </v-row>
    </v-form>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Loading from '@/components/layout/Loading.vue'
import CustomHeader from '@/components/layout/CustomHeader.vue'
import CustomInput from '@/components/form/CustomInput.vue'
import RoundButton from '@/components/layout/RoundButton.vue'
export default {
  components: { CustomHeader, CustomInput, RoundButton, Loading },
  props: {
    isUpdate: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      loading: false,
      form: {
        latitude: '',
        longitude: '',
        nome: '',
      },
      rules: {
        required: (v) => {
          if (!v) {
            return 'Informe este dado para prosseguir'
          }
          return true
        },
      },
    }
  },
  computed: {
    ...mapState({
      state: 'area-comum',
    }),
  },
  created() {
    if (this.isUpdate) {
      this.loading = true
    }
  },
  mounted() {
    if (this.isUpdate) {
      this.loading = false
      this.form = {
        latitude: this.state.areaComum.latitude,
        longitude: this.state.areaComum.longitude,
        nome: this.state.areaComum.nome,
      }
    }
  },
  methods: {
    submitForm() {
      const isValid = this.$refs.form.validate()
      if (isValid) {
        if (!this.isUpdate) {
          this.$store
            .dispatch('area-comum/POST_AREA_COMUM', this.form)
            .then(() => {
              this.$router.push({
                name: 'area-comum',
              })
            })
        } else {
          this.$store
            .dispatch('area-comum/PUT_AREA_COMUM', {
              id: this.state.areaComum.id,
              areaComum: this.form,
            })
            .then(() => {
              this.$router.push({
                name: 'area-comum',
              })
            })
        }
      }
    },
    excluirUser() {
      if (this.isUpdate && confirm('Deseja realmente excluir o Usuário?')) {
        this.$store
          .dispatch('area-comum/DELETE_AREA_COMUM', this.state.areaComum.id)
          .then(() => {
            this.$router.push({
              name: 'area-comum',
            })
          })
      } else if (!this.isUpdate) {
        this.form = {
          latitude: '',
          longitude: '',
          nome: '',
        }
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.detalhes-area-comum {
  padding: 0;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  > .header {
    flex: 1;
  }
  > .formulario {
    flex: 2;
  }
}
.custom {
  flex-basis: auto !important;
}
</style>