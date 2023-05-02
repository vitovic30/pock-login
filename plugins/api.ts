export default function ({ $axios, $config }: { $axios: any, $config: any },
  inject: (name: string, context: any) => void) {
  const http = $axios.create({
    headers: {
      common: {
        Accept: 'text/plain, */*'
      }
    }
  })

  http.setBaseURL($config.API_BASE_URL)
  inject('http', http)
}
