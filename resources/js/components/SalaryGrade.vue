<template>
    <v-container>
     <v-row>
         <v-col>
            Salary Grade Page 
         </v-col>
     </v-row>
    
    </v-container>
 </template>
 
 <script>
 export default {
     name:"dashboard",
     data(){
         return {
             user:this.$store.state.auth.user,
         }
     }
 }
 </script>