export const validEmail = (text: string): Boolean => {
  const emailRegex = /^[\w+.]+@\w+\.\w{2,}(?:\.\w{2})?$/
  return emailRegex.test(text)
}
