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
      <span>&copy;copyRight 2017</span>
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
></fab>


<!-- dialog    for Food request -->
     <v-dialog v-model="foodreq" persistent max-width="500px">
      <v-card>
        <v-card-title>
          <span class="headline">User Profile</span>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
              <v-flex xs12 sm6 md4>
                <v-text-field label="Quantity Required" hint="No of Plates Required" required></v-text-field>
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
          <v-btn color="blue darken-1" flat @click.native="foodreq = false">Cancel</v-btn>
          <v-btn color="blue darken-1" flat @click.native="foodreq = false">Confirm</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

<!-- dialog for request ends -->

<v-dialog v-model="dialog" persistent max-width="500px">
      <v-card>
        <v-card-title>
          <span class="headline">User Profile</span>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
              <v-flex xs12 sm6 md4>
                <v-text-field label="Legal first name" required></v-text-field>
              </v-flex>
              <v-flex xs12 sm6 md4>
                <v-text-field label="Legal middle name" hint="example of helper text only on focus"></v-text-field>
              </v-flex>
              <v-flex xs12 sm6 md4>
                <v-text-field
                  label="Legal last name"
                  hint="example of persistent helper text"
                  persistent-hint
                  required
                ></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field label="Email" required></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field label="Password" type="password" required></v-text-field>
              </v-flex>
              <v-flex xs12 sm6>
                <v-select
                  label="Age"
                  required
                  :items="['0-17', '18-29', '30-54', '54+']"
                ></v-select>
              </v-flex>
              <v-flex xs12 sm6>
                <v-select
                  label="Interests"
                  multiple
                  autocomplete
                  chips
                  :items="['Skiing', 'Ice hockey', 'Soccer', 'Basketball', 'Hockey', 'Reading', 'Writing', 'Coding', 'Basejump']"
                ></v-select>
              </v-flex>
            </v-layout>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" flat @click.native="dialog = false">Close</v-btn>
          <v-btn color="blue darken-1" flat @click.native="dialog = false">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

         </v-app>
  
</template>

<script>
import fab from 'vue-fab'
import firebase from 'firebase'
export default {
  components: {
    fab
  },
  data () {
    return {
      clipped: false,
      drawer: true,
      fixed: false,
      items: [{
        icon: 'bubble_chart',
        title: 'Inspire'
      }],
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
              }
          ]
    }
  },
  name: 'App',
  methods: {
    cache () {
          this.foodreq = true
          console.log('he')
          this.zin = 10
      },
      alert () {
          alert('Clicked on alert icon')
      },
      abc () {

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
