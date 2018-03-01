<template>
  <v-dialog v-model="addMoney" persistent max-width="500px">
      <v-card>
        <v-card-title>
          <span class="headline">Supplier Profile</span>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
                <v-flex>
                    <v-text-field label="Amount" hint="Rupees Donated" required></v-text-field>
                </v-flex>
            </v-layout>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" flat @click.native="addMoney = false">Cancel</v-btn>
          <v-btn color="blue darken-1" flat @click.native="addMoney = false">Pay</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
</template>

<script>
export default {
  props: ['addMoney'],
  name: 'AddMoney',
  data: () => {
      return {
        reactive: true,
        landscape: true,
        picker: null
     }
  }
}
</script>
