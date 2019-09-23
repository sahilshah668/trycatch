import React, { Component } from 'react'
import {Button} from 'reactstrap'

export default class Second extends Component {
    xyz = () => {
        this.props.history.push('/')
    } 
    render() {
        return (
            <div>
                <h1>second page</h1>
                <Button title="back"  onClick={this.xyz}/>
            </div>
        )
    }
}
