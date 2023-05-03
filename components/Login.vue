<template>
  <div class="col col-sm-8 col-md-6 col-lg-4" data-cy="loginForm">
    <div class="mb-3">
      <label for="exampleFormControlInput1" class="form-label">Digite seu Email</label>
      <input
        id="exampleFormControlInput1"
        ref="emails"
        v-model="email"
        data-cy="inputEmail"
        class="form-control"
        placeholder="name@example.com"
        type="email"
        @focusout="checkEmail()"
        @input="validForm.email.touched = true"
      >
      <span v-if="validForm.email.error.value" class="invalid-feedback">{{ validForm.email.error.message }}</span>
    </div>
    <div class="mb-3">
      <label for="inputPassword5" class="form-label">Password</label>
      <input
        id="inputPassword5"
        v-model="password"
        type="password"
        data-cy="inputEmail"
        class="form-control"
        aria-labelledby="passwordHelpBlock"
      >
    </div>
    <div class="mb-3">
      <b-button variant="primary" @click="acessar()">
        Acessar
      </b-button>
    </div>
  </div>
</template>

<script lang="ts">
import { ref, reactive } from 'vue'
import { useContext, defineComponent, useRouter } from '@nuxtjs/composition-api'
import { storeLogin } from '../store/store'
import { validEmail } from '../utils'

export default defineComponent({
  name: 'LoginComponent',
  setup () {
    const email = ref('')
    const password = ref('')
    const validForm = reactive({
      email: {
        touched: false,
        error: {
          value: false,
          message: 'Insira um e-mail válido'
        }
      }
    })
    const store = storeLogin()
    const context = useContext()
    const router = useRouter()

    function acessar () {
      const payload = {
        email: email.value,
        password: password.value
      }

      // @ts-ignore:next-line
      store.login(context, payload)
        .finally(() => {
          router.push({ path: '/dashboard' })
        })
    }

    function removeValidation (ref: HTMLElement) {
      validForm.email.error.value = false
      ref.classList.remove('is-invalid')
    }

    function checkEmail () {
      if (!validEmail(email.value)) {
        validForm.email.error.value = true
        this.$refs.emails.classList.add('is-invalid')
      } else {
        removeValidation(this.$refs?.emails)
      }
    }

    return {
      email,
      password,
      acessar,
      checkEmail,
      validForm
    }
  }
})

</script>
