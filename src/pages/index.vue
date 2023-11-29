<template>
  <div class="pa-4">
    <p>Home page</p>
    Localized date: {{ dateString }}
    <v-date-picker v-model="date" />
  </div>
</template>
<script setup lang="ts">
import type DateFnsAdapter from '@date-io/date-fns'

const date = ref(new Date())
const dateString = computed(() => {
  const dateAdapter = useVDate() as DateFnsAdapter
  return dateAdapter.formatByString(date.value, 'dd MMMM yyyy')
})

/* Working Vuetify playground:
https://play.vuetifyjs.com/#eNqVVF1v0zAU/StWXtqJJh4UCVS1UzcYEogvMcQL4cFLbjtvjmPZTtdS9b9zbSdpmo2py0MU33vuvcfHx/m9jYzO6KoCyxeb5NZEk4gXqtSWbEmmgVn4FXJkRxa6LMigxg5S2QKlGBGQfQQVZcYEHAIJM/h+j31beI6LeCHNA7xDfZDmPGfKgq7Rcw/nJW3KEJ9KWPuKrJTGkno+mR3uYLhNJSFhyIT4xX45kGIwCqECjGFLMIhxhHc+HN5uZlvKAq9Jj2fdpZ2DPSbtltteu5NURiMv/rlSCVJG5acWCiUQeOZg01XMlPKffoGbs4xL0HWIkM9uBv8LeUNs6z+urOZySXa7BofFXi3FszsUchUXZQ5ilkYumkaENkNof4qLBBJT2iGHS5NpriwxYCtFBJNLbGdNGvmy9sA1LEZ4KoWqLLLsGARPrQOrDBxYYu+xFmQ3Cp7jCFKbwQXRCUhkKOHedxieoPjdfC0Y+qVmOhyekNlZc9B7YDN41jBGHBr6kFYo0iiMlt2qZFHqgtmLTRg3dKlkxUQFI7wEOfmCD9ngM/D0nEOmNMiMoqJZrEEmC77Ea1pKtIunl0aONBegvynLkWkatQ5NIyZEef/Jx6zGQU08u4Hs7pH4rVm7WBp912BAr9Adbc4yvQQb0pdXX2GN320SHVUJRD+R/AGmFJXjGGAXlcyRdgfn2X70540C/TSXawvSNJtyRPdXMY3QJO+e2Pqe7jgZ+zq8dV7H4Ki4YKqnZEgctsEpge6NtcpMKM1yiWV4f/hKJxIslaqgc4RRXUnLC4jzspjjzOQtzbmx3XACpoivdXmP2mKTztZrxx8xqkbihNfJOEyoQ7Fg18aNeLR1/Xt99gTBr+tSymUO66Tod6feKTrWgHntTvQ4vXplXc16qf/r1tz5I2Y20PmrZHyanNIX2PSRTsfr1G9Yq9Tr2/6eslIfZaUuHlu/fPOQ64Nf3nP6dmh3enduyG4U+aPAq+ItEP35B34Ju0w=
*/
</script>