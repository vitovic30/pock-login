// eslint-disable-next-line import/named
import { NuxtAxiosInstance } from '@nuxtjs/axios'
import { storeLogin } from '../store/store'

export default function ({ $http, redirect }: { $http: NuxtAxiosInstance, redirect: any }) {
  // SCR
  if (!process.server) {
    if (!storeLogin().getToken) {
      return redirect('/')
    }
  } else {
    // SSR
    // auth-check
    return $http.get('/user')
      .then((resp: any) => {
        if (process.env.TOKEN !== resp.data.token) {
          redirect('/')
        }
      })
  }
}
