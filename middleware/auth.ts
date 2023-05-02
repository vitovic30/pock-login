const isLogged = true
export default function ({ store, redirect }: { store: any, redirect: any }) {
  console.log(store.state.login.token)
  if (!isLogged) {
    return redirect('/')
  }
}
