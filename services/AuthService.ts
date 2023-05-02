// eslint-disable-next-line import/named
import { NuxtAxiosInstance } from '@nuxtjs/axios'
import { TPayloadLogin } from '~/store/login/types'

export const auth = ($http: NuxtAxiosInstance, payload: TPayloadLogin) => {
  return $http.post('/login', payload)
}
