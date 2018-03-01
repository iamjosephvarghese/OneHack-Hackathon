<template>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-toolbar dark color="primary">
                <v-toolbar-title>Login </v-toolbar-title>
                <v-spacer></v-spacer>
              </v-toolbar>
              <v-card-text>
                <v-form>
                     <v-alert
                        type="error"
                        :value="logindata"
                        transition="scale-transition"
                        >
                        {{logindata}}
                    </v-alert>
                  <v-text-field v-model="email" prepend-icon="person" name="login" label="Email" type="email"></v-text-field>
                  <v-text-field v-model="password" prepend-icon="lock" name="password" label="Password" id="password" type="password"></v-text-field>
                  <v-select 
                   prepend-icon="lock"
                  label="User"
                  autocomplete
                  chips
                  v-model="usertype"
                  :items="['NGO','User']"
                ></v-select>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn v-on:click="login" color="primary">Login</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
</template>
<script>
import firebase from 'firebase'
require('firebase/firestore')
  export default {
    data: () => ({
      drawer: null,
      email: null,
      password: null,
      usertype: null,
      logindata: null
    }),
    props: {
      source: String
    },
    methods: {
        login: function () {
            console.log('login')
            if (this.email && this.password && this.usertype) {
                 firebase.auth().signInWithEmailAndPassword(this.email, this.password)
                .then(success => {
                    this.$store.commit('SET_USERTYPE', this.usertype)
                    this.$router.replace('/')
                    console.log(success)
                }).catch((error) => {
                    console.log(error)
                    this.logindata = error.message
                })
            } else {
                this.logindata = 'Enter all the details'
            }
        }
    }
  }
</script>
<style scoped>

</style>
