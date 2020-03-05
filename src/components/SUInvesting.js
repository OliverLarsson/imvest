import React, { Fragment } from 'react';
import { Container, Row, Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Link } from 'react-router-dom';

import {
  UncontrolledAlert, Card, CardImg, CardBody,
  CardTitle, CardSubtitle, CardText
} from 'reactstrap';

const SUInvesting = () => (
  <Fragment>
      <Card>
        <CardBody>
          <CardTitle className="d-block pb-1 h2 text-dark">Financial Information</CardTitle>
          <Container className="px-0">
          <Form>
          <Row form>
            <Col lg={12}>
            <FormGroup>
            <Label for="bank">Annual Income</Label>
            <Input type="select" name="select" id="exampleSelect">
              <option>$0 - $100k</option>
              <option>$100k - $250k</option>
              <option>$250k - $500k</option>
              <option>$500k - $1mm</option>
              <option>$1mm + </option>
            </Input>
            </FormGroup>
            </Col>
        </Row>
        <Row form>
            <Col lg={12}>
            <FormGroup>
            <Label for="bank">Net Worth</Label>
            <Input type="select" name="select" id="exampleSelect">
              <option>$0 - $500k</option>
              <option>$500k - $1mm</option>
              <option>$1mm - $5mm</option>
              <option>$5mm + </option>
            </Input>
            </FormGroup>
            </Col>
        </Row>
        <Row form>
        <Col lg={12}>
            <FormGroup>
                <Label for="balance">Add to starting balance </Label>
                <Input type="text" name="balance" id="balance" placeholder="$"/>
            </FormGroup>
            </Col>
        </Row>
        <Row form>
        <Col lg={12}>
            <FormGroup>
                <Label for="balance2">Confirm starting balance </Label>
                <Input type="text" name="balance2" id="balance2" placeholder="$"/>
            </FormGroup>
            </Col>
        </Row>
        <Row form style={{paddingTop: "2rem"}}>
          <Col md={6}>
          <Link to='/signup4'><Button outline color="success" className="font-weight-bold" style={{"width": "100%"}} >Back</Button></Link>
          </Col>
          <Col md={6}> 
          <Link to='/invest'><Button color="success" className="font-weight-bold" style={{"width": "100%"}} >Next ></Button></Link>
          </Col>
        </Row>
        </Form>
          </Container>
        </CardBody>
      </Card>
  </Fragment>
  );
  
  export default SUInvesting;
  