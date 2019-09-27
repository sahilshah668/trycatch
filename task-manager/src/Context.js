import React, { Component } from 'react'

const Context = React.createContext()

const reducer = (state,action) => {
    switch(action.type) {
        case 'DELETE_CONTACT':
            return {
                ...state,
                tasks:state.tasks.filter(contact => contact.id !== action.payload)
            }
        default:
            return state
    }
}


export class Provider extends Component {
    state = {
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
        ],
        dispatch: action => {
            this.setState(state => reducer(state,action))
        }
    }
    render() {
        return (
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        )
    }
}

export const Consumer = Context.Consumer;
