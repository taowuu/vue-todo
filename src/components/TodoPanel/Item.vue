<template>
  <div id="container" >
    <div class="todo-item">
      <div id="edit">
        <button
          @click="removeTodo(item.id)"
          class="tao-button"
          style="font-size: 21px; margin-left:8px"
        > delete </button>
        <button
          @click="editTodo(item.id)"
          class="tao-button"
          style="font-size: 21px; margin-left:8px"
        > edit </button>
        <span> {{item.content}} </span>
      </div>
        <div
          v-show="item.editable"
          id="update"
        >
          <input type="text"
            v-model="newVal"
            class="tao-text-input"
            style="width: 150px; height: 30px; font-size: 20px;"
          >
          <button
            @click="changeTodo(item)"
            class="tao-button"
            style="font-size: 21px; margin-left:8px"
          >update</button>
        </div>
    </div>
  </div>
</template>

<script>
import { ref } from "@vue/runtime-core"
import{ useTodo } from '@/hooks'

export default {
  name: 'TodoPanel',
  props: ['item'],
  setup(props, { emit }) {
    let newVal = ref('')
    const { updateTodo, setTodoList } = useTodo()

    // 
    const removeTodo = (id) => {
      // console.log('DEL',id)
      emit('removeTodo', id)
    }
    const editTodo = (id) => {
      // console.log('edit',id)
      emit('editTodo', id)
    }
    // 
    const changeTodo = (item) => {
      updateTodo(item.id, newVal.value)
    }
    // 
    return {
      removeTodo,
      editTodo,
      updateTodo,
      // 
      newVal,
      changeTodo,
    }
  }
  
}
</script>

<style scoped>
span {
    font-size: 30px;
    margin-left: 10px;
    margin-top: 2px;
    color: rgba(0,0,0,0.7);
}
#container {
  /* border: 1px solid red; */
  /* float: left; */
  /* margin-left: 14px; */
  /* overflow: hidden; */
  
}
#update {
    /* width: 30%; */
    /* margin-top: 6px;
    position: relative !important;
    left: -59px; */
    margin-left: 62px;
    margin-top: 6px;
}
#edit {
    /* width: 30%; */
    /* margin-top: 6px; */
    /* position: relative; */
    /* left: -116px; */
    /* float: left; */
    margin-left: 55px;
}
</style>