import { createRouter,createWebHistory } from "vue-router";
import DashboardVue from "@/views/Dashboard.vue";
import AboutVue from "@/views/About.vue";
import UserVue from "@/views/User.vue";
import UserDetailVue from "@/views/UserDetail.vue";
import UserProfilVue from "@/views/UserProfil.vue";
import UserPostVue from "@/views/UserPost.vue";
import UserIndexVue from "@/views/UserIndex.vue";

const routes = [
    {
        path: '/',
        component: DashboardVue
    },
    {
        path: '/about',
        component : AboutVue
    },
    {
        path: '/user',
        component : UserVue
    },
    // {
    //     path: '/user/:name',
    //     component : UserDetailVue
    // },
    // {
    //     path: '/user/:name/profil',
    //     component : UserProfilVue
    // },
    // {
    //     path: '/user/:name/posts',
    //     component : UserPostVue
    // }
    {
        path: '/user/:name',
        component: UserIndexVue,
        children:[
            {
                path : "",
                component: UserDetailVue
            },
            {
                path: '/user/:name/profil',
                component: UserProfilVue
            },
            {
                path:'/user/:name/posts',
                component: UserPostVue
            }
        ]
    }
]

const router = createRouter({
    history : createWebHistory(),
    routes
})

export default router