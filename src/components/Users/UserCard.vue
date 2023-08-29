<template>
    <q-card class="user-card">
        <q-avatar>
            <q-tooltip>
                {{ props.address }}
            </q-tooltip>
            <img
                :src="props.avatar"
                alt="user-avatar"
                class="user-card__avatar"
            />
        </q-avatar>
        <div class="user-card__info">
            <p class="user-card__title" v-html="props.title" />
            <p class="user-card__subtitle" v-html="props.subtitle" />
            <div class="user-card__footer">
                <p class="user-card__city">
                    City: <span class="bold">{{ props.city }}</span>
                </p>
                <p class="user-card__score">
                    Score: <span class="bold">{{ props.score }}</span>
                </p>
            </div>
        </div>
    </q-card>
</template>

<script lang="ts" setup>
import { IUser } from 'src/models'

const props = defineProps<IUser>()
</script>

<style lang="sass" scoped>
.user-card
  width: 100%
  padding: 8px 16px
  display: flex
  align-items: center
  justify-content: space-between
  gap: 20px
  line-height: 1
  font-size: 1rem

.user-card__avatar
  width: 50px
  object-fit: cover
  border-radius: 50% !important

  &:hover
    cursor: pointer

.user-card__info
  width: 100%
  display: flex
  flex-direction: column
  gap: 10px

.user-card__title
  font-size: 1.25rem

.user-card__footer
  display: flex
  justify-content: space-between
  width: 30%
  min-width: 10rem
  gap: 10px

.bold
  font-weight: 600
</style>
