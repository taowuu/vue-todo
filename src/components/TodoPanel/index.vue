<template>
  <div id="todo-container">
    <item
      v-for="(item) of todoList"
      :key="item.id"
      :item='item'
      @removeTodo='removeTodo'
      @editTodo='editTodo'
    ></item>
  </div>
</template>

<script>
import { useTodo } from '@/hooks'
import Item from './Item'
import { onMounted } from "@vue/runtime-core"

export default {
  name: 'TodoPanel',
  props: ['todoList'],
  components: {
    Item,
  },
  setup() {
    const {
      removeTodo,
      editTodo,
      setTodoList,
    } = useTodo()
    // 
        // 
    onMounted(()=> {
      // console.log(todoList)
      setTodoList()
    })
    // 
    return {
      removeTodo,
      editTodo,
    }
  }
}
</script>

<style scoped>
#todo-container {
  /* float: left; */
    /* border: 1px solid red; */
    text-align: left;
    /* margin-left: 55px; */
    /* width: 400px; */

}
</style>

