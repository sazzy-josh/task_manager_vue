<script>
import { Header, Modal, TextField, Button } from "./components";
import axios from "axios";

export default {
  name: "App",
  components: {
    Header,
    Modal,
    TextField,
    Button,
  },
  data() {
    return {
      showTask: true,
      allTask: [],
      errorMessage: "",
      isLoading: true,
      isModalOpen: false,
      taskID: null,
      editFormData: {
        title: "",
        date: "",
        reminder: false,
      },
    };
  },
  methods: {
    async getAllTask() {
      //FETCHES LIST OF ALL TASK ON CREATION & MOUNT OF COMPONENT...
      try {
        const req = await axios.get(" http://localhost:4000/task");
        this.allTask = await req.data;
        this.isLoading = false;
      } catch (error) {
        this.errorMessage = error.message;
      }
    },

    async handleFormSubmit(formdata) {
      // HANDLES FORM SUBMISSION
      this.isLoading = true;
      const { data } = await axios.post("http://localhost:4000/task", formdata);
      this.allTask = [data, ...this.allTask];
      this.isLoading = false;
    },

    async handleDelete(id) {
      await axios.delete(`http://localhost:4000/task/${id}`);
      this.allTask = this.allTask.filter((item) => item.id !== id);
    },

    ToggleModal(id) {
      //POPS UP MODAL AND HANDLES DATA FETCHING FOR TASK TO BE EDITED
      this.isModalOpen = !this.isModalOpen;
      let taskToEdit = this.allTask.find((item) => item.id === id);
      if (taskToEdit) {
        this.editFormData = {
          title: taskToEdit.title,
          date: taskToEdit.date,
          reminder: taskToEdit.reminder,
        };
        this.taskID = taskToEdit.id;
      }
    },

    async submitEditForm(formdata) {
      //HANDLES SUBMISSION OF EDITED TASK
      let editedFormdata = {
        title: formdata.title,
        date: formdata.date,
        reminder: formdata.reminder,
      };
      await axios.put(`http://localhost:4000/task/${this.taskID}`, formdata);
      //  this.allTask = this.allTask.map((item) => item.id === this.taskID ? {...item, ...editedFormdata } : item)
      //     or
      // debugger
      this.allTask = this.allTask.map((item) => {
        if (item.id === this.taskID) {
          return { ...item, ...formdata };
        }
        return item;
      });

      this.isModalOpen = false;
    },

    toggleShow() {
      //HANDLES TOGGLING OF FORM SECTION
      this.showTask = !this.showTask;
    },
  },
  created() {
    // FETCH ON INIT
    this.getAllTask();
  },
};
</script>

<template>
  <div class="container">
    <div class="layout">
      <!-- <pre>{{ JSON.stringify(allTask , null , 2) }}</pre> -->
      <Header :showTask="showTask" @btn-click="toggleShow" />
      <teleport to="#portal-root">
        <Modal v-if="isModalOpen">
          <p class="close__modal__btn" @click="ToggleModal">+</p>
          <form>
            <TextField
              label="Edit Task"
              :modelValue="editFormData.title"
              @update:modelValue="(newValue) => (editFormData.title = newValue)"
              placeholder="Enter your task..."
            />

            <TextField
              label="Edit Date"
              :modelValue="editFormData.date"
              @update:modelValue="(newValue) => (editFormData.date = newValue)"
              placeholder="Enter your date..."
            />

            <div class="set__reminder">
              <label for="reminder">Set Reminder</label>
              <input type="checkbox" v-model="editFormData.reminder" />
            </div>

            <Button
              class="submit__btn"
              @btn-click="submitEditForm(editFormData)"
            >
              Submit
            </Button>
          </form>
        </Modal>
      </teleport>
      <router-view
        :showTask="showTask"
        :allTask="allTask"
        :isLoading="isLoading"
        :isModalOpen="ToggleModal"
        @submit-form="handleFormSubmit"
        @delete-task="handleDelete"
        @edit-task="ToggleModal"
      />
    </div>
  </div>
</template>

<style>
* {
  font-family: "Source Sans Pro", sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.container {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.layout {
  width: 40%;
  height: 100%;
  padding: 20px;
}

.btn {
  width: 100%;
  height: 100%;
  border: 0px solid;
  border-radius: 10px;
  color: whitesmoke;
  cursor: pointer;
}

.close__modal__btn {
  position: fixed;
  cursor: pointer;
  top: 0;
  right: 8px;
  font-size: 30px;
  font-weight: 400;
  transform: rotate(45deg);
  color: rgb(211, 78, 78);
  -webkit-tap-highlight-color: transparent;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  /* remove tap highlight */
}

.close__modal__btn:focus {
  outline: none;
  /* remove outline */
  box-shadow: none;
  /* remove box shadow */
}

.submit__btn {
  background: black;
  height: 40px;
  border-radius: 10px;
}

form {
  display: flex;
  flex-direction: column;
  row-gap: 5px;
  padding: 20px 0px;
}
.set__reminder {
  display: flex;
  margin: 10px 0px;
  column-gap: 24px;
  align-items: center;
}
@media only screen and (max-width: 720px) {
  .layout {
    width: 100%;
    height: 100%;
    padding: 20px;
  }
}
</style>
