import React from 'react'
import { Container, Row, Form, Col, Button } from 'react-bootstrap';
import './login.css' //sh rfce
function login() {
    /*return (
        <div>
        <h1>this is login page</h1>    
        </div>
    )*/

    return (
        <Container>
            <Row>
                <Col > {/*className="dummy"*/}
                    <Form>
                        <Form.Group>
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                            {/*<Form.Text className="text-muted">
                                We'll never share your email with anyone else.
    </Form.Text>*/}
                        </Form.Group>

                        <Form.Group >
                            <Form.Label>Password</Form.Label>
                            <Form.Control className="password" type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group>
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
  </Button>
                    </Form>
                </Col>
            </Row>
        </Container>


    )
}

export default login
