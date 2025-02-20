<script setup lang="ts">
import {ref} from "vue";

const authModel = ref<{
  email: string,
  password: string,
}>({
  email: 'gkoss@example.com',
  password: 'password',
})

const typeOfPasswordModel = ref<boolean>(true)
const saveMeModel = ref<boolean>()

function togglePassword(){
  typeOfPasswordModel.value = !typeOfPasswordModel.value
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
        />
        <v-text-field
          v-model="authModel.password"
          :type="typeOfPasswordModel ? 'password' : 'text'"
          :append-inner-icon="typeOfPasswordModel ? 'mdi-eye' : 'mdi-eye-closed'"
          @click:appendInner="togglePassword"
        />
        <v-checkbox density="compact" label="Запомнить меня"></v-checkbox>
      </div>
      <div class="form__footer">
        <v-btn class="form__btn">
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