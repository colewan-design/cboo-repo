<template>
    <v-container>
     <v-row>
         <v-col>
            Employee Page 
         </v-col>
     </v-row>
     <v-row>
        <v-col cols="12">
            <v-table>
                <thead>
                <tr>
                    <th class="text-left">
                    Name
                    </th>
                    <th class="text-left">
                    Calories
                    </th>
                    <th class="text-left">
                    Manage
                    </th>
                </tr>
                </thead>
                <tbody>
                <tr
                    v-for="item in desserts"
                    :key="item.name"
                >
                    <td>{{ item.name }}</td>
                    <td>{{ item.calories }}</td>
                    <td>
                        <v-container>
                            <v-row>
                                <v-cols cols="2">
                                    <v-icon size="18">
                                        mdi-account-edit
                                    </v-icon>
                                </v-cols>
                                <v-cols cols="2">
                                    <v-icon size="18">
                                        mdi-file-document
                                    </v-icon>
                                </v-cols>
                                <v-cols cols="2">
                                    <v-icon size="18">
                                        mdi-delete
                                    </v-icon>
                                </v-cols>
                            </v-row>
                        </v-container>
                    </td>
                </tr>
                </tbody>
            </v-table>
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
             desserts: [
                {
                    name: 'Frozen Yogurt',
                    calories: 159,
                },
                {
                    name: 'Ice cream sandwich',
                    calories: 237,
                },
                {
                    name: 'Eclair',
                    calories: 262,
                },
                {
                    name: 'Cupcake',
                    calories: 305,
                },
                {
                    name: 'Gingerbread',
                    calories: 356,
                },
                {
                    name: 'Jelly bean',
                    calories: 375,
                },
                {
                    name: 'Lollipop',
                    calories: 392,
                },
                {
                    name: 'Honeycomb',
                    calories: 408,
                },
                {
                    name: 'Donut',
                    calories: 452,
                },
                {
                    name: 'KitKat',
                    calories: 518,
                },
            ],
         }
     }
 }
 </script>