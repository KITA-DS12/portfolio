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
    <v-layout style="height: 30px">
      <v-system-bar color="deep-purple-lighten-3">
        <v-icon icon="mdi-code-greater-than" />
        <p>PORTFOLIO</p>
        <v-spacer />
      </v-system-bar>
    </v-layout>
    <v-sheet style="background-color: rgba(46, 46, 46, 0)">
      <v-img width="350px" src="src/assets/logo.png" style="margin-top: 40px; margin-bottom: 20px;" />
      <v-tabs v-model="tab" align-tabs="center" color="deep-purple-darken-2">
          <v-tab style="background-color: rgba(255, 255, 255, 0.5)" v-for="link in links" :key="link" :value="link" @click="changePage">
              {{ link }}
          </v-tab>
      </v-tabs>
    </v-sheet>
  </div>
</template>

<style scoped>
</style>
