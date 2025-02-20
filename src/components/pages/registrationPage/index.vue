<script setup lang="ts">

</script>

<template>
  <div class="container">
    <v-form class="form">
      <h1 class="form__title">Регистрация</h1>
      <div class="from__body">
        <v-text-field append-inner-icon="mdi-email"/>
        <v-text-field append-inner-icon="mdi-account"/>
        <v-text-field append-inner-icon="mdi-eye"/>
        <v-checkbox density="compact" label="Запомнить меня"></v-checkbox>
      </div>
      <div class="form__footer">
        <v-btn class="form__btn">
          Зарегистрироваться
        </v-btn>
        <div class="form__links">
          <router-link to="/login">У меня уже есть аккаунт</router-link>
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