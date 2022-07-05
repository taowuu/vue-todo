import { 
  SET_TODO, 
  SET_TODO_LIST,
  REMOVE_TODO, 
  EDIT_TODO,
  UPDATE_TODO,
} from "./actionTypes"

export default {
  [SET_TODO]({ commit }, value) {
    commit(SET_TODO, value)
  },
  [REMOVE_TODO]({ commit }, id) {
    commit(REMOVE_TODO, id)
  },
  [EDIT_TODO]({ commit }, id) {
    // console.log('action edit', id)
    commit(EDIT_TODO, id)
  },
  [UPDATE_TODO]({ commit }, o) {
    // console.log('action update', o)
    commit(UPDATE_TODO, o)
  },
  [SET_TODO_LIST]({ commit }, todo) {
    commit(SET_TODO_LIST, todo)
  },
}