<template>
  <v-dialog v-model="foodreq" persistent max-width="500px">
      <v-card>
        <v-card-title>
          <span class="headline">User Profile</span>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
              <v-flex xs12 sm6 md4>
                <v-text-field v-model="Quantity" label="Quantity Required" hint="No of Plates Required" required></v-text-field>
              </v-flex>
             <v-flex xs12 sm6>
                <v-select
                  label="Timing Slot"
                  required
                  :items="['Breakfast', 'Lunch', 'Dinner']"
                ></v-select>
              </v-flex>
          
              <v-date-picker v-model="picker" :landscape="landscape" :reactive="reactive"></v-date-picker>
            </v-layout>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" flat @click.native="foodreq = false">Cancel</v-btn>
          <v-btn color="blue darken-1" flat v-on:click="addFoodReq">Confirm</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
</template>
<script>
import firebase from 'firebase'
export default {
  name: 'AddFoodRequest',
  props: ['foodreq'],
  data: () => {
      return {
        reactive: true,
        landscape: true,
        picker: null,
        Quantity: null
     }
  },
  methods: {
    addFoodReq: function () {
      var loc = this.$store.getters.getCurrentLocation
      firebase.firestore().collection('foodRequests').doc().set({
          Location: new firebase.firestore.GeoPoint(loc._lat, loc._long),
          meals: this.Quantity,
          name: 'Normal Food'
      }).then(success => {
          console.log('success')
          this.foodreq = false
      })
    } 
  }
}
</script>
<style>

</style>
