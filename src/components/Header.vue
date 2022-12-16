<template>
  <div class="header">
     <header>
       Task Manager
     </header>
     
      <div class="toggle-btn">
       <Button @btn-click="$emit('btn-click')" :class="[ showTask ? 'green-btn' : 'red-btn' ]">
       {{ showTask ? 'Add Task' : 'Close'}}
       </Button>
      </div>
  </div>
</template>

<script>
import Button from './button.vue'

export default {
  name : "Header",
  components : {
    Button
  },
  props: {
    'showTask' : Boolean
  },
  emits : ['btn-click']
}
</script>

<style scoped>
.header{
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 26px;
    font-weight: bold;

}

.toggle-btn{
    width: 100px;
    height: 50px;
}

.green-btn{
    background: rgb(73, 153, 73);
}


.red-btn{
    background: rgb(185, 53, 53);
}
</style>