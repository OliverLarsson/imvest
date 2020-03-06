import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import {
  Button, UncontrolledAlert, Card, CardImg, CardBody,
  CardTitle, CardSubtitle, CardText, Form, Input, Row
} from 'reactstrap';

const SideCard3 = () => (
  <Fragment>
  
    {/*
    <UncontrolledAlert color="danger" className="d-none d-lg-block">
      <strong>Not signed in.</strong>
    </UncontrolledAlert>
    */}
    <div>
      <Card style={{border: "none", backgroundColor: "rgba(245, 245, 245, 0)"}}>
        <CardBody>
          <CardTitle className="h3 mb-2 pt-2 text-dark" style={{ fontSize: '2.5rem', paddingTop:'1rem' }}>See the impact you make</CardTitle>
          <CardText className="text-dark mb-3 font-weight-light text-uppercase" style={{ fontSize: '1.5rem' , paddingTop:'1rem'}}>We measure the ongoing impact of every company under your investment. </CardText>
          <div className="mb-4"/>
          <Link to="/about"><Button outline color="secondary" className="font-weight-bold " style={{"width": "60%"}} >Learn More</Button></Link>
          <div className="mb-2"/>
          <Link to="/invest" style={{marginTop: '3rem'}}><Button outline color="success" className="font-weight-bold " style={{"width": "60%"}} >See All Investments</Button></Link> 
        </CardBody>
      </Card>
    </div>
  </Fragment>
);

export default SideCard3;