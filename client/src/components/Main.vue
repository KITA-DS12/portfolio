<script setup>
import { ref, computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
const page = computed(() => {
  return store.state.page
})

</script>

<template>
  <v-sheet align="center">
  </v-sheet>
</template>

<style scoped>
</style>
