export const validEmail = (text: string): Boolean => {
  const emailRegex = /^[\w+.]+@\w+\.\w{2,}(?:\.\w{2})?$/
  return emailRegex.test(text)
}

export const setCookie = (token: string): void => {
  document.cookie = 'token=' + token
}

export const removeCookie = (): void => {
  document.cookie = 'token= ; expires = Thu, 01 Jan 1970 00:00:00 GMT'
}
