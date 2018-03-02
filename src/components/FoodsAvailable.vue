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
          <v-btn v-on:click="openModal(item)" flat color="orange">Accept</v-btn>
          <a :href="`http://maps.google.com/?q=${item.Location._lat},${item.Location._long}`"><v-btn flat color="orange">View in Google Maps</v-btn></a>
        </v-card-actions>
      </v-card>
    </v-slide-y-transition>
<v-dialog v-model="dialog" persistent max-width="500px">
      <v-card>
        <v-card-title>
          <span class="headline">Please Confirm your details before Accepting</span>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
              <v-flex xs12 sm6 md4>
                <v-text-field label="Target People" required></v-text-field>
              </v-flex>
              <v-flex xs12 sm6 md4>
                <v-text-field label="Mobile Number"></v-text-field>
              </v-flex>
            </v-layout>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" flat @click.native="dialog = false">Close</v-btn>
          <v-btn color="blue darken-1" flat @click.native="dialog = false">CONFIRM</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>
<script>
import firebase from 'firebase'
export default {
  name: 'FoodsAvailable',
  data: () => {
    return {
      cardData: [],
      dialog: false,
      modalData: null
    }
  },
  methods: {
    openModal: function (item) {
      this.dialog = true
       this.modalData = item
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

.card {
  margin-top: 1rem;
}
</style>
