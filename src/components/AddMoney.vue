<template>
  <v-dialog v-model="getMoneyModal" persistent max-width="500px">
      <v-card>
        <v-card-title>
          <span class="headline">Supplier Profile</span>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
                <v-flex>
                    <v-text-field v-model="totalamount" label="Amount" hint="Rupees Donated" required></v-text-field>
                </v-flex>
            </v-layout>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" flat v-on:click="cancel">Cancel</v-btn>
          <v-btn color="blue darken-1" flat v-on:click="payMoney">Pay</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
</template>

<script>
import firebase from 'firebase'
import swal from 'sweetalert'
import { mapGetters } from 'vuex'
export default {
  name: 'AddMoney',
  data: () => {
      return {
        reactive: true,
        landscape: true,
        picker: null,
        totalamount: null
     }
  },
  computed: {
      ...mapGetters([
          'getMoneyModal'
      ])
  },
  methods: {
      cancel: function () {
          this.$store.commit('TOGGLE_MONEY')
      },
      payMoney: function () {
          firebase.firestore().collection('money').add({
              amount: this.totalamount
          }).then(success => {
              swal('GoodJob', 'Thanks for trusting us', 'success')
          }).catch(err => {
              swal('Sorry Error', err.message, 'error')
          })
      }
  }
}
</script>
