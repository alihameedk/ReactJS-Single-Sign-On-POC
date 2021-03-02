import React from 'react'
import { Form, Col, Button } from 'react-bootstrap'

function Dashboard() {
    return (
        <Form>
            <Form.Row>
                <Form.Group as={Col} controlId="FormGridName">
                    <Form.Label>Your Full Name </Form.Label>
                    <Form.Control type="name" placeholder="Enter Full Name"  />
                </Form.Group>

                <Form.Group as={Col} controlId="FormGridAddress">
                    <Form.Label>Address</Form.Label>
                    <Form.Control type="address" placeholder="Address"  />
                </Form.Group>
            </Form.Row>
            <Form.Row>
                <Form.Group as={Col} controlId="formGridCity">
                    <Form.Label>City</Form.Label>
                    <Form.Control />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridState">
                    <Form.Label>State</Form.Label>
                    <Form.Control as="select" defaultValue="Choose...">
                        <option>Choose...</option>
                        <option>KPK</option>
                        <option>Punjab</option>
                        <option>Sindh</option>
                        <option>Balochistan</option>
                    </Form.Control>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridZip">
                    <Form.Label>Zip</Form.Label>
                    <Form.Control />
                </Form.Group>
            </Form.Row>

           <Form.Row>
<Form.Group as={Col} > 
<Button as="input" type="submit" value="Submit" />{' '}
</Form.Group>
 </Form.Row>






            <Form.Check
                type="switch"
                id="custom-switch"
                label="Edit user information"
                class="muted-text"
            />

        </Form>
    )
}

export default Dashboard
