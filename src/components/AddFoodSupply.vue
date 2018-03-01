<template>
  <v-dialog v-model="foodsupply" persistent max-width="500px">
      <v-card>
        <v-card-title>
          <span class="headline">Supplier Profile</span>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
              <v-flex xs12 sm6 md4>
                <v-text-field label="Quantity Available" hint="No of Plates Required" required></v-text-field>
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
          <v-btn color="blue darken-1" flat @click.native="foodsupply = false">Cancel</v-btn>
          <v-btn color="blue darken-1" flat @click.native="foodsupply = false">Confirm</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
</template>

<script>
export default {
  props: ['foodsupply'],
  name: 'AddFoodSupply',
  data: () => {
      return {
        reactive: true,
        landscape: true,
        picker: null
     }
  },
  mounted () {
      console.log(this.foodsupply)
  }
}
</script>
