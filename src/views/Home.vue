<template>
  <div class="form__field" v-if="showTask">
    <AddTask @submit-form="submit" />
  </div>
  <div class="all__task">
    <Tasks
      v-if="!isLoading"
      :allTask="allTask"
      :isModalOpen="isModalOpen"
      @delete-task="deleteTask"
      @edit-task="handleEdit"
    />
    <Loader v-else />
  </div>
</template>

<script>
  import {AddTask, Tasks, Loader} from "../components";

  export default {
    name: "Home",
    components: {
      AddTask,
      Tasks,
      Loader,
    },
    props: {
      showTask: Boolean,
      isLoading: Boolean,
      allTask: Array,
      isModalOpen: Function,
    },
    emits: ["submit-form", "delete-task", "edit-task"],
    methods: {
      submit(data) {
        this.$emit("submit-form", data);
      },
      deleteTask(id) {
        this.$emit("delete-task", id);
      },
      handleEdit(id) {
        this.$emit("edit-task", id);
      },
    },
  };
</script>

<style scoped>
  .all__task {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    row-gap: 15px;
    width: 100%;
    height: auto;
    padding: 20px 0px;
  }
</style>
