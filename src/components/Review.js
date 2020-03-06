import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import {
  Button, UncontrolledAlert, Card, CardImg, CardBody,
  CardTitle, CardSubtitle, CardText, Form, Input, Row
} from 'reactstrap';

const Review = () => (
  <Fragment>
  
    {/*
    <UncontrolledAlert color="danger" className="d-none d-lg-block">
      <strong>Not signed in.</strong>
    </UncontrolledAlert>
    */}
    <div>
      <Card style={{border: "none", backgroundColor: "rgba(245, 245, 245, 0)"}}>
        <CardBody className="justify-content-center text-center">
          <CardTitle className="h3 mb-2 pt-2 text-dark text-center" style={{ fontSize: '3rem'}}>See what others have to say</CardTitle>
        </CardBody>
      </Card>
    </div>
  </Fragment>
);

export default Review;