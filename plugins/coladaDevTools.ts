
import Vue from 'vue'
import { createPinia } from 'pinia'

import Colada, { PiniaColadaPlugin } from 'colada-plugin'

const pinia = createPinia()

const plugin = {
  install (app: any): void {
    app?.use(pinia)
    pinia.use(PiniaColadaPlugin)
    app.use(Colada)
  }
}

Vue.use(plugin)
