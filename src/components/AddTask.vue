<template>
  <form >
      <TextField  label="Task" placeholder='Enter your task...' :modelValue="formData.task" @update:modelValue="newValue => formData.task = newValue"/>
      <TextField  label="Date & Time" placeholder='Date and Time' :modelValue="formData.name" @update:modelValue="newValue => formData.name = newValue"/>
      <div class="set-reminder">
        <label for="reminder">Set Reminder</label>
        <input type="checkbox" v-model="formData.reminder"  />
      </div>
      <span>
      <Button class="submit-btn" @btn-click="handleSubmit(formData)">
       Add Task
      </Button>
      </span>
     </form>

</template>

<script>
import { TextField , Button } from "../components"

export default {
    name: 'AddTask',
    data(){
        return {
            formData : {
                task : "",
                name : "",
                reminder : true
            }
       }
    },
    components : {
        TextField ,
        Button
    },
    methods : {
        handleSubmit(data){
           this.$emit('submit-form' , data)
        }
    },
    emits : ['submit-form'  ]

}
</script>

<style scoped>

 form{
  display: flex;
  flex-direction: column;
  row-gap: 5px;
 }

 .set-reminder{
   display: flex;
   margin: 10px 0px;
   column-gap: 24px;
   align-items: center;
 }

 .submit-btn{
   background: black;
   height: 40px;
 }
</style>