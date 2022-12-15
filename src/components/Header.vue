<template>
  <div class="header">
     <header>
       Task Manager
     </header>

     <Button text="Add task" color="green"/>
  </div>
</template>

<script>
import Button from './button.vue'

export default {
  name : "Header",
  components : {
    Button
  }
}
</script>

<style scoped>
.header{
    display: flex;

}

</style>