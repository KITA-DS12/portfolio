<template>
  <router-view />
</template>

<script lang="ts" setup>
import { firebaseApp } from './lib/firebase';
firebaseApp()
</script>
