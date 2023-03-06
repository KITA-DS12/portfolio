<script setup>
import Nav from "./components/Nav.vue"
import Main from "./components/Main.vue"
import About from "./components/About.vue"

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
    <Main />
    <About v-if="page=='ABOUT'" />
    <v-img width="250px" src="src/assets/icon_kita.png" style="position: fixed; bottom: 0%; right: -5%;" />
  </v-app>
</template>

<style scoped>
.background {
  background-image:
    radial-gradient(#EDE7F6C0 15%, transparent 3%),
    radial-gradient(#D1C4E9C0 10%, transparent 3%);
  background-size: 40px 40px;
  background-position: 0 0, 20px 20px;
}
</style>
