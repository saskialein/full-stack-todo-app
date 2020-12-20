import request from "superagent";

const tasksAPI = "/api/v1/tasks";


export function retrieveTasksfromAPI() {
  return request.get(tasksAPI).then((res) => res.body);
}

// here we're adding a new task to the database & then re-calling our fetchTasks action function to trigger retrieving & displaying the updated task list on the browser. We're able to do this by making use of redux thunk return (dispatch) ?????
export function apiAddTask(newTask) {
  return request
    .post(tasksAPI)
    .send(newTask)
    .then((res) => res.body)
}


export function apiDeleteTask(id) {
  return request
      .delete(`/api/v1/tasks/${id}`)
      .then((res) => res.body)
  };
