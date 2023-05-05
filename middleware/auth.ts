// eslint-disable-next-line import/named
import { NuxtAxiosInstance } from '@nuxtjs/axios'
import { storeLogin } from '../store/store'
import { decryptHASH } from '~/utils'

export default function ({ $http, redirect, req }: { $http: NuxtAxiosInstance, redirect: any, req: any }) {
  // SCR
  if (process.client) {
    if (!storeLogin().getToken) {
      return redirect('/')
    }
  } if (process.server) {
    const tokenCookie = decryptHASH(req.headers.cookie && req.headers.cookie.split('$nuxtKey=')[1])
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
