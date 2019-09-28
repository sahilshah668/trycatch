import React, { Component } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import {BrowserRouter as Router,Route} from 'react-router-dom'
import {Provider} from './Context'
export default class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
        <Header title1="Task" title2="Add Task" />
          <div>
            <Route exact path="/" component={Tasks} />
          <Route exact path="/add" component={AddTask} />
          </div>
        </Router>
      </Provider>
    )
  }
}
