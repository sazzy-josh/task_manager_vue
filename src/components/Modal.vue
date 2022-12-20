<template>
  <div class="modal__overlay">
    <div class="modal__content">
     <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
    name : 'Modal'
}
</script>

<style scoped>
.modal__overlay{
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 999;
    transition: visibility 0s linear 0.25s, opacity 0.25s 0s, transform 0.25s;
}

.modal__content{
  
   background: white;
   width: 40%;
   padding: 20px;
   position: absolute;
   left: 50%;
   top: 50%;
   transform: translate(-50%, -50%);
   border-radius: 0.5rem;
}
@media only screen and (max-width: 720px){
   .modal__content{
     width: 80%;
   }
}

</style>