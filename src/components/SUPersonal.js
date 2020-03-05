import React, { Fragment } from 'react';
import { Container, Row, Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Link } from 'react-router-dom';

import {
  UncontrolledAlert, Card, CardImg, CardBody,
  CardTitle, CardSubtitle, CardText
} from 'reactstrap';

const SUPersonal = () => (
  <Fragment>
      <Card>
        <CardBody>
          <CardTitle className="d-block pb-1 h2 text-dark">About You</CardTitle>
          <Container className="px-0">
          <Form>
        <Row form>
            <Col md={6}>
            <FormGroup>
                <Label for="exampleEmail">First name</Label>
                <Input type="text" name="firstName" id="firstName" placeholder="First" />
            </FormGroup>
            </Col>
            <Col md={6}>
            <FormGroup>
                <Label for="exampleEmail"> Last name</Label>
                <Input type="text" name="lastName" id="lastName" placeholder="Last" />
            </FormGroup>
            </Col>
        </Row>
        <Row form>
          <Col md={6}>
            <FormGroup>
              <Label for="password1">Birthday </Label>
              <Input type="date" name="birthday" id="birthday" placeholder="Birthday"/>
            </FormGroup>
          </Col>
          <Col md={6}> 
            <FormGroup>
              <Label for="password2">Social Security Number</Label>
              <Input type="text" name="ssn" id="ssn" placeholder="xxx-xx-xxxx"/>
            </FormGroup>
          </Col>
        </Row>
        <Row form style={{paddingTop: "2rem"}}>
          <Col md={6}>
          <Link to='/signup'><Button outline color="success" className="font-weight-bold" style={{"width": "100%"}} >Back</Button></Link>
          </Col>
          <Col md={6}> 
          <Link to='/signup3'><Button color="success" className="font-weight-bold" style={{"width": "100%"}} >Next ></Button></Link>
          </Col>
        </Row>
        </Form>
          </Container>
        </CardBody>
      </Card>
  </Fragment>
  );
  
  export default SUPersonal;
  