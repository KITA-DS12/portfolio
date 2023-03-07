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
  <v-tabs v-model="tab" align-tabs="center" color="deep-purple-darken-2">
    <v-tab class="background-tab" v-for="link in links" :key="link" :value="link" @click="changePage">
      <p class="font-weight-bold">{{ link }}</p>
    </v-tab>
  </v-tabs>
</template>
<style>
.background-tab {
   background-color: rgba(255, 255, 255, 0.5);
}
</style>
