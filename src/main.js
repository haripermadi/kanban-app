// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import * as firebase from 'firebase'

const config = {
  apiKey: 'AIzaSyCbuCZPE9M6bn_OZ49hUM0bp1uLZCzG2Tw',
  authDomain: 'kanban-c9606.firebaseapp.com',
  databaseURL: 'https://kanban-c9606.firebaseio.com',
  projectId: 'kanban-c9606',
  storageBucket: '',
  messagingSenderId: '387166278550'
}

firebase.initializeApp(config)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
