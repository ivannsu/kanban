<template>
  <div class="card-body">
    <h5 class="card-title">{{ task.title }}</h5>
    <p class="card-text"><strong>Point</strong> : {{ task.point }}</p>
    <p class="card-text"><strong>Assigned To</strong> : {{ task.assign }}</p>
    <button class="btn btn-block btn-primary" data-toggle="modal" :data-target="modalTarget" @click="showDetail">Show Detail</button>
  </div>
</template>

<script>
export default {
  name: 'Task',
  props: ['modalId', 'task', 'i'],
  methods: {
    showDetail () {
      this.$emit('show-detail', { id: this.i, task: this.task })
    }
  },
  computed: {
    modalTarget () {
      return `#${this.modalId}`
    }
  }
}
</script>

<style>

</style>
