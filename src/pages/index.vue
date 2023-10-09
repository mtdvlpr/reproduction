<template>
  <div>
    <p>Hello world</p>
    <v-btn>hardcoded <v-icon icon="i-mdi-home" /></v-btn>
    <v-btn @click="condition = !condition">conditional <v-icon :icon="'i-mdi-tv' + (condition ? '-off' : '')" /></v-btn>
    <v-btn @click="condition = !condition">variable string<v-icon :icon="`i-mdi-account${condition ? '' : '-circle'}`"/></v-btn>
  </div>
</template>
<script setup lang="ts">
const condition = ref(false)

</script>