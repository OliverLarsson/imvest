import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import {
  Button, UncontrolledAlert, Card, CardImg, CardBody,
  CardTitle, CardSubtitle, CardText, Form, Input
} from 'reactstrap';

const SideCard = () => (
  <Fragment>
  
    {/*
    <UncontrolledAlert color="danger" className="d-none d-lg-block">
      <strong>Not signed in.</strong>
    </UncontrolledAlert>
    */}
    <div>
      <Card style={{border: "none", backgroundColor: "rgba(245, 245, 245, 0)"}}>
        <CardBody>
          <CardTitle className="h3 mb-2 pt-2 text-dark" style={{ fontSize: '3.5rem', paddingTop:'1rem' }}>Make money and make a positive impact.</CardTitle>
          <CardText className="text-dark mb-3 font-weight-light text-uppercase" style={{ fontSize: '1.5rem' , paddingTop:'1rem'}}>Invest for meaningful outcomes and meaningful returns.</CardText>
          <Link to="/invest"><Button color="success" className="font-weight-bold " style={{"width": "30%", offset: "3rem"}} >Start Investing</Button></Link>
        </CardBody>
      </Card>
    </div>
  </Fragment>
);

export default SideCard;