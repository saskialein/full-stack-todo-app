const initialState = []
import { GET_TASKS, SAVE_TASK, DELETE_TASK, UPDATE_TASK_STATUS, UPDATE_TASK_DETAILS } from '../actions/index'

function reducer (state = initialState, action) {

  switch(action.type){
    case GET_TASKS:
      return action.tasks
    case SAVE_TASK: 
      return [...state, action.task]
      // filter through tasks saved in state and returns every state except the task whose id matches action.id
    case DELETE_TASK:
      return state.filter((task) => task.id != action.id)
    case UPDATE_TASK_STATUS:
      // let newState = [...state]
      let toUpdate = [...state].find(task => task.id == action.id)
      toUpdate.completed = action.completed 
      return [...state]
    case UPDATE_TASK_DETAILS:
      let detailsToUpdate = [...state].find(task => task.id == action.id)
      detailsToUpdate.task = action.input
      return [...state]
    default: 
      return state
    }
  }
  

export default reducer

