import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import {
  Button, UncontrolledAlert, Card, CardImg, CardBody,
  CardTitle, CardSubtitle, CardText, Form, Input
} from 'reactstrap';

const BANNER = 'https://i.imgur.com/3J8cXP0.jpg';

const FeatureCard = () => (
  <Fragment>
    <div>
      <Card style={{backgroundColor: '#F6F8FC'}}>
      <CardImg top width="100%" src={BANNER} alt="banner" />
        <CardBody>
        <CardTitle className="h4 mb-1 pt-2 text-dark" style={{ fontSize: '.8rem'}}>Company</CardTitle>
          <CardText className="text-dark mb-0 font-weight-light text-uppercase" style={{ fontSize: '.5rem'}}>Mission</CardText>
          <CardText className="text-success mb-0 font-weight-light text-uppercase" style={{ fontSize: '.5rem'}}>$1.07M Raised</CardText>
          <CardText className="text-success mb-0 font-weight-light text-uppercase" style={{ fontSize: '.5rem'}}>3000 Investors</CardText>
        </CardBody>
      </Card>
    </div>
  </Fragment>
);

export default FeatureCard;