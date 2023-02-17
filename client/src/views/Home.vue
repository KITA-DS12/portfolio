<template>
  <v-container>
    <div v-if="currentUser === null">
      <v-card width="400px" class="mx-auto mt-5">
        <v-card-actions>
          <v-col>
            <v-text-field v-model="emailText" label="E-MAIL">
            </v-text-field>
            <v-text-field v-model="passwordText" label="PASSWORD" type="password">
            </v-text-field>
            <v-btn @click="signIn" color="primary"> E-Mail Sign In </v-btn>
            <v-btn color="primary" @click="signUp">Sign Up</v-btn>
            <div class="message">{{ message }}</div>
          </v-col>
        </v-card-actions>
      </v-card>
    </div>
    <div v-else>
      <h2>Success to sign in with firebase auth!</h2>
      <v-btn @click="logOut">Sign Out</v-btn>
    </div>
  </v-container>
</template>

<script lang="ts" setup>
import { ref, Ref, onMounted } from 'vue'
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, User } from '@firebase/auth';

const emailText: Ref<string> = ref('')
const passwordText: Ref<string> = ref('')
const message: Ref<string> = ref('')
const currentUser: Ref<User | null> = ref(null)

onMounted(() => {
  const auth = getAuth()
  onAuthStateChanged(auth, (user) => {
    if (user != null) {
      currentUser.value = user
    } else {
      currentUser.value = null
    }
  })
})

const signIn = () => {
  message.value = ''
  if (emailText.value == '' || passwordText.value == '') return
  const auth = getAuth()
  signInWithEmailAndPassword(auth, emailText.value, passwordText.value)
    .then((userCredential) => {
      const user: User = userCredential.user
      console.log(user)
    })
    .catch((error) => {
      message.value = error.message
      console.log(error.code, error.message)
    })
}

const signUp = () => {
  message.value = ''
  if (emailText.value == '' || passwordText.value == '') return
  const auth = getAuth()
  createUserWithEmailAndPassword(auth, emailText.value, passwordText.value)
    .then((userCredential) => {
      const user: User = userCredential.user
      console.log(user)
    })
    .catch((error) => {
      message.value = error.message
      console.log(error.code, error.message)
    })
}

const logOut = () => {
  const auth = getAuth()
  signOut(auth)
    .then(() => {
      currentUser.value = null
    })
    .catch((error): void => {
      console.log(error)
    })
}
</script>
