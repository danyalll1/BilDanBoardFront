<script setup lang="ts">
import {ref} from "vue";
import  {axiosInstance} from "@/api/apiClass.ts";


const model = ref<{
  email: string,
  password: string,
}>({
  email: 'gkoss@example.com',
  password: 'password',
})

async function auth(){
  axiosInstance.post('/auth/login', model.value)
      .then((res)=>{
        console.log(res);
      })
}
</script>

<template>
  <form class="form">
    <v-text-field
        v-model="model.email"
        placeholder="Email"
        type="email"
    />
    <v-text-field
        v-model="model.password"
        placeholder="Пароль"
        type="password"
    />
    <v-btn
        class="form__btn"
        text="Авторизация"
        @click="auth"
    />
  </form>
</template>

<style lang="sass" scoped>

</style>