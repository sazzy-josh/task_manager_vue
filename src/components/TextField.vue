<template>
   <div>
     <label :for="label">{{label}}</label>
     <input type="text" :placeholder="placeholder" :name="label" :id="label" :value="modelValue" @input="$emit('update:modelValue' , $event.target.value)">
   </div>
</template>

<script>
export default {
 name : "TextField",
 props : {
    modelValue : {
        type : String,
        required : true
    } ,
    label : String ,
    placeholder : String
 },
 emits : ['update:modelValue'] ,
}
</script>

<style scoped>
 div{
      display: flex;
      flex-direction: column;
      row-gap: 5px;
 }
 label{
    font-weight: bolder;
    font-size: medium;
 }

 input[type=text]{
     padding: 10px 5px;
     border-radius: 10px;
     border: 1px solid  grey;
 }
 input:focus{
    outline: none;
 }
</style>