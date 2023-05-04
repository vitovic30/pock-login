<template>
  <div class="dashboard">
    <button data-cy="nuxt-link" class="btn btn-primary" @click="store.logout(context)">
      Logout Application
    </button>
  </div>
</template>

<script>
import { defineComponent, useContext } from '@nuxtjs/composition-api'
import { storeLogin } from '../../store/store'

export default defineComponent({
  name: 'DashboardPage',
  middleware: 'auth',
  setup () {
    const store = storeLogin()
    const context = useContext()
    return {
      store,
      context
    }
  }
})
</script>
