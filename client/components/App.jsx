import React from 'react'
import AddTodo from './AddTodo'
import ListToDos from './ListToDos'
import Footer from './Footer'
// import CompletedList from './CompletedList'
// import ActiveList from './ActiveList'
import { connect } from 'react-redux'
import { fetchTasks } from '../actions/index'
import { Route } from 'react-router-dom'

class App extends React.Component {
  componentDidMount () {
    this.props.dispatch(fetchTasks())
  }

  render () {
    return (
      <>
        <AddTodo/>
        <Route path="/" component={ListToDos}/>
        {/* <Route exact path="/active" component={ListToDos}/> */}
        {/* <Route exact path="/completed" component={CompletedList}/>  */}
        <Footer />
      </>
    )
  }
}
function mapStateToProps(globalState){
  return {
    tasks: globalState.tasks
  }
}
export default connect(mapStateToProps)(App)

