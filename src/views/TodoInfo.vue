<template>
  <div>
    <todo-view 
      :todoList='todoList'
    />
  </div>
</template>

<script>
import TodoView from '@/components/TodoView/index.vue'
import { useStore } from 'vuex';
import { computed, onMounted } from '@vue/runtime-core';


export default {
  name: 'TodoInfo',
  components: {
    TodoView
  },
  setup() {
    const store = useStore()
    // let todoList = computed(()=> store.state.list)
    // console.log(todoList)
    return {
      todoList: computed(()=> store.state.list)
    }
  }
}

</script>

<style>

</style>