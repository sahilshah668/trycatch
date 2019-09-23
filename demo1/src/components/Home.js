import React, { Component } from 'react'
import {Button} from 'reactstrap'

export default class Home extends Component {
    onClick = () => {
        this.props.history.push('/second')
    }
    render() {
        return (
            <div>
                <h1>hello world</h1>
                <Button title="next" onClick={this.onClick} />
            </div>
        )
    }
}
