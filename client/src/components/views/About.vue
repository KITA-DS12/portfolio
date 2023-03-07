<script setup>
import Profile from '../templates/Profile.vue'
import Sns from '../templates/Sns.vue'
import Field from '../templates/Field.vue'
import History from '../templates/History.vue'
</script>

<template>
  <v-sheet style="background-color: transparent; margin-top: 15px;">
    <Profile class="elevation-3" />
    <div style="height: 20px;" />
    <Sns class="elevation-3" />
    <div style="height: 20px;" />
    <Field class="elevation-3" />
    <div style="height: 20px;" />
    <History class="elevation-3" />
  </v-sheet>
</template>

<style scoped>
.bordar-radius {
  padding: 10px;
  border-radius: 30px;
  color: #fff;
}
</style>
