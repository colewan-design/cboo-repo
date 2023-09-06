<template>
    <div>
        <nav class="navbar navbar-expand-lg">
            <div class="container-fluid">
                <a class="navbar-brand" target="_blank">CBOO</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul class="navbar-nav me-auto">
                        <li class="nav-item">
                            <router-link :to="{name:'dashboard'}" class="nav-link">Home</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link :to="{name:'employee'}" class="nav-link">Employees</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link :to="{name:'report'}" class="nav-link">Reports</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link :to="{name:'salarygrade'}" class="nav-link">Salary Grades</router-link>
                        </li>

                    </ul>
                    <div class="d-flex">
                        <ul class="navbar-nav">
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    {{ user.name }}
                                </a>
                                <div class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownMenuLink">
                                    <router-link class="dropdown-item" :to="{name:'profile'}">Profile</router-link>
                                    <a class="dropdown-item" href="javascript:void(0)" @click="logout">Logout</a>
                                 
                                </div>  
                               
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
        <main class="mt-3">
            <router-view></router-view>
        </main>
    </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
    name:"default-layout",
    data(){
        return {
            user:this.$store.state.auth.user
        }
    },
    computed: {
        // Compute the current route text based on the route name
        currentRouteText() {
            return (routeName) => {
                // Check if the current route matches the provided route name
                if (this.$route.name === routeName.toLowerCase()) {
                    return "<span class='sr-only'>(current)</span>";
                }
                return "";
            };
        },
    },
    methods:{
        ...mapActions({
            signOut:"auth/logout"
        }),
        async logout(){
            await axios.post('/logout').then(({data})=>{
                this.signOut()
                this.$router.push({name:"login"})
            })
        }
    }
}
</script>