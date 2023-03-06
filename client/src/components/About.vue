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
  <v-sheet align="center" style="background-color: transparent;">
    <p>test</p>
  </v-sheet>
</template>

<style scoped>
</style>
