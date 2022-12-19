<script>
import { Header,Modal } from './components'
import axios from 'axios'

  export default {
    name : 'App' ,
    components : {
      Header,
      Modal
    },
    data(){
        return{
            showTask: true,
            allTask : [],
            errorMessage : '',
            isLoading : true,
            isModalOpen : false
        }
    },
    methods:{
        async getAllTask(){  //FETCHES LIST OF ALL TASK ON CREATION & MOUNT OF COMPONENT...
          try {
            const req = await axios.get(' http://localhost:4000/task');
            this.allTask = await req.data
            this.isLoading = false
            console.log(req)
          } catch (error) {
            this.errorMessage = error.message
          }
        },
        
        toggleShow(){ //HANDLES TOGGLING OF FORM SECTION
          this.showTask = !this.showTask
        },
      
       async handleFormSubmit(formdata){   // HANDLES FORM SUBMISSION
            this.isLoading = true
            const { data } = await axios.post('http://localhost:4000/task' , formdata );
            this.allTask = [ data , ...this.allTask];
            this.isLoading  = false
        },
        async handleDelete(id){
         await axios.delete(`http://localhost:4000/task/${id}`)
         this.allTask = this.allTask.filter((item) => item.id !== id) 
        }
    },
    created(){
      // FETCH ON INIT
         this.getAllTask();      
    }
  }


</script>

<template>
    <div class="container">
      <div class="layout">
        <!-- <pre>{{ JSON.stringify(allTask , null , 2) }}</pre> -->
        <Header :showTask="showTask" @btn-click='toggleShow' />
         <teleport to="#portal-root">
          <Modal />
         </teleport>
        <router-view 
           :showTask="showTask" 
           :allTask="allTask"
           :isLoading="isLoading" 
           @submit-form='handleFormSubmit' 
           @delete-task="handleDelete"
           />
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
