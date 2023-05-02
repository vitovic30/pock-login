<template>
  <div>
    <nuxt-link to="/">
      Home page
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: 'DashboardPage',
  middleware: 'auth'
}
</script>
