<template>
    <v-container>
        <v-row>
            <v-col cols="12">
                <v-card
                    class="mx-auto"
                    max-width="1000"
                    variant="outlined"
                >
                    <v-card-item>
                    <div>
                        <div class="text-overline mb-1">
                        {{user.name}}
                        </div>
                        <div class="text-h6 mb-1">
                        {{user.email}}
                        </div>
                        <div class="text-caption">Position</div>
                    </div>
                    </v-card-item>

                    <v-card-actions>
                    <v-btn variant="outlined">
                        See more
                    </v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
 </template>
 
 <script>
 export default {
     name:"dashboard",
     data(){
         return {
             user:this.$store.state.auth.user
         }
     }
 }
 </script>