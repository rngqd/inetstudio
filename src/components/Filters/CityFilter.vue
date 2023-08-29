<template>
    <q-select
        v-model="model"
        :options="options"
        class="select-filter"
        clearable
        label="City"
        outlined
    />
</template>

<script lang="ts" setup>
import { useUserStore } from 'stores/user-store'
import { computed } from 'vue'

const store = useUserStore()

const model = computed({
    get: () => store.currentCity,
    set: (value) => {
        store.currentCity = value
        store.fetchUsers()
    },
})

const options = computed(() => store.cityOptions)
</script>

<style lang="sass">
.select-filter
  width: 100%
</style>
