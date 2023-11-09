<template>
  <div class="pa-4">
    <p>Home page</p>
    <a href="/something/anything">Go to optional page</a>
  </div>
</template>
<script setup lang="ts">
const requiredParam = useRouteParams<string>('required')
const optionalParam = useRouteParams<string | undefined>('optional', undefined)
</script>