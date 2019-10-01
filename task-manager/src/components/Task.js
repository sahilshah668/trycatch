import React, { Component } from 'react'
import {Container,Card,CardBody,CardTitle,ListGroup,ListGroupItem} from 'reactstrap'
import {Consumer} from '../Context'
import axios from 'axios'
 export default class Task extends Component {
    onDelete =  (id,dispatch)  => {
        axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
         .then(res => {
            dispatch({
                type:'DELETE_CONTACT',
                payload:id
            })
         })

    }
    render() {
     return (
         <Consumer>
             {value => {
                 const {dispatch} = value
                 return (
                    <div>
                    <Container>
                      <Card>
                          <small onClick={this.onDelete.bind(this,this.props.id,dispatch)} style={{color:'red',cursor:'pointer'}}>delete</small>
                        <CardBody>
                          <CardTitle>
                              {this.props.title}
                          </CardTitle>
                          <ListGroup>
                                <ListGroupItem>{this.props.content}</ListGroupItem>
                            </ListGroup>
                        </CardBody>
                      </Card>  
                      </Container>  
                    </div>
                 )
             }}
         </Consumer>
     )
     
    }
}
