<template>
    <router-view />
</template>

<script lang="ts" setup>
import { useUserStore } from 'stores/user-store'
import { onMounted } from 'vue'

const store = useUserStore()

onMounted(() => {
    store.fetchFilters()
    store.fetchUsers()
})
</script>
