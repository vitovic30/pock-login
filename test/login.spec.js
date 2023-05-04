import { shallowMount, createLocalVue, config } from '@vue/test-utils'
import { PiniaVuePlugin } from 'pinia'
import { createTestingPinia } from '@pinia/testing'

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import Login from '@/components/Login.vue'

const localVue = createLocalVue()

localVue.use(PiniaVuePlugin)
localVue.use(BootstrapVue)
localVue.use(IconsPlugin)

config.showDeprecationWarnings = false
describe('Login', () => {
  test('is a Vue instance', () => {
    const wrapper = shallowMount(Login, {
      localVue,
      pinia: createTestingPinia(),
      data () {
        return {
          email: 'foo@bar.com',
          password: 'ctbc2016'
        }
      },
      methods: {
        acessar: jest.fn()
      }
    })

    const submitButton = wrapper.find('[class="btn-submit"]')
    const spyAcessar = jest.spyOn(wrapper.vm, 'acessar')

    wrapper.vm.acessar()

    expect(wrapper.vm).toBeTruthy()
    expect(wrapper.vm.$data.email).toEqual('foo@bar.com')
    expect(wrapper.vm.$data.password).toEqual('ctbc2016')

    expect(submitButton.exists()).toBe(true)
    expect(submitButton.element.textContent).toContain('Acessar')
    expect(spyAcessar).toHaveBeenCalledTimes(1)
    submitButton.trigger('click')
  })
})
