import * as CryptoJS from 'crypto-js'

export const validEmail = (text: string): Boolean => {
  const emailRegex = /^[\w+.]+@\w+\.\w{2,}(?:\.\w{2})?$/
  return emailRegex.test(text)
}

export const setCookie = (token: string): void => {
  const formatToken = CryptoJS.AES.encrypt(token, 'secret key 123').toString()
  document.cookie = '$nuxtKey=' + formatToken
}

export const removeCookie = (): void => {
  document.cookie = '$nuxtKey= ; expires = Thu, 01 Jan 1970 00:00:00 GMT'
}

export const encryptHASH = (value: string): string => {
  return CryptoJS.AES.encrypt(value, 'secret key 123').toString()
}

export const decryptHASH = (value: string): string => {
  if (!value) {
    return ''
  }
  const decryptText = CryptoJS.AES.decrypt(value, 'secret key 123')
  return decryptText.toString(CryptoJS.enc.Utf8)
}
