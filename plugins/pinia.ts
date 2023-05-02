import Vue from 'vue'
import { createPinia } from 'pinia'

const pinia = createPinia()

const plugin = {
  install (app: any) {
    app.use(pinia)
  }
}

Vue.use(plugin)
