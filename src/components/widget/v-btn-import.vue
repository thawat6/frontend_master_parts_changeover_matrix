<template>
    <div>
        <input onclick="this.value = null" ref="uploader" accept=".csv" class="d-none" type="file"
            @change="onFileChanged">
        <v-btn @click="handleFileImport" color="blue-darken-4" rounded="lg" variant="outlined" class="text-none ms-3">
            {{ props.title }}
        </v-btn>
    </div>
</template>

<script setup>
import { ref, onMounted, defineProps, defineEmits } from 'vue';
const props = defineProps({
    title: String
})
const emit = defineEmits(['handleFileImport'])
const selectedFile = ref(null);
const uploader = ref(null);

const handleFileImport = () => {

    window.addEventListener('focus', () => {
    }, { once: true });

    if (uploader.value && uploader.value.click) {
        uploader.value.click();
    }
};

const onFileChanged = (event) => {
    selectedFile.value = event.target.files[0];
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
        const content = e.target.result;
        const lines = content.trim().split('\n');
        const headers = lines.shift().split(',');
        const jsonData = lines.map(line => {
            const values = line.split(',');
            const obj = {};
            headers.forEach((header, index) => {
                obj[header] = values[index];
            });
            return obj;
        });
        const resultData = jsonData.map(item => ({ ...item, id: item.id ? parseInt(item.id) : 0, part_name: item.part_name }));
        emit('handleFileImport', resultData)
    };

    reader.readAsText(file);
};
</script>
