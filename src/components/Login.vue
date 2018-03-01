<template>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-toolbar dark color="primary">
                <v-toolbar-title>Login form</v-toolbar-title>
                <v-spacer></v-spacer>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field v-model="email" prepend-icon="person" name="login" label="Email" type="email"></v-text-field>
                  <v-text-field v-model="password" prepend-icon="lock" name="password" label="Password" id="password" type="password"></v-text-field>
                  <v-select
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
      usertype: null
    }),
    props: {
      source: String
    },
    methods: {
        login: function () {
            console.log('login')
            firebase.auth().signInWithEmailAndPassword(this.email, this.password)
            .then(success => {
                this.$store.commit('SET_USERTYPE', this.usertype)
                this.$router.replace('/')
                console.log(success)
            }).catch(function (error) {
                console.log(error)
            })
        }
    }
  }
</script>
<style scoped>

</style>
