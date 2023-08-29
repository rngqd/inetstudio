<template>
    <q-card class="user-skeleton">
        <q-item>
            <q-item-section avatar>
                <q-skeleton type="QAvatar" />
            </q-item-section>

            <q-item-section>
                <q-item-label>
                    <q-skeleton class="user-skeleton__title" type="text" />
                </q-item-label>
                <q-item-label>
                    <q-skeleton class="user-skeleton__subtitle" type="text" />
                </q-item-label>
                <div class="user-skeleton__footer">
                    <q-item-label>
                        <q-skeleton
                            class="user-skeleton__footer-item"
                            type="text"
                        />
                    </q-item-label>
                    <q-item-label>
                        <q-skeleton
                            class="user-skeleton__footer-item"
                            type="text"
                        />
                    </q-item-label>
                </div>
            </q-item-section>
        </q-item>
    </q-card>
</template>

<script setup lang="ts"></script>

<style scoped lang="sass">
.user-skeleton__title
  width: 30%
  height: 1.5rem

.user-skeleton__subtitle
  width: 60%

.user-skeleton__footer
  display: flex
  align-items: center
  justify-content: space-between
  width: 30%
  max-width: 400px

.user-skeleton__footer-item
  width: 80px
</style>
