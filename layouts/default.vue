<template>
  <div class="container">
    <Nuxt />
  </div>
</template>

<script lang="ts">
import { defineComponent, useContext } from '@nuxtjs/composition-api'
import { storeLogin } from '../store/store'

export default defineComponent({
  name: 'DefaultLayout',
  setup () {
    const context = useContext()
    return {
      context
    }
  },
  onIdle () {
    if (this.$route?.path !== '/' && storeLogin().getToken) {
      storeLogin().logout(this.context)
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
  @media screen and (max-width: 720px) { flex-flow: row; }
}
</style>
