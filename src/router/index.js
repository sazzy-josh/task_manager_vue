import { createRouter, createWebHistory } from "vue-router";

// import { Home , About} from "../views";
//             or 
// const Home =  () => import('../views/Home.vue')
// const About = () => import ('../views/About.vue')

const routes = [
    {
        path : '/',
        component : () => import('../views/Home.vue')
    } ,
    {
        path : '/about',
        component :() => import('../views/About.vue')
    }
]

const router = createRouter({
      history : createWebHistory() ,
      routes
})


export default router
