<template>
  <div class="home">
    <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
      <a class="navbar-brand" href="#">Kan-ivan</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarsExampleDefault">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
          </li>
        </ul>
        <div class="form-inline my-2 my-lg-0">
          <button class="btn btn-success my-2 my-sm-0" type="button" data-toggle="modal" data-target="#addTaskModal"><span class="fas fa-plus"></span> Add Task</button>
        </div>
      </div>
    </nav>

    <!-- Modal -->
    <div class="modal fade" id="addTaskModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Add New Task</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="form-group">
              <label>Title</label>
              <input type="text" class="form-control" placeholder="Enter task title..." v-model="title">
            </div>
            <div class="form-group">
              <label>Description</label>
              <textarea rows="2" placeholder="Enter task description..." v-model="description" class="form-control"></textarea>
            </div>
            <div class="form-group">
              <label>Point</label>
              <input type="number" class="form-control" v-model="point">
            </div>
            <div class="form-group">
              <label>Assigned To</label>
              <input type="text" class="form-control" v-model="assign" placeholder="Assign to...">
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-primary" @click="addTask">Add Task</button>
            <button type="button" class="btn btn-link text-muted" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>

    <main role="main" style="padding-top: 100px">

      <div class="container-fluid">
        <div class="lds-facebook" v-if="categories.length === 0">
          <div></div><div></div><div></div>
        </div>
        <div class="row" v-else>
          <Category v-for="(category, index) in categories" :key="index" :i="index" :category="category" />
        </div>

        <hr>

      </div> <!-- /container -->

    </main>

    <footer class="container">
      <p>&copy; Company 2017-2018</p>
    </footer>
  </div>
</template>

<script>
// @ is an alias to /src
import db from '@/firebase.config.js'
import Category from '@/components/Category.vue'

export default {
  name: 'home',
  components: {
    Category
  },
  data () {
    return {
      title: '',
      description: '',
      point: 0,
      assign: '',
      categories: []
      // categories: [
      //   { title: 'Back-Log', class: 'card-header bg-danger text-white' },
      //   { title: 'To-Do', class: 'card-header bg-warning text-white' },
      //   { title: 'Doing', class: 'card-header bg-primary text-white' },
      //   { title: 'Done', class: 'card-header bg-success text-white' }
      // ]
    }
  },
  created () {
    let self = this

    db.ref().on('value', function (snapshot) {
      self.categories = snapshot.val()
    })
  },
  methods: {
    addTask () {
      db.ref('/0/data').push(
        { title: this.title, description: this.description, point: this.point, assign: this.assign }
        , function (err) {
          if (err) {
            console.log(err, '<====== ERROR addTask()')
          } else {
            /* eslint-disable */
            $('#addTaskModal').modal('hide')
          }
        })
    }
  }
}
</script>

<style scoped>
.lds-facebook {
  display: inline-block;
  position: relative;
  width: 64px;
  height: 64px;
}
.lds-facebook div {
  display: inline-block;
  position: absolute;
  left: 6px;
  width: 13px;
  background: #333;
  animation: lds-facebook 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;
}
.lds-facebook div:nth-child(1) {
  left: 6px;
  animation-delay: -0.24s;
}
.lds-facebook div:nth-child(2) {
  left: 26px;
  animation-delay: -0.12s;
}
.lds-facebook div:nth-child(3) {
  left: 45px;
  animation-delay: 0;
}
@keyframes lds-facebook {
  0% {
    top: 6px;
    height: 51px;
  }
  50%, 100% {
    top: 19px;
    height: 26px;
  }
}
</style>
