import { createRouter, createWebHistory } from 'vue-router'
import AuthPage from "@/components/pages/authPage.vue";
import MainPage from "@/components/pages/mainPage.vue";
import AccountPage from "@/components/pages/accountPage.vue";

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
      path: '/auth',
      component: AuthPage,
      meta: {
        layout: "clear"
      }
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
