import Vue from 'vue'
import VueRouter from "vue-router";

Vue.use(VueRouter)

const router = new VueRouter({

    routes: [
        {
            path: "/",
            component: () => import("@/views/Index.vue"),
            meta: {
                title: '问卷首页'
            }
        }, {
            path: "/index",
            component: () => import("@/views/Index.vue"),
            meta: {
                title: '问卷首页'
            }
        }, {
            path: '/login',
            component: () => import("@/views/Login.vue"),
            meta: {
                title: '登录页面'
            }

        }, {
            path: '/register',
            component: () => import("@/views/Register.vue"),
            meta: {
                title: '注册页面'
            }
        }, {
            path: '/home',
            component: () => import("@/views/home.vue"),
            meta: {
                title: '数据管理'
            }
        }
    ]
})
export default router