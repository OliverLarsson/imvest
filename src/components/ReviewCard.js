import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import {
  Button, UncontrolledAlert, Card, CardImg, CardBody,
  CardTitle, CardSubtitle, CardText, Form, Input
} from 'reactstrap';

const BANNER = 'https://images.pexels.com/photos/1586973/pexels-photo-1586973.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260';

const ReviewCard = () => (
  <Fragment>
    <div>
      <Card style={{backgroundColor: '#F6F8FC'}}>
      <CardImg top width="100%" src={BANNER} alt="banner" />
        <CardBody className="justify-content-center text-center">
        <CardTitle className="h4 mb-1 pt-2 text-dark" style={{ fontSize: '.8rem'}}>Name</CardTitle>
          <CardText className="text-dark mb-0 font-weight-light text-uppercase" style={{ fontSize: '.5rem'}}>Review review review review review review review review review review review.</CardText>
          <CardText className="text-success mb-0 font-weight-light text-uppercase" style={{ fontSize: '.5rem'}}>Read More</CardText>
        </CardBody>
      </Card>
    </div>
  </Fragment>
);

export default ReviewCard;