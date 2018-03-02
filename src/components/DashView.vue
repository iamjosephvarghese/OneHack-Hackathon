<template>
  <v-container fluid>
    <v-card>
      <img src="../assets/zero.svg" class="logp" alt="">
    <h1>Total Amount Collected </h1>
    <h2 class="amount">₹{{amount}}
      </h2></v-card>

      <v-card>
    <h1>Leaderboard </h1>
    <v-flex>
      <v-data-table
    :headers="headers"
    :items="items"
    hide-actions
    class="elevation-1"
  >
    <template slot="items" slot-scope="props">
      <td>{{ props.item.name }}</td>
      <td class="text-xs-right">{{ props.item.work }}</td>
      <td class="text-xs-right">{{ props.item.money }}</td>
      <td class="text-xs-right">{{ props.item.points }}</td>
    </template>
  </v-data-table>
  </v-flex>
    </v-card>
  </v-container>
</template>
<script>
import firebase from 'firebase'
export default {
  name: 'DashView',
  data: () => {
    return {
      amount: 0,
      headers: [
          {
            text: 'Person',
            align: 'left',
            sortable: false,
            value: 'name'
          },
          { text: 'Work Done', value: 'work' },
          { text: 'Money Donated', value: 'money' },
          { text: 'Points', value: 'points' }
        ],
        items: [
          {
            value: false,
            name: 'Franklin Antony',
            work: 10,
            money: 10,
            points: 20
          },
          {
            value: false,
            name: 'Joseph Mathew',
            work: 10,
            money: 30,
            points: 40
          },
          {
            value: false,
            name: 'Joseph Varghese',
            work: 10,
            money: 40,
            points: 50
          },
          {
            value: false,
            name: 'Kiran Anto',
            work: 100,
            money: 100,
            points: 200
          }
        ]
    }
  },
  mounted () {
    firebase.firestore().collection('money').get().then(querysnapshot => {
      querysnapshot.forEach(doc => {
        this.amount += parseInt(doc.data().amount)
      })
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
  margin-left: 1rem;
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
.amount {
  font-size: 5rem;
  margin-left: 2rem;
}
.card {
  margin-top: 1rem;
}
.logp {
  width: 18rem;
  margin-left: 2rem;
}
</style>
