<template>
    <button class="btn" @click="handleBtnClick">
     <slot></slot>
    </button>
</template>

<script>
export default {
    name: "Button",
    props: {
        handleClick: {
            type: Function,
        },
    },
    methods: {
        handleBtnClick(e){
           e.preventDefault();
           this.$emit('btn-click')
        }
    },
    emits : ['btn-click']
}
</script>


<style scoped>

</style>