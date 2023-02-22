<script setup>
import { ref, computed } from 'vue'
import { useStore } from 'vuex'

const links = ['ABOUT', 'NEWS', 'SKILLS', 'WORKS', 'CONTACT']

const store = useStore()
const page = computed(() => {
  return store.state.page
})

const tab = ref('')

const changePage = () => {
  store.commit('setPage', tab)
}
</script>

<template>
  <v-card>
    <v-tabs v-model="tab" align-tabs="center">
        <v-tab v-for="link in links" :key="link" :value="link" @click="changePage">
            {{ link }}
        </v-tab>
    </v-tabs>
  </v-card>
</template>

<style scoped>
</style>
