<template>
  <v-dialog v-model="isShowModal" max-width="400">
    <v-card class="rounded-lg pa-4">
      <div class="d-flex justify-end">
        <v-icon @click="isShowModal = false">mdi-close</v-icon>
      </div>
      <v-card-title class="pa-0 justify-center">
        <h3 class="text-center" style="font-weight: 500">{{ props.title }}</h3>
      </v-card-title>
      <h4 class="text-center my-6" style="font-weight: 500; color: #616161">
        <span v-html="props.content"></span>
      </h4>
      <v-card-actions class="d-flex justify-center">
        <v-btn class="text-none" color="blue-darken-4" rounded="lg" @click="onCancel">
          close
        </v-btn>
        <v-btn class="text-none" color="blue-darken-4" rounded="lg" variant="flat" @click="onConfirm">
          confirm
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup>
import { ref, defineProps, defineEmits, defineExpose } from 'vue';
const emit = defineEmits(['on-confirm', 'on-cancel'])
const props = defineProps({
  title: String,
  content: String,
});

const isShowModal = ref(false);

const onConfirm = () => {
  emit('on-confirm');
  isShowModal.value = false;
};

const onCancel = () => {
  emit('on-cancel');
  isShowModal.value = false;
};
const showModal = () => {
  isShowModal.value = true;
};
defineExpose({
  showModal
});
</script>

<style></style>
