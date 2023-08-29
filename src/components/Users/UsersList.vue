<template>
    <div class="user-list">
        <div v-if="isLoading" class="user-list__cards">
            <UserSkeleton v-for="number in 5" :key="number" />
        </div>
        <TransitionGroup
            v-else-if="users.length"
            class="user-list__cards"
            name="list"
            tag="div"
        >
            <UserCard
                v-for="user in users"
                :id="user.id"
                :key="user.id"
                :address="user.address"
                :avatar="user.avatar"
                :city="user.city"
                :score="user.score"
                :subtitle="user.subtitle"
                :title="user.title"
            />
        </TransitionGroup>
        <NotFound v-else />
    </div>
</template>

<script lang="ts" setup>
import { useUserStore } from 'stores/user-store'
import { computed } from 'vue'
import UserCard from 'components/Users/UserCard.vue'
import NotFound from 'components/Users/NotFound.vue'
import UserSkeleton from 'components/Users/UserSkeleton.vue'

const store = useUserStore()

const users = computed(() => store.users)
const isLoading = computed(() => store.isLoading)
</script>

<style lang="sass" scoped>
.user-list
  margin-top: 20px

.user-list__cards
  display: flex
  flex-direction: column
  gap: 5px

.list-move,
.list-enter-active,
.list-leave-active
  transition: all 0.5s ease

.list-enter-from,
.list-leave-to
  opacity: 0
  transform: translateX(30px)

.list-leave-active
  position: absolute
</style>
