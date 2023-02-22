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
  <div align="center">
    <v-sheet>
      <v-img width="350px" src="src/assets/logo.png" style="margin-top: 40px; margin-bottom: 20px;" />
      <v-tabs v-model="tab" align-tabs="center">
          <v-tab v-for="link in links" :key="link" :value="link" @click="changePage">
              {{ link }}
          </v-tab>
      </v-tabs>
    </v-sheet>
  </div>
</template>

<style scoped>
</style>
