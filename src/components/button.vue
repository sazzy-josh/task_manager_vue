<template>
    <button class="btn" :style="{'background' : color}" @click="handleClick">{{text}}</button>
</template>

<script>
export default {
    name: "Button",
    props: {
        handleClick: {
            type: Function,
        },
        color: String ,
        text :{
            type : String ,
            required : true
        }
    },
    methods: {
        handleClick(){
           this.$emit('handle-click')
        }
    },
    emits : ['handle-click']
}
</script>


<style scoped>

</style>