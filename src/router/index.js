import {createWebHistory, createRouter} from 'vue-router'

import Home from '../pages/Home'
import Directory from '../pages/Directory'
import Profile from '../pages/Profile'

const routes = [
    {
        name: 'home',
        path: '/home',
        component: Home
    },
    {
        path: '/',
        component: Home
    },
    {
        name:'directory',
        path:'/directory',
        component: Directory
    },
    {
        name:'profile',
        path:'/profile',
        component: Profile
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;