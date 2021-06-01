import React from 'react';
import { Navbar,Nav, Form,FormControl,Button, Container , Row ,Col,Jumbotron} from 'react-bootstrap';
import Job from './Job'


function MainForm() {
  return (
    <>
    <Form className="p-3 m-3 bg-light">
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email :</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
            <Form.Label>Password :</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>

          <Form.Row>
            <Form.Group as={Col} controlId="fname">
              <Form.Label>First Name:</Form.Label>
              <Form.Control type="text" placeholder="John" />
            </Form.Group>

            <Form.Group as={Col} controlId="lname">
              <Form.Label>Last Name :</Form.Label>
              <Form.Control type="text" placeholder="Doe" />
            </Form.Group>
          </Form.Row>

          <Form.Group controlId="phone">
            <Form.Label>Phone :</Form.Label>
              <Form.Control type="text" placeholder="Enter Phone" />
                </Form.Group>

                <Form.Group controlId="batch">
                  <Form.Label>Batch:</Form.Label>
                  <Form.Control as="select" defaultValue="Choose Batch">
                    <option>Choose Batch</option>
                    <option>...</option>
                  </Form.Control>
                </Form.Group>

                <Form.Group controlId="course">
                  <Form.Label>I want to learn Programming with Python to:</Form.Label>
                  <Form.Control as="select" defaultValue="Choose your Objective">
                    <option>Choose your Objective</option>
                    <option>...</option>
                  </Form.Control>
                </Form.Group>

                <h3>Rs. 4999/- </h3>

                <Button variant="primary" type="submit" className="p-3 w-100" style={{borderRadius:0}}>
                 Submit
               </Button>
               
      </Form>
      {/* <Jumbotron><h1>What's in it for you?</h1></Jumbotron> */}
     <job/>
      </>
     
      
  )
}

export default MainForm
