// eslint-disable-next-line import/named
import { NuxtAxiosInstance } from '@nuxtjs/axios'
// import { useSessionStorage } from '@vueuse/core'
import { TState, TGetters, TActions, TPayloadLogin } from './types'
import { auth, userLogout } from '@/services/AuthService'
import { TConfig } from '~/types'
import { removeCookie, setCookie } from '~/utils'
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
              setCookie($config.TOKEN)
              $http.post('/user', { token: $config.TOKEN })
              resolve(resp)
            } else {
              reject(resp)
            }
          })
      })
    },
    logout ({ $http, redirect }: { $http: NuxtAxiosInstance, redirect: any }) : Promise<any> {
      return new Promise<any>((resolve, reject) => {
        userLogout($http)
          .then((resp: any) => {
            if (resp?.status === 201) {
              removeCookie()
              resolve(resp)
              redirect('/')
            } else {
              reject(resp)
            }
          })
      })
    }
  }
}
