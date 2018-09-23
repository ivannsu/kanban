<template>
  <div class="col-md-3">
    <div class="card">
      <div :class="category.class">
        {{ category.name }}
      </div>
      <div class="card-body">
        <Task :modalId="modalId" v-for="(task, index) in category.data" :key="index" :task="task" :i="index" @show-detail="showDetail" />
      </div>
    </div>

    <!-- Modal -->
    <div class="modal fade" :id="modalId" tabindex="-1" role="dialog" aria-labelledby="detailModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel"><strong>Title</strong> : {{ task.title }}</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <p><strong>Task Description</strong> :</p>
            <p>{{ task.description }}</p>

            <p><strong>Point</strong> :</p>
            <p>{{ task.point }}</p>

            <p><strong>Status</strong> :</p>
            <p>{{ task.status }}</p>
          </div>
          <div class="modal-footer">
            <nav aria-label="Page navigation example">
              <ul class="pagination">
                <li v-if="i > 0" class="page-item"><a class="page-link" href="javascript:void(0)" @click="previous">{{ categoryName[i - 1] }}</a></li>
                <li class="page-item"><a class="page-link text-danger" href="javascript:void(0)" @click="remove">Delete</a></li>
                <li v-if="i < 3" class="page-item"><a class="page-link" href="javascript:void(0)" @click="next">{{ categoryName[i + 1] }}</a></li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import db from '@/firebase.config.js'
import Task from './Task.vue'

export default {
  name: 'Category',
  props: ['category', 'i'],
  data () {
    return {
      categories: [],
      categoryName: ['Back-Log', 'To-Do', 'Doing', 'Done'],
      task: {
        id: '',
        title: '',
        description: '',
        point: '',
        status: ''
      }
    }
  },
  methods: {
    showDetail (payload) {
      this.task.id = payload.id
      this.task.title = payload.task.title
      this.task.description = payload.task.description
      this.task.point = payload.task.point
      this.task.status = this.category.name
    },
    previous () {
      let self = this
      let previousNum = this.i - 1

      db.ref(`/${this.i}/data/${this.task.id}`)
        .once('value')
        .then(function (snapshot) {
          let data = snapshot.val()

          db.ref(`/${self.i}/data/${self.task.id}`).remove()
          db.ref(`/${previousNum}/data`).push(data, function (err) {
            if (err) {
              console.log(err)
            } else {
              /* eslint-disable */
              $(`#${self.modalId}`).modal('hide')
            }
          })
        })
    },
    next () {
      let self = this
      let nextNum = this.i + 1

      db.ref(`/${this.i}/data/${this.task.id}`)
        .once('value')
        .then(function (snapshot) {
          let data = snapshot.val()

          db.ref(`/${self.i}/data/${self.task.id}`).remove()
          db.ref(`/${nextNum}/data`).push(data, function (err) {
            if (err) {
              console.log(err)
            } else {
              /* eslint-disable */
              $(`#${self.modalId}`).modal('hide')
            }
          })
        })
    },
    remove () {
      db.ref(`/${this.i}/data/${this.task.id}`).remove()
      $(`#${this.modalId}`).modal('hide')
    }
  },
  components: {
    Task
  },
  computed: {
    modalId () {
      return `category-${this.i}`
    }
  }
}
</script>

<style>

</style>
