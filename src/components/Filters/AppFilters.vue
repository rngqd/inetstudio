<template>
    <div class="filters-container">
        <CityFilter />
        <ScoreFilter />
    </div>
</template>

<script lang="ts" setup>
import CityFilter from 'components/Filters/CityFilter.vue'
import ScoreFilter from 'components/Filters/ScoreFilter.vue'
</script>

<style lang="sass" scoped>
.filters-container
  display: flex
  justify-content: space-between
  gap: 20px
  width: 100%
</style>
