import React from "react";
import { connect } from "react-redux";
import { deleteTask, updateTaskStatus, updateTaskDetails } from "../actions/index";

class CompletedList extends React.Component {
 state = {
   editing: '',
   input: ''
 }

 setInput = (currentTask) => {
   this.setState({
     input: currentTask
   })
 }
 setEditing = (taskID) => {
   this.setState({
     editing: taskID
   })
 }

  toggle = (id) => {
    let updatedTask = this.props.tasks.find(task => {
      if (task.id == id) {
   
        task.completed ? task.completed = 0 : task.completed = 1
        return task
      }
    })
    this.props.dispatch(updateTaskStatus(updatedTask.id, updatedTask.completed))
  }
  
    handleChange = event => {
      this.setInput(event.target.value)
    }

    handleSubmit = (event, id) => {
      event.preventDefault()
      this.props.dispatch(updateTaskDetails(id, this.state.input))
      this.setEditing(null)
    }

    setClassName = task => {
    if (task.id == this.state.editing) {
      return 'editing'
    }
    return task.completed ? 'completed' : 'view'
  }
  
  render(){
  return(
  <section className="main">
    <input id="toggle-all" className="toggle-all" type="checkbox" />
    <label htmlFor="toggle-all">Mark all as complete</label>
    <ul className="todo-list">
      {this.props.tasks.map((task) => {
        if (task.completed){
        return (
          <>
            <li key={task.id} className={this.setClassName(task)}
              onDoubleClick={() =>
                 {this.setEditing(task.id)
                 this.setInput(task.task)}}>
              <div className="view">
                <input className="toggle"
                  type="checkbox"
                  onClick={() => this.toggle(task.id, this.props)}
                  defaultChecked={task.completed && 'checked'} />
                <label>{task.task}</label>
                <button onClick={() => this.props.dispatch(deleteTask(task.id))} 
                className="destroy"></button>
              </div>
              <form onSubmit={(event) => this.handleSubmit(event, task.id)}>
                <input 
                className="edit" 
                value={this.state.input}
                onChange={(event) => this.handleChange(event)}/>
              </form> 
            </li>
          </>
        )}
      })}
    </ul>
  </section>
  )}}
  


function mapStateToProps(globalState) {
  return {
    tasks: globalState.tasks,
  }
}

export default connect(mapStateToProps)(CompletedList);
