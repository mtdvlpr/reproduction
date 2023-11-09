<template>
  <div class="pa-4">
    <p>Required/Optional page</p>
    <p>Required param: {{ requiredParam }}</p>
    <p>Optional param: {{ optionalParam }}</p>
    <button @click="makeEmpty">Go to required page (empty)</button>
    <button @click="makeNull">Go to required page (null)</button>
    <button @click="makeUndefined">Go to required page (undefined)</button>
    <p>The parameter is cleared but the url is not</p>
    <p>If you keep clicking the buttons, the url sometimes does change, but sometimes the required param suddenly also becomes empty</p>
  </div>
</template>
<script setup lang="ts">
const requiredParam = useRouteParams<string>('required')
const optionalParam = useRouteParams<string | null | undefined>('optional')

const makeEmpty = () => {
  optionalParam.value = ''
}

const makeNull = () => {
  optionalParam.value = null
}

const makeUndefined = () => {
  optionalParam.value = undefined
}
</script>