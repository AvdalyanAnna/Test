// default
import Vue from "vue";
import Router from "vue-router";

Vue.use(Router)


// Routering
const router = new Router({
    mode: 'history',
    routes:[
        {
            path:"/",
            name:"Home",
            component:() => import(/* webpackChunkName: "about" */ '@/pages/Home')
        },
        {
            path:"/confirmation",
            name:"Confirmation",
            component:() => import(/* webpackChunkName: "about" */ '@/pages/Confirmation')
        },
        {
            path:"/new",
            name:"New",
            component:() => import(/* webpackChunkName: "about" */ '@/pages/New')
        },
        {
            path:"*",
            name:"NotFound",
            component:() => import(/* webpackChunkName: "about" */ '@/pages/404')
        }

    ]


})
export default router
