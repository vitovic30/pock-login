export type TState = {
  token: string | any
}

export type TGetters<T> = {
  getToken: (state: TState) => T
}

export type TPayloadLogin = {
  email: string,
  password: string,
}

export type TActions<T, P> = {
  login: ({ $http }: { $http: T }, payload: TPayloadLogin) => Promise<P>
}
