<template>
  <form>
    <TextField
      label="Task for the Day"
      placeholder="Enter your task..."
      :modelValue="formData.title"
      @update:modelValue="(newValue) => (formData.title = newValue)"
    />
    <TextField
      label="Date & Time"
      placeholder="Date and Time"
      :modelValue="formData.date"
      @update:modelValue="(newValue) => (formData.date = newValue)"
    />

    <div class="set__reminder">
      <label for="reminder">Set Reminder</label>
      <input type="checkbox" v-model="formData.reminder" />
    </div>

    <span>
      <Button class="submit__btn" @btn-click="handleSubmit(formData)">
        Add Task
      </Button>
    </span>
  </form>
</template>

<script>
import { TextField, Button } from "../components";

export default {
  name: "AddTask",
  data() {
    return {
      formData: {
        title: "",
        date: "",
        reminder: true,
      },
    };
  },
  components: {
    TextField,
    Button,
  },
  methods: {
    handleSubmit(data) {
      if (data.title || data.date) {
        this.$emit("submit-form", data);
        this.formData = {
          title: "",
          date: "",
          reminder: true,
        };
      }
      return;
    },
  },
  emits: ["submit-form"],
};
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  row-gap: 5px;
}

.set__reminder {
  display: flex;
  margin: 10px 0px;
  column-gap: 24px;
  align-items: center;
}

.submit__btn {
  background: black;
  height: 40px;
}
</style>
