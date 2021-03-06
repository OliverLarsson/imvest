import React, { Fragment } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';


import {
  Button, UncontrolledAlert, Card, CardImg, CardBody,
  CardTitle, CardSubtitle, CardText, Form, Input
} from 'reactstrap';

// Will probably need to be a function or class to adjust/load results 
const Results = () => (
  <Fragment>

    {/*
    Probably need to create a new class for cards
    */}
    
      <Card>
        <CardBody>
          <CardTitle className="d-block pb-1 h2 text-dark">Explore investment opportunites</CardTitle>
          <Container className="px-0" style={{display: "flex"}}>
          <Row noGutters className="pt-2 pt-md-3 w-100 px-2 px-xl-0">
              <Col style={{"padding-left": "0.5rem"}}>
              <Link to="/companyinfo">
                <Card>
                <CardBody>
                <CardText className="text-secondary mb-3 text-uppercase" style={{ fontSize: '1rem' }}>Company 1</CardText>
                <Container className="px-0" style={{display: "flex"}}>
                <Row noGutters className="pt-2 pt-md-3 w-100 px-2 px-xl-0">
                    <Col style={{"padding-left": "0.5rem"}}>
                    
                    </Col>
                </Row>
                </Container>
                </CardBody>
              </Card>
              </Link>
              </Col>
        </Row>
        </Container>
        <Container className="px-0" style={{display: "flex"}}>
          <Row noGutters className="pt-2 pt-md-3 w-100 px-2 px-xl-0">
              <Col style={{"padding-left": "0.5rem"}}>
              <Card>
                <CardBody>
                <CardText className="text-secondary mb-3 text-uppercase" style={{ fontSize: '1rem' }}>Company 2</CardText>
                <Container className="px-0" style={{display: "flex"}}>
                <Row noGutters className="pt-2 pt-md-3 w-100 px-2 px-xl-0">
                    <Col style={{"padding-left": "0.5rem"}}>
                    </Col>
                </Row>
                </Container>
                </CardBody>
              </Card>
              </Col>
        </Row>
        </Container>
        </CardBody>
      </Card>
  </Fragment>
);

export default Results;