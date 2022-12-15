<script>
import { Header  } from './components'

  export default {
    name : 'App' ,
    components : {
      Header
    }
  }


</script>

<template>
    <div class="container">
        <Header />
        <router-view />
        
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

.btn{
  width: 100%;
  height: 100%;
  border: 0px solid ;
  border-radius: 10px;
  color: whitesmoke;
}
</style>
