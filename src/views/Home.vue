<template>
  <div class="form-field" v-if="showTask" >
   <AddTask />   
  </div>

  
 
</template>

<script> 
import { AddTask } from '../components'

export default {
    name : "Home",
    components : {
      AddTask
    },
    // data(){
    //   return {
        
    //   }
    // },
    props : {
        showTask : Boolean
    }
}
</script>

<style scoped>



</style>