import { 
  SET_TODO, 
  SET_TODO_LIST,
  REMOVE_TODO,
  EDIT_TODO,
  UPDATE_TODO,
} from "./actionTypes";

export default {
  [SET_TODO](state, todo) {
    state.list = [...state.list, todo]
  },
  [REMOVE_TODO](state, id) {
    state.list = state.list.filter((item)=> item.id !== id)
  },
  [EDIT_TODO](state, id) {
    // console.log('mutation edit', id)
    let arr = state.list
    for(let i = 0; i < arr.length; i++) {
      if(arr[i].id === id) {
        arr[i].editable = true
        return
      }
    }
  },
  [UPDATE_TODO](state, o) {
    let arr = state.list
    for(let i = 0; i < arr.length; i++) {
      if(arr[i].id === o.id) {
        arr[i].content = o.content
        // console.log('mutation update', o.content)
        arr[i].editable = false
        return
      }
    }
  },
  [SET_TODO_LIST](state, toodList) {
    state.list = toodList
  },
}