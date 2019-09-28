import React, { Component } from "react";
import { Consumer } from '../Context'
import uuid from 'uuid'
import {
  Form,
  FormGroup,
  Card,
  CardBody,
  Input,
  Label,
  Button,
  Container,
  Alert,
  FormFeedback
} from "reactstrap";
export default class AddContacts extends Component {
  state = {
    title: "",
    content: "",
  };
  onChange = e => {
    console.log(e)
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = (dispatch,e) => {
    e.preventDefault()
    const {title,content} = this.state
    const newTask = {
      id:uuid(),
      title,
      content
    }
    dispatch({
      type:'ADD_TASK',
      payload:newTask
    })
    this.props.history.push('/')
  }
  render() {
    const { title, content } = this.state;
    return (
      <Consumer>
        {value => {
          const {dispatch} = value
          return (
            <Container>
            <div>
            
              <Card className="mt-5">
                <CardBody>
                  <Form onSubmit={this.onSubmit.bind(this,dispatch)}>
                    <FormGroup>
                      <Label for="exampleEmail">Title</Label>
                      <Input
                        type="text"
                        name="title"
                        id="exampleEmail"
                        placeholder="Enter a Title"
                        value={title}
                        onChange={this.onChange}
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label for="exampleEmail">Content</Label>
                      <Input
                        type="text"
                        name="content"
                        id="exampleEmail"
                        placeholder="Enter a content"
                        value={content}
                        onChange={this.onChange}
                      />
                    </FormGroup>
                    <Button type="submit">Add Task</Button>
                  </Form>
                </CardBody>
              </Card>
            </div>
          </Container>
          )
        }}
      </Consumer>
    )
    
  }
}
