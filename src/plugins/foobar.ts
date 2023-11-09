export default defineNuxtPlugin((nuxtApp) => {
  const foo: string = 'bar'
  return {
    provide: {
      foo,
    }
  }
})