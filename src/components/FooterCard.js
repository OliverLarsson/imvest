import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import {
  Button, UncontrolledAlert, Card, CardImg, CardBody,
  CardTitle, CardSubtitle, CardText, Form, Input, Row
} from 'reactstrap';

const FooterCard = () => (
  <Fragment>
  
    {/*
    <UncontrolledAlert color="danger" className="d-none d-lg-block">
      <strong>Not signed in.</strong>
    </UncontrolledAlert>
    */}
    <div>
      <Card style={{border: "none", backgroundColor: "rgba(245, 245, 245, 0)"}}>
        <CardBody className="justify-content-center text-center">
          <CardTitle className="h3 mb-2 pt-2 text-light text-center" style={{ fontSize: '2.5rem', paddingTop:'2.5rem' }}>Have questions?</CardTitle>
          <CardText className="text-light mb-3 font-weight-light text-uppercase text-center" style={{ fontSize: '1.5rem' , paddingTop:'1.5rem', paddingBottom:'.5rem'}}>Ask one of our experts.</CardText>
          <div className="mb-4"/>
          <Link to="/about"><Button color="success" className="font-weight-bold text-center" style={{"width": "50%"}} >Get Help</Button></Link>
        </CardBody>
      </Card>
    </div>
  </Fragment>
);

export default FooterCard;