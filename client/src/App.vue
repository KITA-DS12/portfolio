<script setup>
import Nav from "./components/templates/Nav.vue"
import Logo from "./components/templates/Logo.vue"
import About from "./components/views/About.vue"

import { ref, computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
const page = computed(() => {
  return store.state.page
})
</script>

<template>
  <v-app class="background">
      <Nav />
      <v-main class="d-flex flex-row justify-center">
        <v-sheet width="550" class="background-clear">
          <About v-if="page=='ABOUT'" />
          <Logo />
        </v-sheet>
      </v-main>
  </v-app>
</template>

<style scoped>
* {
  font-family: 'Yomogi', sans-serif !important;
}
.background {
  background-image:
    radial-gradient(#EDE7F6C0 15%, transparent 3%),
    radial-gradient(#D1C4E9C0 10%, transparent 3%);
  background-size: 40px 40px;
  background-position: 0 0, 20px 20px;
}
.background-clear {
   background-color: rgba(255, 255, 255, 0.3);
}
</style>
