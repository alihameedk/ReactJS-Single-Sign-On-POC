import React from 'react'
import { Container, Row, Form, Col, Button } from 'react-bootstrap';
function Dashboard() {
    return (
        <Container>
            <Row>
                <Col>
                    <Form>
                        <Form.Group >
                            <Form.Label>Account Number</Form.Label>
                            <Form.Control type="number" />

                        </Form.Group>

                        <Form.Group >
                            <Form.Label>dob</Form.Label>
                            <Form.Control type="date" />

                        </Form.Group>

                        <Button variant="primary" >
                            Log out
  </Button>
                    </Form>
                </Col>
            </Row>
        </Container>

    )
}

export default Dashboard
