<template>
    <v-container>
      <v-row>
        <v-col cols="3">
          <v-card style="height: 150px;">
            Box1
          </v-card>
        </v-col>
        <v-col cols="3">
          <v-card style="height: 150px;">
            Box2
          </v-card>
        </v-col>
        <v-col cols="6">
          <v-card style="height: 150px;">
            Box3
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="6">
          <v-card style="height: 340px;">
            Box3
          </v-card>
        </v-col>
        <v-col cols="6">
          <v-card style="height: 340px;">
            Box4
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