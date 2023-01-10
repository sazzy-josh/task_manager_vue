<template>
  <div v-for="task in allTask" :key="task.id" class="task">
    <task
      :task="task"
      :isModalOpen="isModalOpen"
      @edit-task="$emit('edit-task', task.id)"
      @delete-btn="$emit('delete-task', task.id)"
    />
  </div>
</template>

<script>
import Task from "../components/Task.vue";

export default {
  name: "Tasks",
  props: {
    allTask: Array,
    isModalOpen: Function,
  },
  components: {
    Task,
  },
  emits: ["delete-task", "edit-task"],
};
</script>

<style scoped>
.task {
  display: flex;
  flex-direction: column;
  width: 100%;
}
</style>
