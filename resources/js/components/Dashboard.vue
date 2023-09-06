<template>
    <v-container>
      <v-row>
        <v-col cols="4">
          <v-card style="height: 150px;">
            Box1
          </v-card>
        </v-col>
        <v-col cols="8">
          <v-card style="height: 150px;">
            <v-container>
                <v-row>
                    text heading 1
                </v-row>
                <v-row>
                    sub text heading 1
                </v-row>
                <v-row>
                    <v-col>
                      <v-container>
                        <v-row>
                            <v-card width="30">
                                <v-icon class="mdi-spin">
                                    mdi-chart-line-variant
                                </v-icon>
                            </v-card>
                            Text
                        </v-row>
                      </v-container>
                    </v-col>
                    <v-col>
                      <v-container>
                        <v-row>
                            <v-card width="30">
                                <v-icon>
                                    mdi-chart-line-variant
                                </v-icon>
                            </v-card>
                            Text
                        </v-row>
                      </v-container>
                    </v-col>
                    <v-col>
                      <v-container>
                        <v-row>
                            <v-card width="30">
                                <v-icon>
                                    mdi-chart-line-variant
                                </v-icon>
                            </v-card>
                            Text
                        </v-row>
                      </v-container>
                    </v-col>
                    <v-col>
                      <v-container>
                        <v-row>
                            <v-card width="30">
                                <v-icon>
                                    mdi-chart-line-variant
                                </v-icon>
                            </v-card>
                            Text
                        </v-row>
                      </v-container>
                    </v-col>
                </v-row>
            </v-container>
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="4">
          <v-card style="height: 340px;">
            Box3
          </v-card>
        </v-col>
        <v-col cols="4">
          <v-card style="height: 340px;">
            Box4
          </v-card>
        </v-col>
        <v-col cols="4">
          <v-container>
            <v-row>
              <v-col cols="6">
                <v-card style="height: 150px;">
                  Box5
                </v-card>
              </v-col>
              <v-col cols="6">
                <v-card style="height: 150px;">
                  Box6
                </v-card>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="6">
                <v-card style="height: 150px;">
                  Box7
                </v-card>
              </v-col>
              <v-col cols="6">
                <v-card style="height: 150px;">
                  Box8
                </v-card>
              </v-col>
            </v-row>
          </v-container>
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