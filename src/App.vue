<template>
  <v-app>
    <vue-particles
        color="#D81B60"
        :particleOpacity="0.7"
        :particlesNumber="80"
        shapeType="circle"
        :particleSize="4"
        linesColor="#dedede"
        :linesWidth="1"
        :lineLinked="true"
        :lineOpacity="0.4"
        :linesDistance="150"
        :moveSpeed="3"
        :hoverEffect="true"
        hoverMode="grab"
        :clickEffect="true"
        clickMode="push"
      >
      </vue-particles>

    <v-navigation-drawer
      v-if="getUser"
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
      <v-toolbar-side-icon  v-if="getUser" @click.stop="drawer = !drawer"></v-toolbar-side-icon>
     <v-toolbar-title v-text="title"></v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
    <v-content>
      <router-view/>
      
    </v-content>
    
    <fab
     v-if="getUser"
   :position="position"
   :bg-color="bgColor"
   :actions="fabActions"
   :z-index="zin"
   @cache="cache"
   @alertMe="alert"
   @logout="logout"
   @abc="abc"
   @addmoney="addmoney"
    ></fab>


<!-- dialog    for Food request -->
  <add-food-request></add-food-request>
<!-- dialog    for Food Supply -->
     <add-food-supply ></add-food-supply>

     <add-money></add-money>
  </v-app>
  
</template>

<script>
import fab from 'vue-fab'
import firebase from 'firebase'
import AddFoodRequest from '@/components/AddFoodRequest'
import AddFoodSupply from '@/components/AddFoodSupply'
import { mapGetters } from 'vuex'
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
      zin: 999,
      dialog: false,
      title: 'ZERO | OneHACK',
      bgColor: '#D81B60 ',
          position: 'bottom-right',
          fabActions: [
              {
                  name: 'cache',
                  icon: 'local_dining'
              },
              {
                  name: 'alertMe',
                  icon: 'monetization_on'
              },
              {
                  name: 'abc',
                  icon: 'local_grocery_store'
              },
              {
                  name: 'logout',
                  icon: 'exit_to_app'
              },
              {
                  name: 'addmoney',
                  icon: 'attach_money'
              }
          ]
    }
  },
  name: 'App',
  methods: {
    cache () {
        // function to request food
          this.$store.commit('TOGGLE_REQUEST')
      },
      alert () {
        // function to request money
          alert('Clicked on alert icon')
      },
      addmoney () {
        // function to add money
        this.$store.commit('TOGGLE_MONEY')
      },
      abc () {
        // function to add food supply
        this.$store.commit('TOGGLE_SUPPLY')
      },
      logout () {
        // function to logout
        firebase.auth().signOut().then(success => {
          console.log('signout')
          this.$store.commit('DEL_USER')
          this.$router.replace('/login')
        })
      }
  },
  computed: {
    ...mapGetters([
      'getUser'
    ])
  },
  mounted () {
    this.user = firebase.auth().currentUser
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        console.log(position.coords)
        this.$store.commit('SET_CURRENT_LOCATION', position.coords)
      })
    }
  }
}
</script>
<style>
#particles-js {
  background-size: cover;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 0;
  height: 100%;
}
</style>
