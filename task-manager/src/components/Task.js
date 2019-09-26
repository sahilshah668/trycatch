import React, { Component } from 'react'
import {Container,Card,CardBody,CardTitle,ListGroup,ListGroupItem} from 'reactstrap'
export default class Task extends Component {
    onDelete =  ()  => {
        this.props.onDeleteClick()
        
    }
    render() {
        return (
            <div>
            <Container>
              <Card>
                  <small onClick={this.onDelete} style={{color:'red',cursor:'pointer'}}>delete</small>
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
    }
}
