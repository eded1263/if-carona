<template>
  <div class="detalhes-carro">
    <transition name="fade">
      <Loading v-if="isLoading" />
    </transition>
    <CustomHeader
      :page="isUpdate ? 'Detalhes do carro' : 'Cadastrar Carro'"
      class="header"
    />
    <ImagensCarro class="imagem" />
    <v-form ref="form" class="formulario" @submit.prevent="submitForm">
      <v-row>
        <v-col sm="12" md="6" class="custom">
          <CustomInput
            prefix="Modelo:"
            :value.sync="form.modelo"
            :rules="[rules.required]"
          />
        </v-col>
        <v-col sm="12" md="6" class="custom">
          <CustomInput
            prefix="Ano:"
            :value.sync="form.ano"
            :rules="[rules.required]"
          />
        </v-col>
      </v-row>
      <v-row>
        <v-col sm="12" md="6" class="custom">
          <CustomInput
            prefix="Cor:"
            :value.sync="form.cor"
            :rules="[rules.required]"
          />
        </v-col>
        <v-col sm="12" md="6" class="custom">
          <CustomInput
            prefix="Placa:"
            :value.sync="form.placa"
            :readonly="isUpdate"
            :rules="!isUpdate ? [rules.required] : []"
          />
        </v-col>
      </v-row>
      <v-row>
        <v-col sm="12" md="6" class="custom">
          <RoundButton
            :type="isUpdate ? 'button' : 'reset'"
            size="long"
            @click.native="excluirCarro"
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
import Loading from '@/components/layout/Loading.vue'
import CustomHeader from '@/components/layout/CustomHeader.vue'
import CustomInput from '@/components/form/CustomInput.vue'
import RoundButton from '@/components/layout/RoundButton.vue'
import ImagensCarro from '@/components/detalhes-carro/ImagensCarro.vue'
export default {
  components: { CustomHeader, CustomInput, RoundButton, Loading, ImagensCarro },
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
        modelo: '',
        ano: '',
        placa: '',
        cor: '',
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
    isLoading() {
      return this.$store.state.carros.loading || this.loading
    },
    carro() {
      return this.$store.state.carros.carro
    },
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
        modelo: this.carro.modelo,
        placa: this.carro.placa,
        cor: this.carro.cor,
        ano: this.carro.ano,
      }
    }
  },
  methods: {
    submitForm() {
      const isValid = this.$refs.form.validate()
      if (isValid) {
        if (!this.isUpdate) {
          this.$store
            .dispatch('carros/POST_CARRO', this.form)
            .then(() => {
              this.$router.push({
                name: 'meus-carros',
              })
            })
            .catch((err) => {
              this.$notify({
                type: 'error',
                text: err.response.data.message,
                title: 'Erro',
              })
            })
        } else {
          this.$store
            .dispatch('carros/PUT_CARRO', {
              id: this.carro.id,
              carro: this.form,
            })
            .then(() => {
              this.$router.push({
                name: 'meus-carros',
              })
            })
        }
      }
    },
    excluirCarro() {
      if (this.isUpdate && confirm('Deseja realmente excluir o carro?')) {
        this.$store
          .dispatch('carros/DELETE_CARRO', { id: this.carro.id })
          .then(() => {
            this.$router.push({
              name: 'meus-carros',
            })
          })
          .catch((_error) => {
            // Adicionar notificação de erro
          })
      } else if (!this.isUpdate) {
        this.form = {
          modelo: '',
          ano: '',
          placa: '',
          cor: '',
        }
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.detalhes-carro {
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
  > .imagem {
    margin-bottom: 10px;
  }
}
.custom {
  flex-basis: auto !important;
}
</style>