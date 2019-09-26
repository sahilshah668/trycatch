import React, { Component } from 'react'
import Task from './Task'
export default class Tasks extends Component {
    constructor(props) {
        super(props)
        this.state = {
            tasks:[
                {
                    id:1,
                    title:'reactjs',
                    content:'practice react'
                },
                {
                    id:2,
                    title:'react-native',
                    content:'practice react'
                },
                {
                    id:3,
                    title:'native-proton',
                    content:'practice react'
                }
            ]
        }
    }
    deleteTask = (id) => {
        const {tasks} = this.state
       const  newTask = tasks.filter(task => task.id !== id)
        this.setState({tasks:newTask})
    // console.log(id)
    }
    render() {
        const {tasks} = this.state
        return (
            <div>
                {tasks.map(task => (
                    <Task key={task.id} title={task.title} content={task.content} onDeleteClick={this.deleteTask.bind(this,task.id)} />
                ))}
            </div>
        )
    }
}
