import React, { Fragment } from 'react';
import { Container, Row, Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Link } from 'react-router-dom';

import {
  UncontrolledAlert, Card, CardImg, CardBody,
  CardTitle, CardSubtitle, CardText
} from 'reactstrap';

const SUPersonal2 = () => (
  <Fragment>
      <Card>
        <CardBody>
          <CardTitle className="d-block pb-1 h2 text-dark">Contact Information</CardTitle>
          <Container className="px-0">
          <Form>
          <Row form>
            <Col md={6}>
            <FormGroup>
                <Label for="tel">Phone Number</Label>
                <Input type="tel" name="tel" id="tel" placeholder="###-###-####"/>
            </FormGroup>
            </Col>
            <Col md={6}>
            <FormGroup>
                <Label for="address">Address</Label>
                <Input type="address" name="address" id="address" placeholder="Address"/>
            </FormGroup>
            </Col>
        </Row>
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
        <Row form style={{paddingTop: "2rem"}}>
          <Col md={6}>
          <Link to='/signup2'><Button outline color="success" className="font-weight-bold" style={{"width": "100%"}} >Back</Button></Link>
          </Col>
          <Col md={6}> 
          <Link to='/signup4'><Button color="success" className="font-weight-bold" style={{"width": "100%"}} >Next ></Button></Link>
          </Col>
        </Row>
        </Form>
          </Container>
        </CardBody>
      </Card>
  </Fragment>
  );
  
  export default SUPersonal2;
  