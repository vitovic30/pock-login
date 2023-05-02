import Vue from 'vue'
import IdleVue from 'idle-vue'
import emitter from 'tiny-emitter/instance'
import { TConfig } from '@/types'

export default function ({ $config }: { $config: TConfig }) {
  const time = $config.IDLE_TIME
  const plugin = {
    install (app: any) {
      app.use(IdleVue, {
        eventEmitter: {
          $on: (...args: any) => emitter.on(...args),
          $once: (...args: any) => emitter.once(...args),
          $off: (...args: any) => emitter.off(...args),
          $emit: (...args: any) => emitter.emit(...args)
        },
        idleTime: time
      })
    }
  }
  Vue.use(plugin)
}
