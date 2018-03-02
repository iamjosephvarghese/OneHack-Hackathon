<template>
  <v-dialog v-model="getRequestModal" persistent max-width="500px">
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
          <v-btn color="blue darken-1" flat v-on:click="cancel">Cancel</v-btn>
          <v-btn color="blue darken-1" flat v-on:click="addFoodReq">Confirm</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
</template>
<script>
import firebase from 'firebase'
import { mapGetters } from 'vuex'
import swal from 'sweetalert'
export default {
  name: 'AddFoodRequest',
  data: () => {
      return {
        reactive: true,
        landscape: true,
        picker: null,
        Quantity: null
     }
  },
  computed: {
      ...mapGetters([
          'getRequestModal'
      ])
  },
  methods: {
    cancel: function () {
        this.$store.commit('TOGGLE_REQUEST')
    },
    addFoodReq: function () {
      var loc = this.$store.getters.getCurrentLocation
      firebase.firestore().collection('foodRequests').doc().set({
          Location: new firebase.firestore.GeoPoint(loc._lat, loc._long),
          timestamp: firebase.firestore.FieldValue.serverTimestamp,
          meals: this.Quantity,
          username: firebase.auth().currentUser.displayName,
          phoneNo: 9495333724,
          name: 'Normal Food'
      }).then(success => {
          swal('Good job!', 'Successfully submitted Food Request', 'success')
          this.foodreq = false
      })
    } 
  }
}
</script>
<style>

</style>
