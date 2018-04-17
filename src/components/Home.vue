<template>
  <div class="container">
    <!-- kanban table-->
    <div class="row">
      <div class="col-md-3">
          <h5 class="card-header bg-log text-light">Back-Log</h5>
          <div class="card-body cardmain">
            <div class="card border-success mb-3" style="max-width: 18rem;" v-for="(task, i) in tasks" :key="i" v-if="task.status === 'log'">
              <div class="card-header bg-log text-light">{{task.title}}</div>
              <div class="card-body">
                <h6 class="card-title">Description:</h6>
                <p class="card-text">{{task.description}}</p>
                <hr>
                <h6 class="card-title">Point:</h6>
                <p class="card-text">{{task.point}}</p>
                <hr>
                <h6 class="card-title">Assigned To:</h6>
                <p class="card-text">{{task.assigned}}</p>
              </div>
              <div class="card-footer bg-transparent border-success">
                <button type="button" class="btn btn-danger btn-sm" @click="deleteTask(i)"><i class="fas fa-trash-alt"></i></button>
                <button type="button" class="btn btn-success btn-sm" @click="statusAfter(i, task)"><i class="fas fa-arrow-right"></i></button>
              </div>
            </div>
          </div>
      </div>
      <div class="col-md-3">
          <h5 class="card-header bg-todo text-light">To Do</h5>
          <div class="card-body cardmain">
            <div class="card border-success mb-3" style="max-width: 18rem;" v-for="(task, i) in tasks" :key="i" v-if="task.status === 'todo'">
              <div class="card-header bg-todo text-light">{{task.title}}</div>
              <div class="card-body">
                <h6 class="card-title">Description:</h6>
                <p class="card-text">{{task.description}}</p>
                <hr>
                <h6 class="card-title">Point:</h6>
                <p class="card-text">{{task.point}}</p>
                <hr>
                <h6 class="card-title">Assigned To:</h6>
                <p class="card-text">{{task.assigned}}</p>
              </div>
              <div class="card-footer bg-transparent border-success">
                <button type="button" class="btn btn-warning btn-sm" @click="statusBefore(i, task)"><i class="fas fa-arrow-left"></i></button>
                <button type="button" class="btn btn-danger btn-sm" @click="deleteTask(i)"><i class="fas fa-trash-alt"></i></button>
                <button type="button" class="btn btn-success btn-sm" @click="statusAfter(i, task)"><i class="fas fa-arrow-right"></i></button>
              </div>
            </div>
          </div>
      </div>
      <div class="col-md-3">
          <h5 class="card-header bg-doing text-light">Doing</h5>
          <div class="card-body cardmain">
            <div class="card border-success mb-3" style="max-width: 18rem;" v-for="(task, i) in tasks" :key="i" v-if="task.status === 'doing'">
              <div class="card-header bg-doing text-light">{{task.title}}</div>
              <div class="card-body">
                <h6 class="card-title">Description:</h6>
                <p class="card-text">{{task.description}}</p>
                <hr>
                <h6 class="card-title">Point:</h6>
                <p class="card-text">{{task.point}}</p>
                <hr>
                <h6 class="card-title">Assigned To:</h6>
                <p class="card-text">{{task.assigned}}</p>
              </div>
              <div class="card-footer bg-transparent border-success">
                <button type="button" class="btn btn-warning btn-sm" @click="statusBefore(i, task)"><i class="fas fa-arrow-left"></i></button>
                <button type="button" class="btn btn-danger btn-sm" @click="deleteTask(i)"><i class="fas fa-trash-alt"></i></button>
                <button type="button" class="btn btn-success btn-sm" @click="statusAfter(i, task)"><i class="fas fa-arrow-right"></i></button>
              </div>
            </div>
          </div>
      </div>
      <div class="col-md-3">
          <h5 class="card-header bg-done text-light">Done</h5>
          <div class="card-body cardmain">
            <div class="card border-success mb-3" style="max-width: 18rem;" v-for="(task, i) in tasks" :key="i" v-if="task.status === 'done'">
              <div class="card-header bg-done text-light">{{task.title}}</div>
              <div class="card-body">
                <h6 class="card-title">Description:</h6>
                <p class="card-text">{{task.description}}</p>
                <hr>
                <h6 class="card-title">Point:</h6>
                <p class="card-text">{{task.point}}</p>
                <hr>
                <h6 class="card-title">Assigned To:</h6>
                <p class="card-text">{{task.assigned}}</p>
              </div>
              <div class="card-footer bg-transparent border-success">
                <button type="button" class="btn btn-warning btn-sm" @click="statusBefore(i, task)"><i class="fas fa-arrow-left"></i></button>
                <button type="button" class="btn btn-danger btn-sm" @click="deleteTask(i)"><i class="fas fa-trash-alt"></i></button>
              </div>
            </div>
          </div>
      </div>
    </div>
    <!-- Modal -->
    <div class="modal fade" id="addtask" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLongTitle">New Task</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form>
            <div class="form-group">
              <label for="title" class="col-form-label">Title:</label>
              <input type="text" class="form-control" v-model="title">
            </div>
            <div class="form-group">
              <label for="description" class="col-form-label">Description:</label>
              <textarea class="form-control" v-model="description"></textarea>
            </div>
            <div class="form-group">
              <label for="title" class="col-form-label">Point:</label>
              <input type="text" class="form-control" value="0" v-model="point">
            </div>
            <div class="form-group">
              <label for="title" class="col-form-label">Assigned To:</label>
              <input type="text" class="form-control" v-model="assigned">
            </div>
          </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-primary" data-dismiss="modal" @click="addTask">Submit</button>
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      title: '',
      description: '',
      point: '',
      assigned: ''
    }
  },
  created: function () {
    this.$store.dispatch('showTask')
  },
  computed: {
    tasks: function () {
      return this.$store.getters.showTask
    }
  },
  methods: {
    addTask: function () {
      let input = {
        title: this.title,
        description: this.description,
        point: this.point,
        assigned: this.assigned
      }
      this.$store.dispatch('addTask', input).then(() => {
        this.title = ''
        this.description = ''
        this.point = ''
        this.assigned = ''
      })
    },
    deleteTask: function (id) {
      this.$store.dispatch('deleteTask', id)
    },
    statusAfter: function (id, data) {
      let input = {
        id: id,
        data: data
      }
      console.log('input===', input)
      this.$store.dispatch('statusAfter', input)
    },
    statusBefore: function (id, data) {
      let input = {
        id: id,
        status: data.status
      }
      console.log('input===', input)
      this.$store.dispatch('statusBefore', input)
    }
  }
}
</script>

<style>
body {
  background-image: url('https://images.pexels.com/photos/373892/pexels-photo-373892.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940');
  background-size: cover;
  background-repeat: no-repeat;
}

.cardmain {
  padding-right: 10px;
  padding-left: 10px;
}

.card-title {
  font-weight: bold;
}

.card-header {
  font-weight: bolder;
}

.bg-log {
  /* background-color: #375e97; */
  background: rgba(255, 195, 18, 0.7)
}

.bg-todo {
  /* background-color: #fb6542; */
  background: rgba(196, 229, 56, 0.7)
}

.bg-doing {
  background: rgba(18, 203, 196, 0.7)
}

.bg-done {
  background: rgba(237, 76, 103, 0.7)
}

.card-body{
  text-align: left;
  background: rgba(white, white, white, 0.7)
}
</style>
