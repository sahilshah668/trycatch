import React, { Component } from "react";
import axios from 'axios'
const Context = React.createContext();


const reducer = (state, action) => {
  switch (action.type) {
    case "DELETE_CONTACT":
      return {
        ...state,
        tasks: state.tasks.filter(task => task.id !== action.payload)
      };
      case "ADD_TASK":
      return {
        ...state,
        tasks: [action.payload,...state.tasks]
      };
    default:
      return state;
  }
};

export class Provider extends Component {
  state = {
    tasks: [],
    dispatch: action => {
      this.setState(state => reducer(state, action));
    }
  };
  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/todos')
     .then(res => this.setState({tasks:res.data}))
  }
  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
