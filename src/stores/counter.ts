import {ref, computed} from 'vue'
import {defineStore} from 'pinia'

export const useUserStore = defineStore('user', () => {
    const user = ref<{
        id: number,
        firstName: string
        lastName: string,
        phone: string,
        email: string,
        city: {
            id: string,
            name: string,
            slug: string
        },
        location: string
    }>()

    function getUser(){

    }

    function logout(){
        
    }

    return {}
})
