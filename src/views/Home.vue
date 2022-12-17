<template>
  <div class="form-field" v-if="showTask" >
   <AddTask @submit-form="submit" /> 
   <div class="all-task">
    <Tasks v-if="!loading" /> 
    <Loader v-else />
   </div>
  </div>


 
</template>

<script> 
import { AddTask ,Tasks , Loader } from '../components'

export default {
    name : "Home",
    components : {
      AddTask,
      Tasks,
      Loader,
    },
    data(){
      return {
        loading : false
      }
    },
    props : {
        showTask : Boolean
    },
    emits : ['submit-form'],
    methods : {
      submit(data){
        this.$emit("submit-form" , data)
      }
    }
}
</script>

<style scoped>
.all-task{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
  padding: 20px 0px;
}


</style>