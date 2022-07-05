<template>
  <div id="todo-ctrl" style="margin-top:10px">
    <input type="text" id="todo-input" 
      style="width: 300px; height: 30px; font-size: 20px;"
      v-model="todoValue"
      class="tao-text-input"
    >
    <button id="todo-add" 
      @click="addTodo"
      class="tao-button"
      style="font-size: 21px; margin-left:8px"
    > add </button>
  </div>
</template>

<script>
import { ref } from 'vue'
import{ useTodo } from '@/hooks'

export default {
  name: 'TodoInput',
  setup() {
    const todoValue = ref('')
    const { setTodo } = useTodo()
    // 
    const addTodo = () => {
      // console.log('click add', todoValue.value)
      setTodo(todoValue.value)
      todoValue.value = ''
    }
    // 
    return {
      todoValue,
      // 
      addTodo,
    }
  }
}
</script>

<style scoped>
@import '@/libs/tao.css'

</style>>
