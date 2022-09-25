<template>
  <div class="container login-page">
    <transition name="fade">
      <Loading v-if="isLoading" />
    </transition>
    <CustomHeader page="Login" class="header" />
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
import CustomHeader from '@/components/layout/CustomHeader.vue'
import RoundButton from '@/components/layout/RoundButton.vue'
import Loading from '@/components/layout/Loading.vue'
export default {
  components: { CustomInput, RoundButton, Loading, CustomHeader },
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
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .header {
    flex: 1;
  }
  .formulario {
    flex: 2;
  }
}
</style>