import type { menuLink } from './types.ts'

const menuList:menuLink[] = [
    {
        link:'#',
        text:'ссылка',
        permission: 0
    },
    {
        link:'#',
        text:'ссылка',
        permission: 0
    },
    {
        link:'/account',
        text:'Личный кабинет',
        permission: 0
    },
    {
        link:'/auth',
        text:'Авторизация',
        permission: 0
    },
]

export { menuList }