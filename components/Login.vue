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
      <span v-if="validForm && validForm.email.error.value" class="invalid-feedback">{{ validForm && validForm.email.error.message }}</span>
    </div>
    <div class="mb-3">
      <label for="inputPassword5" class="form-label">Password</label>
      <input
        id="inputPassword5"
        v-model="password"
        type="password"
        data-cy="inputPassword"
        class="form-control"
        aria-labelledby="passwordHelpBlock"
      >
    </div>
    <div class="mb-3">
      <b-button class="btn-submit" :disabled="validForm && validForm.email.error.value" variant="primary" data-cy="submitLogin" @click="acessar()">
        Acessar
      </b-button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
import { useContext, useRouter } from '@nuxtjs/composition-api'
import { storeLogin } from '../store/store'
import { validEmail } from '../utils'

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
  const ref: HTMLElement = document.getElementById('exampleFormControlInput1')
  if (!validEmail(email.value)) {
    validForm.email.error.value = true
    ref.classList.add('is-invalid')
  } else {
    removeValidation(ref)
  }
}
</script>
