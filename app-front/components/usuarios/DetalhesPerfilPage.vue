<template>
  <div class="detalhes-usuario">
    <transition name="fade">
      <Loading v-if="isLoading" />
    </transition>
    <CustomHeader page="Meu Perfil" class="header" />
    <v-form ref="form" class="formulario" @submit.prevent="submitForm">
      <v-row>
        <v-col sm="12" md="6" class="custom">
          <CustomInput
            prefix="RA:"
            :value.sync="form.RA"
            :readonly="cantUpdate"
            :rules="[rules.required]"
          />
        </v-col>
        <v-col sm="12" md="6" class="custom">
          <CustomInput
            prefix="Nome:"
            :readonly="cantUpdate"
            :value.sync="form.nome"
            :rules="[rules.required]"
          />
        </v-col>
      </v-row>
      <v-row>
        <v-col sm="12" md="6" class="custom">
          <CustomInput
            prefix="Email:"
            :value.sync="form.email"
            :rules="[rules.required]"
          />
        </v-col>
        <v-col sm="12" md="6" class="custom">
          <CustomInput
            prefix="CPF:"
            :readonly="cantUpdate"
            :value.sync="form.cpf"
            :rules="[rules.required]"
          />
        </v-col>
      </v-row>
      <v-row>
        <v-col sm="12" md="6" class="custom">
          <RoundButton type="button" size="long" @click.native="excluirUser">
            Excluir conta
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
export default {
  components: { CustomHeader, CustomInput, RoundButton, Loading },
  data() {
    return {
      loading: false,
      form: {
        RA: '',
        cpf: '',
        nome: '',
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
  computed: {
    isLoading() {
      return this.$store.state.user.loading || this.loading
    },
    user() {
      return this.$store.state.user.currentUser
    },
    isAdmin() {
      return this.$store.state.user.currentUser?.isAdmin
    },
    cantUpdate() {
      return !this.isAdmin
    },
  },
  mounted() {
    this.form = {
      RA: this.user.RA,
      cpf: this.user.cpf,
      nome: this.user.nome,
      email: this.user.email,
    }
  },
  methods: {
    submitForm() {
      const isValid = this.$refs.form.validate()
      if (isValid) {
        this.$store
          .dispatch('user/PUT_PROFILE', { user: this.form })
          .then(() => {
            this.$router.push({
              name: 'home',
            })
          })
      }
    },
    excluirUser() {
      if (
        confirm(
          'Deseja realmente excluir sua conta? Esta ação não poderá ser desfeita, um admin precisará te adicionar novamente!'
        )
      ) {
        this.$store
          .dispatch('user/DELETE_USER', { id: this.user.id })
          .then(() => {
            this.$router.push({
              name: 'index',
            })
          })
          .catch((_error) => {
            // Adicionar notificação de erro
          })
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.detalhes-usuario {
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