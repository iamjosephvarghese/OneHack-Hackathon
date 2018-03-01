<template>
  <v-app>

    <v-navigation-drawer
      persistent
      :mini-variant="miniVariant"
      :clipped="clipped"
      v-model="drawer"
      enable-resize-watcher
      fixed
      app
    >
      <v-list>
        <v-list-tile
          value="true"
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
        >
          <v-list-tile-action>
            <v-icon v-html="item.icon"></v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar
      color="primary"
      app
      :clipped-left="clipped"
    >
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
     <v-toolbar-title v-text="title"></v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
    <v-content>
      <router-view/>
      
    </v-content>
    
    <v-footer :fixed="fixed" app>
      <span>&copy;Copyright 2018</span>
    </v-footer>
    
    <fab
   :position="position"
   :bg-color="bgColor"
   :actions="fabActions"
   :z-index="zin"
   @cache="cache"
   @alertMe="alert"
   @logout="logout"
   @abc="abc"
   @def="def"
   @addmoney="addmoney"
    ></fab>


<!-- dialog    for Food request -->
  <add-food-request :foodreq="foodreq"></add-food-request>
<!-- dialog    for Food Supply -->
     <add-food-supply   :foodsupply="foodsupply"></add-food-supply>

     <add-money :addMoney="addMoney"></add-money>
  </v-app>
  
</template>

<script>
import fab from 'vue-fab'
import firebase from 'firebase'
import AddFoodRequest from '@/components/AddFoodRequest'
import AddFoodSupply from '@/components/AddFoodSupply'
import AddMoney from '@/components/AddMoney'
export default {
  components: {
    fab,
    AddFoodSupply,
    AddFoodRequest,
    AddMoney
  },
  data () {
    return {
      clipped: false,
      drawer: true,
      fixed: false,
      addMoney: false,
      items: [
        {
          icon: 'bubble_chart',
          title: 'Dashboard',
          to: '/'
        },
        {
          icon: 'bubble_chart',
          title: 'Food Requests',
          to: '/foodrequests'
        },
        {
          icon: 'bubble_chart',
          title: 'Foods Available',
          to: '/foods'
        },
        {
          icon: 'bubble_chart',
          title: 'Logout',
          to: '/login'
        }
      ],
      miniVariant: false,
      rightDrawer: false,
      picker: null,
      reactive: true,
      landscape: true,
      foodreq: false,
      foodsupply: false,
      zin: 999,
      dialog: false,
      title: 'Vuetify.js',
      bgColor: '#778899',
          position: 'bottom-right',
          fabActions: [
              {
                  name: 'cache',
                  icon: 'cached'
              },
              {
                  name: 'alertMe',
                  icon: 'add_alert'
              },
              {
                  name: 'def',
                  icon: 'cached'
              },
              {
                  name: 'abc',
                  icon: 'add_alert'
              },
              {
                  name: 'logout',
                  icon: 'add_alert'
              },
              {
                  name: 'addmoney',
                  icon: 'add_alert'
              }
          ]
    }
  },
  name: 'App',
  methods: {
    cache () {
          this.foodreq = true
      },
      alert () {
          alert('Clicked on alert icon')
      },
      addmoney () {
        this.addMoney = true
      },
      abc () {
           this.foodsupply = true
      },
      def () {

      },
      logout () {
        firebase.auth().signOut().then(success => {
          console.log('signout')
          this.$router.replace('/login')
        })
      }
  }
}
</script>
<style>
</style>
