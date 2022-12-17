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
        async getAllTask(){  //FETCHES LIST OF ALL TASK ON CREATION & MOUNT OF COMPONENT...
          try {
            const req = await axios.get(' http://localhost:4000/task');
            this.allTask = await req.data
           

          } catch (error) {
            this.errorMessage = error.message
          }
        },
        
        toggleShow(){ //HANDLES TOGGLING OF FORM SECTION
          this.showTask = !this.showTask
        },
      
       async handleFormSubmit(formdata){   // HANDLES FORM SUBMISSION
            const { data  } = await axios.post(' http://localhost:4000/task' , formdata )
            this.allTask = [ data , ...this.allTask]
        }
    },
    created(){
      // FETCH ON INIT
      this.getAllTask()
          
    } 
  }


</script>

<template>
    <div class="container">
      <div class="layout">
        <!-- <pre>{{ JSON.stringify(allTask , null , 2) }}</pre> -->
        <Header :showTask="showTask" @btn-click='toggleShow' />
        <router-view :showTask="showTask" @submit-form='handleFormSubmit' />
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
