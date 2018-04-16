import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    title: '',
    description: '',
    point: '',
    assigned: '',
    tasks: []
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  }
})

export default store
