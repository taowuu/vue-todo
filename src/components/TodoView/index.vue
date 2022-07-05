<template>
  <div id="todo-container">
    <div
      v-for="(item) of todoList"
      :key="item.id"
      :item='item'
    >
        <span> {{ item.content }} </span>
    </div>
  </div>
</template>

<script>
import { onMounted } from "@vue/runtime-core"

export default {
    name: 'TodoContainer',
    props: ['todoList'],
    setup() {
    //   onMounted(()=> {
      // console.log(todoList)
    //   // setTodoList()
    // })
      // return {
      //   todoList
      // }
    }
}
</script>

<style>
span {
    font-size: 30px;
    margin-left: 10px;
    margin-top: 2px;
    color: rgba(0,0,0,0.7);
}
</style>