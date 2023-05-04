import { shallowMount, createLocalVue } from '@vue/test-utils'
import { PiniaVuePlugin } from 'pinia'
import { createTestingPinia } from '@pinia/testing'
// import { storeLogin } from '@/store/store'
import Login from '@/components/Login.vue'

const localVue = createLocalVue()

localVue.use(PiniaVuePlugin)
describe('Login', () => {
  test('is a Vue instance', () => {
    const wrapper = shallowMount(Login, {
      localVue,
      pinia: createTestingPinia()
    })
    expect(wrapper.vm).toBeTruthy()
  })
})
