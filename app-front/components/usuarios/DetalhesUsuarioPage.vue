<template>
  <div class="detalhes-usuario">
    <transition name="fade">
      <Loading v-if="isLoading" />
    </transition>
    <CustomHeader
      :page="isUpdate ? 'Dados do aluno' : 'Cadastrar Aluno'"
      class="header"
    />
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
            :readonly="cantUpdate"
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
      <v-row v-if="!isUpdate">
        <v-col sm="12" class="custom">
          <CustomInput
            prefix="Senha:"
            :value.sync="form.senha"
            type="password"
            :rules="[rules.required]"
          />
        </v-col>
      </v-row>
      <v-row>
        <v-col v-if="!isUpdate || isAdmin" sm="12" md="6" class="custom">
          <RoundButton
            :type="isUpdate ? 'button' : 'reset'"
            size="long"
            @click.native="excluirUser"
          >
            {{ isUpdate ? 'Excluir' : 'Apagar' }}
          </RoundButton>
        </v-col>
        <v-col sm="12" :md="!isUpdate || isAdmin ? '6' : '12'" class="custom">
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
        RA: '',
        cpf: '',
        nome: '',
        email: '',
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
  computed: {
    isLoading() {
      return this.$store.state.user.loading || this.loading
    },
    user() {
      return this.$store.state.user.user
    },
    isAdmin() {
      return this.$store.state.user.currentUser.isAdmin
    },
    cantUpdate() {
      return !this.isAdmin || this.isUpdate
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
        RA: this.user.RA,
        cpf: this.user.cpf,
        nome: this.user.nome,
        email: this.user.email,
      }
    }
  },
  methods: {
    submitForm() {
      const isValid = this.$refs.form.validate()
      if (isValid) {
        if (!this.isUpdate) {
          this.$store
            .dispatch('user/POST_USER', this.form)
            .then(() => {
              this.$router.push({
                name: 'usuarios',
              })
            })
            .catch((_error) => {
              // Adicionar notificação de erro
            })
        } else {
          this.$store
            .dispatch('user/PUT_USER', {
              id: this.user.id,
              user: this.form,
            })
            .then(() => {
              this.$router.push({
                name: 'usuarios',
              })
            })
        }
      }
    },
    excluirUser() {
      if (this.isUpdate && confirm('Deseja realmente excluir o Usuário?')) {
        this.$store
          .dispatch('user/DELETE_USER', { id: this.user.id })
          .then(() => {
            this.$router.push({
              name: 'usuarios',
            })
          })
          .catch((_error) => {
            // Adicionar notificação de erro
          })
      } else if (!this.isUpdate) {
        this.form = {
          RA: '',
          cpf: '',
          nome: '',
          email: '',
          senha: '',
        }
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