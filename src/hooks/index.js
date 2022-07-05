import { useStore } from "vuex";
import { watch } from "vue";
import { 
  SET_TODO, 
  SET_TODO_LIST,
  REMOVE_TODO,
  EDIT_TODO,
  UPDATE_TODO,
} from "@/store/actionTypes";
import { log } from '@/libs/utils.js'

function useTodo() {
  const store = useStore()
  const {getLocalList, setLocalList } = useLocalStorage()
  // const log = console.log.bind(console)

  const todoList = getLocalList()
  // 
  watch(()=> {
    return store.state.list
  }, (todoList)=> {
    // console.log('watch trigger', todoList)
    log('log watch trigger', todoList)
    setLocalList(todoList)
  }, { deep: true })
  // 
  function setTodo(value) {
    const todo = {
      id: new Date().getTime(),
      content: value,
      editable: false,
    }
    store.dispatch(SET_TODO, todo)
  }
  function removeTodo(id) {
    store.dispatch(REMOVE_TODO, id)
  }
  function editTodo(id) {
    // console.log('hook edit', id)
    store.dispatch(EDIT_TODO, id)
  }
  function updateTodo(id, newVal) {
    // console.log('hook update', id, newVal)
    const o = {
      id: id,
      content: newVal
    }
    store.dispatch(UPDATE_TODO, o)
  }
  // 
  function setTodoList() {
    store.dispatch(SET_TODO_LIST, todoList)
  }
  // 
  return {
    setTodo,
    removeTodo,
    editTodo,
    updateTodo,
    setTodoList,
    // 
  }
}
// 
function useLocalStorage() {
  function getLocalList() {
    return JSON.parse(localStorage.getItem('todoList') || '[]')
  }
  // 
  function setLocalList(todoList) {
    localStorage.setItem('todoList', JSON.stringify(todoList))
  }
  // 
  return {
    getLocalList,
    setLocalList,
  }
}
// 
export {
  useTodo,
}