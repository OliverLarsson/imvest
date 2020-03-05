import React, { Fragment } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

import {
  Button, UncontrolledAlert, Card, CardImg, CardBody,
  CardTitle, CardSubtitle, CardText, Form, Input
} from 'reactstrap';

const ProgressPersonal = () => (
  <Fragment>

    {/*
    <UncontrolledAlert color="danger" className="d-none d-lg-block">
      <strong>Not signed in.</strong>
    </UncontrolledAlert>
    */}
          <Row>
              <Col>
              <CardText className="text-dark font-weight-light text-uppercase text-center" style={{ fontSize: '0.8rem' , paddingTop:'1rem'}}>Account</CardText>
              </Col>
              <Col>
              <CardText className="text-success font-weight-bold text-uppercase text-center" style={{ fontSize: '0.8rem' , paddingTop:'1rem'}}>Personal</CardText>
              </Col>
              <Col>
              <CardText className="text-dark font-weight-light text-uppercase text-center" style={{ fontSize: '0.8em' , paddingTop:'1rem'}}>Payment</CardText>
              </Col>
              <Col>
              <CardText className="text-dark font-weight-light text-uppercase text-center" style={{ fontSize: '0.8rem' , paddingTop:'1rem'}}>Investments</CardText>
              </Col>
          </Row>
  </Fragment>
);

export default ProgressPersonal;