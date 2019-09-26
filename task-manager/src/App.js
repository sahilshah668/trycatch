import React, { Component } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
export default class App extends Component {
  render() {
    return (
      <div>
        <Header title1="Task" title2="Add Task" />
        <Tasks />
      </div>
    )
  }
}
