<template>
  <div class="container">
    <!-- kanban table-->
    <div class="row">
      <div class="col-md-3">
        <!-- <div class="card border-success mb-3" style="max-width: 18rem;"> -->
          <h5 class="card-header bg-log text-light">Back-Log</h5>
          <div class="card-body cardmain">
            <div class="card border-success mb-3" style="max-width: 18rem;">
              <div class="card-header bg-log text-light">Catching jelly fish</div>
              <div class="card-body">
                <h6 class="card-title">Description:</h6>
                <p class="card-text">description here</p>
                <hr>
                <h6 class="card-title">Point:</h6>
                <p class="card-text">100</p>
                <hr>
                <h6 class="card-title">Assigned To:</h6>
                <p class="card-text">Spongebob</p>
              </div>
              <div class="card-footer bg-transparent border-success">
                <button type="button" class="btn btn-danger btn-sm"><i class="fas fa-trash-alt"></i></button>
                <button type="button" class="btn btn-success btn-sm"><i class="fas fa-arrow-right"></i></button>
              </div>
            </div>
          </div>
        <!-- </div> -->
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
  name: 'Home'
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
  background-color: #375e97;
}

</style>
