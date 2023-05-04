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
  logout: ({ $http }: { $http: T, }) => Promise<any>,
  login: ({ $http }: { $http: T }, payload: TPayloadLogin) => Promise<P>
}
