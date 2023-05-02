<template>
  <div class="container">
    <Nuxt />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
export default defineComponent({
  name: 'DefaultLayout',
  onIdle () {
    console.log(1)
    const isLogged = true
    if (this.$route?.path !== '/' && isLogged) {
      this.$router.push('/')
    }
  }
})
</script>
<style lang="scss" scoped>
.container {
  min-height: 100vh;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 720px) { flex-flow: row;}
}
</style>
