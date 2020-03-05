import React, { Fragment } from 'react';
import { Container, Row, Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Link } from 'react-router-dom';

import {
  UncontrolledAlert, Card, CardImg, CardBody,
  CardTitle, CardSubtitle, CardText
} from 'reactstrap';

const SUAccount = () => (
  <Fragment>
      <Card>
        <CardBody>
          <CardTitle className="d-block pb-1 h2 text-dark">Create an account</CardTitle>
          <Container className="px-0">
          <Form>
        <Row form>
          <Col lg={12}>
        <FormGroup>
            <Label for="email">Email </Label>
            <Input type="email" name="email" id="email" placeholder="Email"/>
        </FormGroup>
        </Col>
        </Row>
        <Row form>
          <Col md={6}>
            <FormGroup>
              <Label for="password1">Password </Label>
              <Input type="password" name="password1" id="password1" placeholder="password"/>
            </FormGroup>
          </Col>
          <Col md={6}> 
            <FormGroup>
              <Label for="password2">Confirm Password</Label>
              <Input type="password" name="password2" id="password2" placeholder="password"/>
            </FormGroup>
          </Col>
        </Row>
        <Row form style={{paddingTop: "1rem"}}>
          <Col lg={12}>
            <FormGroup>
            <div class="form-check">
            <Input class="form-check-input is-invalid" type="checkbox" value="" id="invalidCheck3" required></Input>
            <Label class="form-check-label" for="invalidCheck3"> By checking this box you agree to the <Link to='/terms' target="_blank"> Terms of Service</Link></Label>
            <div class="invalid-feedback">
              You must agree before submitting.
            </div>
            </div>
            </FormGroup>
          </Col>
        </Row>
        <Row form>
          <Col lg={12}> 
          <Link to='/signup2'><Button color="success" className="font-weight-bold" style={{"width": "100%"}} >Next ></Button></Link>
          </Col>
        </Row>
        </Form>
          </Container>
        </CardBody>
      </Card>
  </Fragment>
  );
  
  export default SUAccount;
  