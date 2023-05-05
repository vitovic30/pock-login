// eslint-disable-next-line import/named
import { NuxtAxiosInstance } from '@nuxtjs/axios'
import { storeLogin } from '../store/store'

export default function ({ $http, redirect, req }: { $http: NuxtAxiosInstance, redirect: any, req: any }) {
  // SCR
  if (process.client) {
    if (!storeLogin().getToken) {
      return redirect('/')
    }
  } if (process.server) {
    const tokenCookie = req.headers.cookie && req.headers.cookie.split('authToken=')[1]
    // SSR
    // auth-check
    return $http.get('/user')
      .then((resp: any) => {
        if (tokenCookie !== resp.data.token) {
          redirect('/')
        }
      })
  }
}
