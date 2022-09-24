<template>
  <div class="container login-page">
    <transition name="fade">
      <Loading v-if="isLoading" />
    </transition>
    <div class="titulos">
      <h1 class="titulo">Carona Estudantil</h1>
      <span class="subtitulo">Login</span>
    </div>
    <v-form ref="form" class="formulario">
      <CustomInput
        prefix="Nome:"
        :value.sync="form.nome"
        :rules="[rules.required]"
      />

      <CustomInput
        prefix="RA:"
        :value.sync="form.RA"
        :rules="[rules.required]"
      />

      <CustomInput
        prefix="Email:"
        :value.sync="form.email"
        :rules="[rules.required]"
      />
      <v-row>
        <v-col>
          <RoundButton @click.native="submitCadastro"> Entrar </RoundButton>
        </v-col>
      </v-row>
    </v-form>
  </div>
</template>

<script>
import CustomInput from '@/components/form/CustomInput.vue'
import RoundButton from '@/components/layout/RoundButton.vue'
import Loading from '@/components/layout/Loading.vue'
export default {
  components: { CustomInput, RoundButton, Loading },
  data() {
    return {
      isLoading: false,
      form: {
        nome: '',
        RA: '',
        email: '',
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
  methods: {
    submitCadastro() {
      const isValid = this.$refs.form.validate()
      if (isValid) {
        this.isLoading = true
        setTimeout(() => {
          this.$router.push({
            name: 'home',
          })
        }, 1000)
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.login-page {
  padding: 0;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: $font-primary;
  .titulos {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    text-align: center;
    padding-bottom: 25px;
    > .titulo {
      font-size: 52px;
    }
    > .subtitulo {
      font-size: 24px;
    }
  }
  .formulario {
    flex: 2;
  }
}
</style>