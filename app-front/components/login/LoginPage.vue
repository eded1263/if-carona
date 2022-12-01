<template>
  <div class="container login-page">
    <transition name="fade">
      <Loading v-if="isLoading" />
    </transition>
    <CustomHeader page="Login" class="header" />
    <v-form ref="form" class="formulario">
      <CustomInput
        prefix="RA:"
        :value.sync="form.RA"
        :rules="[rules.required]"
      />
      <CustomInput
        prefix="Senha:"
        :value.sync="form.senha"
        :rules="[rules.required]"
        type="password"
      />
      <v-row>
        <v-col>
          <RoundButton size="long" @click.native="submitCadastro">
            Entrar
          </RoundButton>
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
        RA: '',
        senha: '',
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
    async submitCadastro() {
      const isValid = this.$refs.form.validate()
      if (isValid) {
        this.isLoading = true
        await this.$store
          .dispatch('user/POST_LOGIN', this.form)
          .then(() => {
            this.isLoading = false
            this.$router.push({ name: 'home' })
          })
          .catch((err) => {
            this.isLoading = false
            this.$notify({
              type: 'error',
              text: err.response.data.message,
              title: 'Erro',
            })
          })
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