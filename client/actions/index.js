import request from 'superagent'
import { apiAddTask, retrieveTasksfromAPI, apiDeleteTask } from "../apis/api";

export const GET_TASKS = "GET_TASKS";
export const SAVE_TASK = "SAVE_TASK";
export const DELETE_TASK = "DELETE_TASK";
export const UPDATE_TASK_STATUS = "UPDATE_TASK_STATUS"
export const UPDATE_TASK_DETAILS = "UPDATE_TASK_DETAILS"

//Get all tasks
export const getTasks = (tasks) => {
  return {
    type: GET_TASKS,
    tasks,
  };
};

export function fetchTasks() {
  return (dispatch) => {
    return retrieveTasksfromAPI()
      .then((tasks) => {
        dispatch(getTasks(tasks));
      });
  };
}

//Update status
export const statusUpdated = (id, completed) => {
  return {
    type: UPDATE_TASK_STATUS,
    id,
    completed
  }
}

export const updateTaskStatus = (id, completed) => {
  return dispatch => {
      return request  
      .patch('/api/v1/tasks/' + id).send({completed: completed})
      .then(dispatch(statusUpdated(id, completed)))
      .catch(err => console.log(err))
  }
}

//Update task
export const taskUpdated = (id, input) => {
  return {
    type: UPDATE_TASK_DETAILS,
    id, 
    input
  }
}

export const updateTaskDetails = (id, input) => {
  return dispatch => {
    return request
    .patch('/api/v1/tasks/' + id).send({task: input})
    .then(dispatch(taskUpdated(id, input)))
    .catch(err => console.log(err))
  }
}

//Add new task
export const saveTask = (newTask) => {
  return {
    type: SAVE_TASK,
    task: newTask,
  }
}

export function addTask(newTask) {
  return (dispatch) => {
    apiAddTask(newTask)
      .then((idObj) => {
        // dispatch(fetchTasks())

        // { task: '', priority: '', completed: 0 }
        const id = idObj.id
        newTask.id = id
        // { task: '', priority: '', completed: 0, id: 17 }

        dispatch(saveTask(newTask))
      })
  };
}

//Delete task
export const removeTask = (id) => {
  return {
    type: DELETE_TASK,
    id: id
  }
}

export function deleteTask(id) {
  return (dispatch) => {
    apiDeleteTask(id)
      .then(() => dispatch(removeTask(id)))
  }
}