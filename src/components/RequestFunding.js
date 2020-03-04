import React, { Fragment } from 'react';
import { Container, Row, Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Link } from 'react-router-dom';

import {
  UncontrolledAlert, Card, CardImg, CardBody,
  CardTitle, CardSubtitle, CardText
} from 'reactstrap';

const RequestFunding = () => (
  <Fragment>

    {/*
    <UncontrolledAlert color="danger" className="d-none d-lg-block">
      <strong>Not signed in.</strong>
    </UncontrolledAlert>
    */}
      <Card>
        <CardBody>
          <CardTitle className="d-block pb-1 h2 text-dark">Request funds form</CardTitle>
          <Container className="px-0" style={{display: "flex"}}>
          <Form>
        <Row form>
            <Col md={6}>
            <FormGroup>
                <Label for="exampleEmail">Your first name</Label>
                <Input type="text" name="firstName" id="firstName" placeholder="First" />
            </FormGroup>
            </Col>
            <Col md={6}>
            <FormGroup>
                <Label for="exampleEmail"> Your last name</Label>
                <Input type="text" name="lastName" id="lastName" placeholder="Last" />
            </FormGroup>
            </Col>
        </Row>
        <FormGroup>
            <Label for="email">Your company email </Label>
            <Input type="email" name="email" id="email" placeholder="Email"/>
        </FormGroup>
        <FormGroup>
            <Label for="copmany">Company name</Label>
            <Input type="text" name="company" id="company" placeholder="Company"/>
        </FormGroup>
        <FormGroup>
            <Label for="address">Address</Label>
            <Input type="address" name="address" id="address" placeholder="Street"/>
        </FormGroup>
        <Row form>
            <Col md={6}>
            <FormGroup>
                <Label for="city">City</Label>
                <Input type="text" name="city" id="city" placeholder="City"/>
            </FormGroup>
            </Col>
            <Col md={4}>
            <FormGroup>
                <Label for="state">State</Label>
                <Input type="text" name="state" id="state" placeholder="State"/>
            </FormGroup>
            </Col>
            <Col md={2}>
            <FormGroup>
                <Label for="zip">Zipcode</Label>
                <Input type="text" name="zip" id="zip" placeholder="Zip"/>
            </FormGroup>  
            </Col>
        </Row>
        <Button color="success" className="font-weight-bold" style={{"width": "100%"}} >Send Info</Button>
        </Form>
          </Container>
        </CardBody>
      </Card>
  </Fragment>
);

export default RequestFunding;