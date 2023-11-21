<template>
  <div class="pa-4">
    <p>Home page</p>
    Localized date: {{ dateString }}
  </div>
</template>
<script setup lang="ts">
import type DateFnsAdapter from '@date-io/date-fns'

const dateString = ref('')

onMounted(() => {
  // Missing type is a Vuetify error (https://github.com/vuetifyjs/vuetify/issues/18710)
  const date = useVDate() as DateFnsAdapter
  dateString.value = date.formatByString(new Date(), 'dd MMMM yyyy')
})
</script>