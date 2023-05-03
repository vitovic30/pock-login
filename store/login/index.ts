// eslint-disable-next-line import/named
import { NuxtAxiosInstance } from '@nuxtjs/axios'
import { useSessionStorage } from '@vueuse/core'
import { TState, TGetters, TActions, TPayloadLogin } from './types'
import { auth } from '@/services/AuthService'
import { TConfig } from '~/types'

export default {
  state: (): TState => ({
    token: ''
  }),
  getters: <TGetters<string>> {
    getToken: (state: TState) => state.token
  },
  actions: <TActions<NuxtAxiosInstance, TPayloadLogin>>{
    login ({ $http, $config }: { $http: NuxtAxiosInstance, $config: TConfig }, payload:TPayloadLogin): Promise<TPayloadLogin> {
      return new Promise<TPayloadLogin>((resolve, reject) => {
        auth($http, payload)
          .then((resp: any) => {
            if (resp?.status === 201) {
              this.token = $config.TOKEN
              useSessionStorage('token', $config.TOKEN)
              resolve(resp)
            } else {
              reject(resp)
            }
          })
      })
    }
  }
}
