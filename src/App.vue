<script>
import { Header } from './components'
import axios from 'axios'

  export default {
    name : 'App' ,
    components : {
      Header
    },
    data(){
        return{
            showTask: true,
            allTask : [],
            errorMessage : ''
        }
    },
    methods:{
        async getAllTask(){
          try {
            const req = await axios.get(' http://localhost:4000/task');
            this.allTask = await req.data
          } catch (error) {
            this.errorMessage = error.message
          }
        },
        toggleShow(){
            // console.log(1)
         this.showTask = !this.showTask
        }
    },
    created(){
      // fetch on init
      this.getAllTask()
          
    } 
  }


</script>

<template>
    <div class="container">
      <div class="layout">
        <Header :showTask="showTask" @btn-click='toggleShow' />
        <router-view  :showTask="showTask" />
      </div>
        
    </div>
</template>

<style>
*{
    font-family: 'Source Sans Pro', sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;

}

.container{
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.layout{
    width: 40%;
    height: 100%;
    padding: 20px;
}

.btn{
  width: 100%;
  height: 100%;
  border: 0px solid ;
  border-radius: 10px;
  color: whitesmoke;
  cursor: pointer;
}
</style>
