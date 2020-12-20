const connection = require('./connection')


// READ (Collection)
function getTodos(db = connection) {
  return db('todos').select()
}


//CREATE (Single Resource)
function createTask(newTask, db = connection){
  return db('todos').insert(newTask)
  // here we're going into the todos db, inserting & automatically returning an array of ids for whatever thing(s) has been inserted, but we just want the id of the task we've added, hence the .then
  .then(ids => ids[0])
}

// UPDATE (Single Resource)
function updateTask(id, updatedTask, db = connection ){
  return db('todos').update(updatedTask).where('id', id)
  //update task where id is the same as the id that was passed in
}

// DELETE (Single Resource)
function deleteTask(id, db = connection){
  return db('todos').delete().where('id', id)
}


module.exports = {
  getTodos,
  createTask,
  updateTask,
  deleteTask
}