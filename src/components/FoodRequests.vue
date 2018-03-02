<template>
  <v-container fluid>
    <h2>Foods Requests</h2>

    <v-slide-y-transition v-for="(item,option) in cardData" :key="option+item" mode="out-in">
      <v-card>
        <v-card-title primary-title>
          <v-layout row>  
            <v-flex xs8>
              <h3 class="headline mb-0">{{item.name}}</h3>
              <div> <strong>PhoneNo : </strong> {{item.phoneNo}}</div>
              <div> <strong>Provider : </strong> {{item.username}}</div>
            </v-flex> 
            <v-flex xs4>
              <h2>Quantity: {{item.meals}}</h2>
            </v-flex> 
          </v-layout>
        </v-card-title>
        <v-card-actions>
          <v-btn flat color="orange">Accept</v-btn>
          <a :href="`http://maps.google.com/?q=${item.Location._lat},${item.Location._long}`"><v-btn flat color="orange">View in Google Maps</v-btn></a>
        </v-card-actions>
      </v-card>
    </v-slide-y-transition>
  </v-container>
</template>

<script>
import firebase from 'firebase'
export default {
  name: 'FoodRequests',
  data: () => {
    return {
      cardData: []
    }
  },
  mounted () {
    firebase.firestore().collection('foodRequests').get().then(querySnapshot => {
      querySnapshot.forEach(doc => {
        this.cardData.push(doc.data())
      })
    })
  }
}
</script>
<style>
.card {
  margin-top: 1rem;
}
</style>
