<template>
  <div>
    <nuxt-link to="/">
      Dashboard Page
    </nuxt-link>
  </div>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'DashboardPage',
  middleware: 'auth'
})
</script>
