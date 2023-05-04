import { storeLogin } from '../store/store'

export default function ({ redirect }: { redirect: any }) {
  //! process.server
  // SCR
  if (!storeLogin().getToken) {
    return redirect('/')
  }
}
