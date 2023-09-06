import { createWebHistory, createRouter } from 'vue-router'
import store from '@/store'

/* Guest Component */
const Login = () => import('@/components/Login.vue')
const Register = () => import('@/components/Register.vue')
/* Guest Component */

/* Layouts */
const DahboardLayout = () => import('@/components/layouts/Default.vue')
/* Layouts */

/* Authenticated Component */
const Dashboard = () => import('@/components/Dashboard.vue')
const Profile = () => import('@/components/Profile.vue')
const Employee = () => import('@/components/Employee.vue')
const Report = () => import('@/components/Report.vue')
const SalaryGrade = () => import('@/components/SalaryGrade.vue')
/* Authenticated Component */



const routes = [
    {
        name: "login",
        path: "/login",
        component: Login,
        meta: {
            middleware: "guest",
            title: `Login`
        }
    },
    {
        name: "register",
        path: "/register",
        component: Register,
        meta: {
            middleware: "guest",
            title: `Register`
        }
    },
    {
        path: "/",
        component: DahboardLayout,
        meta: {
            middleware: "auth"
        },
        children: [
            {
                name: "dashboard",
                path: '/',
                component: Dashboard,
                meta: {
                    title: `Dashboard`
                }
            },
            {
                name: "profile",
                path: '/profile',
                component: Profile,
                meta: {
                    title: `Profile`
                }
            },
            {
                name: "employee",
                path: '/employee',
                component: Employee,
                meta: {
                    title: `Employee`
                }
            },
            {
                name: "salarygrade",
                path: '/salarygrade',
                component: SalaryGrade,
                meta: {
                    title: `SalaryGrade`
                }
            },
            {
                name: "report",
                path: '/report',
                component: Report,
                meta: {
                    title: `Report`
                }
            }
        ]
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes, // short for `routes: routes`
})

router.beforeEach((to, from, next) => {
    document.title = to.meta.title
    if (to.meta.middleware == "guest") {
        if (store.state.auth.authenticated) {
            next({ name: "dashboard" })
        }
        next()
    } else {
        if (store.state.auth.authenticated) {
            next()
        } else {
            next({ name: "login" })
        }
    }
})

export default router