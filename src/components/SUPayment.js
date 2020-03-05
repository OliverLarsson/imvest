import React, { Fragment } from 'react';
import { Container, Row, Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Link } from 'react-router-dom';

import {
  UncontrolledAlert, Card, CardImg, CardBody,
  CardTitle, CardSubtitle, CardText
} from 'reactstrap';

const SUPayment = () => (
  <Fragment>
      <Card>
        <CardBody>
          <CardTitle className="d-block pb-1 h2 text-dark">Banking Information</CardTitle>
          <Container className="px-0">
          <Form>
          <Row form>
            <Col lg={12}>
            <FormGroup>
            <Label for="bank">Bank</Label>
            <Input type="select" name="select" id="exampleSelect">
              <option>Bank of America</option>
              <option>Chase</option>
              <option>Capital One</option>
              <option>Wells Fargo</option>
              <option>Ally</option>
              <option>etc</option>
            </Input>
            </FormGroup>
            </Col>
        </Row>
        <Row form>
        <Col lg={12}>
            <FormGroup>
                <Label for="account">Account Number</Label>
                <Input type="text" name="account" id="account" placeholder="Account number"/>
            </FormGroup>
            </Col>
        </Row>
        <Row form>
        <Col lg={12}>
            <FormGroup>
                <Label for="routing">Routing Number</Label>
                <Input type="text" name="routing" id="routing" placeholder="Routing number"/>
            </FormGroup>
            </Col>
        </Row>
        <Row form style={{paddingTop: "2rem"}}>
          <Col md={6}>
          <Link to='/signup3'><Button outline color="success" className="font-weight-bold" style={{"width": "100%"}} >Back</Button></Link>
          </Col>
          <Col md={6}> 
          <Link to='/signup5'><Button color="success" className="font-weight-bold" style={{"width": "100%"}} >Next ></Button></Link>
          </Col>
        </Row>
        </Form>
          </Container>
        </CardBody>
      </Card>
  </Fragment>
  );
  
  export default SUPayment;
  