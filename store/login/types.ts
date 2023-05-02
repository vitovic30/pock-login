export type TState = {
  token: string
}

export type TGetters<T> = {
  getToken: (state: TState) => T
}

export type TPayloadLogin = {
  email: string,
  password: string,
}

export type TActions<T, P> = {
  [x: string]: any
  login: ({ $http }: { $http: T }, payload: TPayloadLogin) => Promise<P>
}
