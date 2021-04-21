import {createWebHistory, createRouter} from 'vue-router'

import Home from '../pages/Home'
import Directory from '../pages/Directory'
import Profile from '../pages/Profile'
import NewSample from '../pages/NewSample'
import SampleProfile from '../pages/SampleProfile'

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
    },
    {
        name:'newSample',
        path:'/newSample',
        component: NewSample
    },
    {
        name:'SampleProfile',
        path:'/sampleprofile',
        component: SampleProfile
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;