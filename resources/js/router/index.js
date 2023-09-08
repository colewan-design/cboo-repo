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
                    title: `Dashboard`,
                    role: 'admin'
                    // roles: ['admin', 'manager', 'employee']
                }
            },
            {
                name: "profile",
                path: '/profile',
                component: Profile,
                meta: {
                    title: `Profile`,
                    role: 'employee'
                }
            },
            {
                name: "employee",
                path: '/employee',
                component: Employee,
                meta: {
                    title: `Employee`,
                    role: 'admin'
                }
            },
            {
                name: "salarygrade",
                path: '/salarygrade',
                component: SalaryGrade,
                meta: {
                    title: `SalaryGrade`,
                    role: 'admin'
                }
            },
            {
                name: "report",
                path: '/report',
                component: Report,
                meta: {
                    title: `Report`,
                    role: 'admin'
                }
            }
        ]
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

// Implement a route guard to check roles and permissions
router.beforeEach((to, from, next) => {
    document.title = to.meta.title
    if (to.meta.middleware == "guest") {
        if (store.state.auth.authenticated) {
            next({ name: "dashboard" })
        }
        next()
    } else {
        if (store.state.auth.authenticated) {
            // Check if the user has the required role to access the route
            const userRole = store.state.auth.user.role;
            const requiredRole = to.meta.role;

            if (requiredRole && userRole !== requiredRole) {
                // User doesn't have the required role, redirect to a different route or show an error message
                next({ name: "dashboard" }); // You can customize this behavior
            } else {
                next();
            }
        } else {
            next({ name: "login" })
        }
    }
})

export default router
