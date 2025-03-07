<script setup lang="ts">
import { ref } from "vue";
import { Validator } from '@/composables/validator';

interface IFormRegister {
  email: string,
  name: string,
  password: string,
  agreement: boolean,
}

const formData = ref<IFormRegister>({
  email: '',
  name: '',
  password: '',
  agreement: false
})

const formValidator = ref(new Validator(formData.value, {
  email: {email: true, required: true},
  name: {required: true},
  password: {required: true, minLength: 8},
  agreement: {required: true}
}))

const passWordIsVisible = ref<boolean>(false)
const registerSuccess = ref<boolean>(false)

function sendForm(){
  formValidator.value.validate()
  if (!formValidator.value.validatorResult.errors){
    console.log('отправка данных регистрации')
    registerSuccess.value = true
  }
}

</script>

<template>
  <div class="container">
    <v-form v-if="!registerSuccess" class="form">
      <h1 class="form__title">Регистрация</h1>
      <div class="from__body">
        <v-text-field
            placeholder="Email"
            v-model="formData.email"
            append-inner-icon="mdi-email"
            @update:modelValue="formValidator.validateField('email')"
            :error-messages="formValidator.validatorResult.validatorFields.email"
        />
        <v-text-field
            placeholder="Имя"
            v-model="formData.name"
            append-inner-icon="mdi-account"
            @update:modelValue="formValidator.validateField('name')"
            :error-messages="formValidator.validatorResult.validatorFields.name"
        />
        <v-text-field
            placeholder="Пароль"
            v-model="formData.password"
            :type="passWordIsVisible ? 'text' : 'password'"
            append-inner-icon="mdi-eye"
            @click:append-inner="passWordIsVisible = !passWordIsVisible"
            @update:modelValue="formValidator.validateField('password')"
            :error-messages="formValidator.validatorResult.validatorFields.password"
        />
        <v-checkbox
            v-model="formData.agreement"
            density="compact"
            label="Соглашаюсь с политикой обработки персональных данных"
            @update:modelValue="formValidator.validateField('agreement')"
            :error-messages="formValidator.validatorResult.validatorFields.agreement"
        />
      </div>
      <div class="form__footer">
        <v-btn @click="sendForm" class="form__btn">
          Зарегистрироваться
        </v-btn>
        <div class="form__links">
          <router-link to="/login">У меня уже есть аккаунт</router-link>
          <router-link to="/recover">Восстановление пароля</router-link>
        </div>
      </div>
    </v-form>

    <v-form v-if="registerSuccess" class="form">
      <h2>Регистрация прошла успешно!</h2>
      <RouterLink to="/login">Перейти к авторизации</RouterLink>
    </v-form>
  </div>
</template>

<style lang="sass" scoped>
.container
  height: 100%
  display: flex
  align-items: center
  justify-content: center

.form
  border: solid 2px
  border-radius: 12px
  max-width: 460px
  width: 100%
  display: flex
  flex-direction: column
  gap: 24px
  padding: 32px

  &__title
    text-align: center

  &__footer
    display: flex
    flex-direction: column
    gap: 16px

  &__btn
    width: 100%

  &__links
    display: flex
    justify-content: space-between
    flex-wrap: wrap
</style>