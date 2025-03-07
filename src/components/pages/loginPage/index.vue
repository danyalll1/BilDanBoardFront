<script setup lang="ts">
import {ref} from "vue";
import {Validator } from "@/composables/validator";
import {useRouter} from "vue-router";

let router = useRouter()
const authModel = ref<{
  email: string,
  password: string,
}>({
  email: 'gkoss@example.com',
  password: 'password',
})

const authFormValidator = ref(new Validator(authModel.value,{
  email: { required : true, email: true},
  password: { required: true, minLength: 8 }
}))

const typeOfPasswordModel = ref<boolean>(true)
const saveMeModel = ref<boolean>()

function togglePassword(){
  typeOfPasswordModel.value = !typeOfPasswordModel.value
}

function authorization(){
  authFormValidator.value.validate()
  if (!authFormValidator.value.validatorResult.errors){
    console.log('авторизация прошла успешно')

    router.push('/')
  }
}
</script>

<template>
  <div class="container">
    <v-form class="form">
      <h1 class="form__title">Авторизация</h1>
      <div class="from__body">
        <v-text-field
          v-model="authModel.email"
          append-inner-icon="mdi-email"
          @update:modelValue="authFormValidator.validateField('email')"
          :error-messages="authFormValidator.validatorResult.validatorFields.email"
        />
        <v-text-field
          v-model="authModel.password"
          :type="typeOfPasswordModel ? 'password' : 'text'"
          :append-inner-icon="typeOfPasswordModel ? 'mdi-eye' : 'mdi-eye-closed'"
          @click:appendInner="togglePassword"
          @update:modelValue="authFormValidator.validateField('password')"
          :error-messages="authFormValidator.validatorResult.validatorFields.password"
        />
        <v-checkbox density="compact" label="Запомнить меня"/>
      </div>
      <div class="form__footer">
        <v-btn @click="authorization" class="form__btn">
          Войти
        </v-btn>
        <div class="form__links">
          <router-link to="/registration">Зарегистрироваться</router-link>
          <router-link to="/recover">Восстановление пароля</router-link>
        </div>
      </div>
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