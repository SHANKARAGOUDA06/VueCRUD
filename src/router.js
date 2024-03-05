import SignUp from "./components/SignUp.vue"
import SignIn from "./components/SignIn.vue"
import DashBoard from "./components/DashBoard.vue"
import { createRouter, createWebHistory } from "vue-router"

const routes = [
    {
        path:'/',
        component:SignUp
    },
    {
        path:'/SignIn',
        component:SignIn
    },
    {
        path:'/DashBoard',
        component:DashBoard
    }
]

const router=createRouter({
    history:createWebHistory(),
    routes
})
export default router