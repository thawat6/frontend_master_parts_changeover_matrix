<template>
    <div class="notificationContainer">
        <v-slide-y-transition group>
            <v-alert v-for="notification in notifications" outlined :type="notification[1].typeAlert" text
                :key="notification[0]">{{
                notification[1].message }}</v-alert>
        </v-slide-y-transition>
    </div>
</template>

<script setup>
import { ref, defineExpose } from 'vue'

const notifications = ref(new Map())

function addNotification(notificationMessage) {
    const notificationId = self.crypto.randomUUID();

    notifications.value.set(notificationId, notificationMessage);
    setTimeout(() => removeNotification(notificationId), 2000);
}

function removeNotification(notificationId) {
    notifications.value.delete(notificationId);
}
defineExpose({
    addNotification,
});
</script>

<style scoped>
.notificationContainer {
    position: fixed;
    top: 10px;
    right: 10px;
    display: grid;
    grid-gap: 0.5em;
    z-index: 99;
}
</style>
