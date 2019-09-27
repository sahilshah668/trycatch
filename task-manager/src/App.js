import React, { Component } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import {Provider} from './Context'
export default class App extends Component {
  render() {
    return (
      <Provider>
        <div>
        <Header title1="Task" title2="Add Task" />
        <Tasks />
        </div>
      </Provider>
    )
  }
}
