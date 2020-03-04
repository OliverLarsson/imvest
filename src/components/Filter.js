import React, { Fragment } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

import {
  Button, UncontrolledAlert, Card, CardImg, CardBody,
  CardTitle, CardSubtitle, CardText, Form, Input
} from 'reactstrap';

const Filter = () => (
  <Fragment>

    {/*
    <UncontrolledAlert color="danger" className="d-none d-lg-block">
      <strong>Not signed in.</strong>
    </UncontrolledAlert>
    */}
      <Card>
        <CardBody>
          <CardTitle className="d-block pb-1 h2 text-secondary">Filter based on impact.</CardTitle>
          <Container className="px-0" style={{display: "flex"}}>
          <Row noGutters className="pt-2 pt-md-3 w-100 px-2 px-xl-0">
              <Col style={{"padding-left": "0.5rem"}}>
              <Button outline color="secondary" style={{"width": "100%"}} >Filter</Button>
              </Col>
              <Col style={{"padding-left": "0.5rem"}}>
              <Button outline color="secondary" style={{"width": "100%"}} >Filter</Button>
              </Col>
              <Col style={{"padding-left": "0.5rem"}}>
              <Button outline color="secondary" style={{"width": "100%"}} >Filter</Button>
              </Col>
              <Col style={{"padding-left": "0.5rem"}}>
              <Button outline color="secondary" style={{"width": "100%"}} >Filter</Button>
              </Col>
          </Row>
        </Container>
        <Container className="px-0" style={{display: "flex"}}>
          <Row noGutters className="pt-2 pt-md-3 w-100 px-4 px-xl-0">
              <Col style={{"padding-left": "0.5rem"}}>
              <Button outline color="secondary" style={{"width": "100%"}} >Filter</Button>
              </Col>
              <Col style={{"padding-left": "0.5rem"}}>
              <Button outline color="secondary" style={{"width": "100%"}} >Filter</Button>
              </Col>
              <Col style={{"padding-left": "0.5rem"}}>
              <Button outline color="secondary" style={{"width": "100%"}} >Filter</Button>
              </Col>
              <Col style={{"padding-left": "0.5rem"}}>
              <Button outline color="secondary" style={{"width": "100%"}} >Filter</Button>
              </Col>
          </Row>
        </Container>
        <Container className="px-0" style={{display: "flex"}}>
          <Row noGutters className="pt-2 pt-md-3 w-100 px-4 px-xl-0">
              <Col style={{"padding-left": "0.5rem"}}>
              <Form >
                <Input type="search" className="mr-3" placeholder="Country" />
              </Form>
              </Col>
              <Col style={{"padding-left": "0.5rem"}}>
              <Form >
                <Input type="search" className="mr-3" placeholder="State" />
              </Form>
              </Col>
              <Col style={{"padding-left": "0.5rem"}}>
              <Form >
                <Input type="search" className="mr-3" placeholder="Keyword" />
              </Form>
              </Col>
              <Col style={{"padding-left": "0.5rem"}}>
              <Button color="success" className="font-weight-bold" style={{"width": "100%"}} >Search</Button>
              </Col>
          </Row>
        </Container>
        </CardBody>
      </Card>
  </Fragment>
);

export default Filter;