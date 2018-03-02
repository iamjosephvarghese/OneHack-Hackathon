<template>
  <v-container fluid>
    <h2>Notifications</h2>

    <v-slide-y-transition v-for="(item,option) in notifications" :key="option+item" mode="out-in">
      <v-card>
        <v-card-title primary-title>
          <v-layout row>  
            <v-flex xs8>
              <h3 class="headline mb-0">{{item.title}}</h3>
              <div> {{item.message}}}</div>
              <div> Time:  {{item.footer}}</div>
            </v-flex> 
          </v-layout>
        </v-card-title>
      </v-card>
    </v-slide-y-transition>
  </v-container>
</template>

<script>
import firebase from 'firebase'
export default {
  name: 'Notifications',
  data: () => {
      return {
          notifications: null
      }
  },
  methods: {

  },
  mounted () {
      firebase.firestore().collection('Users').doc(firebase.auth().currentUser.uid).collection('notifications').get().then(querysnapshot => {
          this.notifications = []
         console.log(querysnapshot.size)
          querysnapshot.forEach(doc => {
              this.notifications.push(doc.data())
          })
      }).catch(err => console.log(err))
  }
}
</script>
<style>

</style>
