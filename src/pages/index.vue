<template>
  <div class="pa-4">
    <p>Home page</p>
  </div>
</template>
<script setup lang="ts">
onMounted(() => {
  // Type of $foo is unknown because the NuxtApp type is coming from vuetify-nuxt-module/dist/module.d.ts
  const foo: string = useNuxtApp().$foo
  console.log(foo)
})
</script>