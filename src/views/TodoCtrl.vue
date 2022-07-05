<template>
  <div>
    <todo-input></todo-input>
    <todo-panel
      :todoList='todoList'
    ></todo-panel>
  </div>
</template>

<script>
import { useStore } from 'vuex';
import { computed, onMounted } from '@vue/runtime-core';

import TodoInput from '@/components/TodoInput/index.vue'
import TodoPanel from '@/components/TodoPanel/index.vue'

export default {
  name: 'TodoCtrl',
  components: {
    TodoInput,
    TodoPanel,
  },
  setup() {
    // const { setTodoList } = useTodo()
    const store = useStore()
    // 
    // onMounted(()=> {
    //   setTodoList()
    // })
    // 
    return {
      todoList: computed(()=> store.state.list)
    }
  }
}
</script>

<style>

</style>