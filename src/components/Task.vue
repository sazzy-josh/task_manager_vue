<template>
<div :class="['single-card', task.reminder ? 'reminder' : '']">
 <span>
   <p>{{task.title}}</p>
   <p> - {{task.date}}</p>
  </span>
  <p class="delete-btn" @click="deleteTask(task.id)">
   +
  </p>
</div>
</template>

<script>
export default {
  name : "Task",
  props : {
    task : Object
  },
  methods : {
    deleteTask(id){
     this.$emit('delete-btn' , id)
    }
  },
  emits : ['delete-btn']
}
</script>

<style scoped>
 .single-card{
    display: flex;
    justify-content: space-between;
    background-color: rgb(244, 249, 255);
    padding: 10px;
 }

 .reminder{
    border-style: none none none solid; 
    border-left-color: rgb(47, 160, 47);
 }
 .delete-btn{
    display: flex;
    cursor: pointer;
    justify-content: center;
    align-items: center;
    font-size: 30px;
    font-weight: 400;
    transform: rotate(45deg);
    color: rgb(211, 78, 78);
    -webkit-tap-highlight-color: transparent;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;/* remove tap highlight */
 }

.delete-btn:focus {
    outline: none; /* remove outline */
    box-shadow: none; /* remove box shadow */
}
</style>