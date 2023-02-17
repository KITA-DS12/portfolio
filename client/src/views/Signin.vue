<template>
  <div class="login">
    <input type="text" v-model="email">
    <input type="text" v-model="password">
    <v-btn @click="signin">ログイン</v-btn>
  </div>
</template>

<script setup lang="ts">
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { ref } from 'vue'

const email = ref<string>("")
const password = ref<string>("")

const signin = () => {
  signInWithEmailAndPassword(getAuth(), email.value, password.value)
    .then((userCredential) => {
      const user = userCredential.user
    })
}
</script>
