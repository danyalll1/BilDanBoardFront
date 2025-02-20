import { createRouter, createWebHistory } from 'vue-router'
import { MainPage } from "@/components/pages/mainPage";
import { AccountPage } from  "@/components/pages/accountPage";
import { RegistrationPage } from  "@/components/pages/registrationPage";
import { LoginPage } from  "@/components/pages/loginPage";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: MainPage,
      meta: {
        layout: 'default'
      }
    },
    {
      path: '/login',
      component: LoginPage,
      meta: {
        layout: "clear"
      },
    },
    {
      path: '/recover',
      component: LoginPage,
      meta: {
        layout: "clear"
      },
    },
    {
      path: '/registration',
      component: RegistrationPage,
      meta: {
        layout: "clear"
      },
    },
    {
      path: '/account',
      component: AccountPage,
      meta: {
        layout: 'default'
      }
    }
  ],
})

export default router
