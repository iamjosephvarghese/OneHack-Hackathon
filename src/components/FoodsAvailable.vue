<template>
  <v-container fluid>
    <h2>Foods Available</h2>

    <v-slide-y-transition v-for="(item,option) in cardData" :key="option+item" mode="out-in">
      <v-card>
        <v-card-title primary-title>
          <v-layout row>  
            <v-flex xs8>
              <h3 class="headline mb-0">{{item.heading}}</h3>
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
  name: 'FoodsAvailable',
  data: () => {
    return {
      cardData: []
    }
  },
  mounted () {
    firebase.firestore().collection('foodavailable').get().then(querySnapshot => {
      querySnapshot.forEach(doc => {
        this.cardData.push(doc.data())
      })
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
