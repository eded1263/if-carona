<template>
  <div>
    <transition name="fade">
      <Loading v-if="isLoading" />
    </transition>
    <div
      :class="['drag-and-drop-image']"
      :style="getStyleImage"
      @dragover.prevent="onDragover"
      @dragleave.prevent="onDragleave"
      @drop.prevent="onDrag"
    >
      <input
        ref="fileInput"
        type="file"
        accept=".jpg, .png, .jpeg"
        style="display: none"
        multiple
        @change="onFileSelected"
      />
      <template v-if="!perc">
        <div :class="['textnode']" :style="{ display: 'flex' }">
          Arraste uma imagem aqui para anexa-la ao carro
        </div>
      </template>
    </div>
  </div>
</template>
<script>
import { carroService } from '@/services/carro.service'
import Loading from '@/components/layout/Loading.vue'

export default {
  components: { Loading },
  data() {
    return {
      showTextnode: false,
      capture: '',
      perc: 0,
      isLoading: false,
    }
  },
  computed: {
    hasImage() {
      return !!this.$store.state.carros.carro?.fotos
    },
    getStyleImage() {
      if (this.$store.state.carros.carro?.fotos) {
        return {
          backgroundImage: `url('${this.$store.state.carros.carro.fotos[0].url}')`,
          backgroundSize: 'cover',
        }
      }
      return {}
    },
  },
  methods: {
    onDragover() {
      this.showTextnode = true
    },

    onDragleave() {
      this.showTextnode = false
    },
    onDrag(ev) {
      ev.preventDefault()
      this.showTextnode = false

      if (ev.dataTransfer) {
        const files = ev.dataTransfer.files
        this.uploadFiles(files)
      }
    },
    onFileSelected(ev) {
      ev.preventDefault()
      if (ev.target) {
        const target = ev.target
        const files = target.files
        this.uploadFiles(files)
      }
    },

    callInputFile() {
      this.$refs.fileInput.click()
    },

    onProgress(perc) {
      this.perc = perc
    },
    async onUpload(file) {
      const formData = new FormData()

      formData.append('imagem', file)
      formData.append('ordem', `0`)

      try {
        const { id } = this.$route.params
        await carroService
          .postImagem(Number(id), formData, (progressEvent) => {
            const uploadPerc = Math.round(
              (progressEvent.loaded / progressEvent.total) * 100
            )
            if (this.onProgress) this.onProgress(uploadPerc)
            return uploadPerc
          })
          .then((response) => {
            this.$store
              .dispatch('carros/GET_CARRO', id)
              .then(() => (this.isLoading = false))
            this.perc = 0
          })
          .catch((err) => {
            this.perc = 0
            throw new Error(err.response.data.message)
          })
      } catch (err) {
        this.$notify({
          title: 'Erro',
          text: 'Erro ao enviar imagem',
          type: 'error',
        })
      }
    },

    uploadFiles(files) {
      Array.from(files).forEach((file) => {
        if (!/image\/png|jpeg|jpg/.test(file.type)) {
          alert('Tipo de arquivo não suportado')
          return
        }
        this.onUpload(file)
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.drag-and-drop-image {
  position: relative;
  display: grid;
  align-items: center;
  justify-items: center;

  padding: 30px 0;

  width: 250px;
  height: 250px;
  border-radius: 50%;

  background-color: #0000004f;
  border: 1px dashed $primary;
  &:hover {
    > .textnode {
      opacity: 1;
    }
  }
}

.drag-and-drop-image > .textnode {
  align-self: flex-end;
  width: 50%;
  text-align: center;
  background-color: #0000004f;
  border-radius: 15px;
  padding: 10px;
  transition: opacity ease-in 0.3s;
  opacity: 0;
  color: #fff;
}

.drag-and-drop-image > .icon {
  cursor: pointer;
}

.drag-and-drop-image > .desc {
  font-weight: 500;
}
</style>
