import React, { Fragment } from 'react';
import { Container, Row, Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Link } from 'react-router-dom';

import {
  UncontrolledAlert, Card, CardImg, CardBody,
  CardTitle, CardSubtitle, CardText
} from 'reactstrap';
import ProgressInvesting from './ProgressInvesting';
import SUInvesting from './SUInvesting';

const SignUp5 = () => (
  <Fragment>
    <main className="my-5 py-5" style={{backgroundColor: '#F6F8FC'}} >
    <Container className=" col-sm-12 col-md-6 offset-md-3"> 
        <Row >
              <Col>
                <ProgressInvesting /> 
              </Col>
          </Row>
        </Container>
        <Container className="px-0 col-sm-12 col-md-6 offset-md-3"> 
        <Row noGutters className="pt-2">
              <Col>
                <SUInvesting />  
              </Col>
          </Row>
        </Container>
    </main>
  </Fragment>
);

export default SignUp5;