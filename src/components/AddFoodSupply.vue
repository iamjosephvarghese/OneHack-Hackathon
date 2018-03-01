<template>
  <v-dialog v-model="getSupplyModal" persistent max-width="500px">
      <v-card>
        <v-card-title>
          <span class="headline">Supplier Profile</span>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
              <v-flex xs12 sm6 md4>
                <v-text-field v-model="Quantity" label="Quantity Available" hint="No of Plates Required" required></v-text-field>
              </v-flex>
             <v-flex xs12 sm6>
                <v-select
                  label="Timing Slot"
                  required
                  :items="['Breakfast', 'Lunch', 'Dinner']"
                ></v-select>
              </v-flex>
          
              <v-date-picker v-model="picker" :landscape="landscape" :reactive="reactive"></v-date-picker>
          
              
              <!-- <v-flex xs12 sm6>
                <v-select
                  label="Interests"
                  multiple
                  autocomplete
                  chips
                  :items="['Skiing', 'Ice hockey', 'Soccer', 'Basketball', 'Hockey', 'Reading', 'Writing', 'Coding', 'Basejump']"
                ></v-select> -->
              <!-- </v-flex> -->
            </v-layout>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" flat v-on:click="cancel">Cancel</v-btn>
          <v-btn color="blue darken-1" flat v-on:click="Afoodsupply">Confirm</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
</template>

<script>
import firebase from 'firebase'
import swal from 'sweetalert'
import { mapGetters } from 'vuex'
export default {
  name: 'AddFoodSupply',
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
          'getSupplyModal'
      ])
  },
  methods: {
      cancel: function () {
          this.$store.commit('TOGGLE_SUPPLY')
      },
      Afoodsupply: function () {
          var loc = this.$store.getters.getCurrentLocation
          firebase.firestore().collection('foodavailable').add({
            Location: new firebase.firestore.GeoPoint(loc._lat, loc._long),
            meals: this.Quantity,
            // timestamp: firebase.firestore.FieldValue.serverTimestamp,
            name: 'Normal Food'
          }).then(success => {
              swal('Good job!', 'Successfully submitted Food Supply', 'success')
          })
      }
  },
  mounted () {
  }
}
</script>
