import { createRouter, createWebHistory } from "vue-router";

import { Home , About} from "../views";


const routes = [
    {
        path : '/',
        component : Home
    } ,
    {
        path : '/about',
        component : About
    }
]

const router = createRouter({
      history : createWebHistory() ,
      routes
})


export default router
