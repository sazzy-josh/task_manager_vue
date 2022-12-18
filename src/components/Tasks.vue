<template> 

  <div v-for="task in allTask" :key="task.id" class="task" >
    <task :task="task" @delete-btn="$emit('delete-task' , task.id)"/>
  </div>
</template>

<script>
import Task from '../components/Task.vue'

export default {
 name : "Tasks",
 props : {
    allTask : Array
 },
 components : {
    Task
 },
 emits: ['delete-task']
}
</script>

<style scoped>
.task{
    display: flex;
    flex-direction: column;
    width: 100%;
}
</style>