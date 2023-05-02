// eslint-disable-next-line import/named
import { NuxtAxiosInstance } from '@nuxtjs/axios'
import { TState, TGetters, TActions, TPayloadLogin } from './types'
import { auth } from '@/services/AuthService'
import { TConfig } from '~/types'

export default {
  state: (): TState => ({
    token: ''
  }),
  actions: <TActions<NuxtAxiosInstance, TPayloadLogin>>{
    login ({ $http, $config }: { $http: NuxtAxiosInstance, $config: TConfig }, payload:TPayloadLogin): Promise<TPayloadLogin> {
      return new Promise<TPayloadLogin>((resolve, reject) => {
        auth($http, payload)
          .then((resp: any) => {
            if (resp?.status === 201) {
              this.token = $config.TOKEN
              localStorage.setItem('token', $config.TOKEN)
              resolve(resp)
            } else {
              reject(resp)
            }
          })
      })
    }
  },
  getters: <TGetters<string>> {
    getToken: (state: TState) => state.token
  }
}