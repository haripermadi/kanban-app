import Vue from 'vue'
import Vuex from 'vuex'
import swal from 'sweetalert2'
import * as firebase from 'firebase'

const config = {
  apiKey: 'AIzaSyCbuCZPE9M6bn_OZ49hUM0bp1uLZCzG2Tw',
  authDomain: 'kanban-c9606.firebaseapp.com',
  databaseURL: 'https://kanban-c9606.firebaseio.com',
  projectId: 'kanban-c9606',
  storageBucket: '',
  messagingSenderId: '387166278550'
}

const firebaseApp = firebase.initializeApp(config)
const db = firebaseApp.database()
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    tasks: []
  },
  getters: {
    showTask: function (state) {
      return state.tasks
    }
  },
  mutations: {
    showTask: function (state, payload) {
      console.log('mutation', payload)
      state.tasks = payload
    }
  },
  actions: {
    addTask: function (context, payload) {
      swal(
        'Good job!',
        'You add new task!',
        'success'
      )
      db.ref('task/').push({
        title: payload.title,
        description: payload.description,
        point: payload.point,
        assigned: payload.assigned,
        status: 'log'
      })
    },
    showTask: function (context, payload) {
      db.ref('task/').on('value', function (snapshot) {
        console.log('showaction', snapshot.val())
        context.commit('showTask', snapshot.val())
      })
    },
    deleteTask: function (context, payload) {
      swal({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.value) {
          swal(
            'Deleted!',
            'Your task has been removed.',
            'success'
          )
          db.ref('task/').child(payload).remove()
        }
      })
    },
    statusAfter: function (context, payload) {
      swal({
        position: 'top',
        type: 'success',
        title: 'Good Job!',
        showConfirmButton: false,
        timer: 1500
      })
      if (payload.data.status === 'log') {
        db.ref('task/').child(payload.id).update({
          status: 'todo'
        })
      } else if (payload.data.status === 'todo') {
        db.ref('task/').child(payload.id).update({
          status: 'doing'
        })
      } else if (payload.data.status === 'doing') {
        db.ref('task/').child(payload.id).update({
          status: 'done'
        })
      }
    },
    statusBefore: function (context, payload) {
      console.log('stroe:before==', payload)
      swal({
        position: 'center',
        type: 'success',
        title: 'unfinished?',
        showConfirmButton: false,
        timer: 1500
      })
      if (payload.status === 'done') {
        db.ref('task/').child(payload.id).update({
          status: 'doing'
        })
      } else if (payload.status === 'doing') {
        db.ref('task/').child(payload.id).update({
          status: 'todo'
        })
      } else if (payload.status === 'todo') {
        db.ref('task/').child(payload.id).update({
          status: 'log'
        })
      }
    }
  }
})

export default store
