<template>
  <form class="form" enctype="multipart/form-data">
    <div v-if="!loading" class="">
      <drag-and-drop class="upload" />
    </div>
  </form>
</template>

<script>
import DragAndDrop from '@/components/drag-and-drop/DragAndDropImagens.vue'
export default {
  components: { DragAndDrop },
  data() {
    return {
      loading: false,
    }
  },
}
</script>

<style>
</style>