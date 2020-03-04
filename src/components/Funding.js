import React, { Fragment } from 'react';
import { Container, Row, Col } from 'reactstrap';
import RequestFunding from './RequestFunding'; 

const Invest = () => (
    <Fragment>
    <main className="my-5 py-5" style={{backgroundColor: '#F6F8FC'}} >
      <Container className="px-0 col-sm-12 col-md-6 offset-md-3"> 
        <Row noGutters className="pt-2 pt-md-5 w-100 px-4 px-xl-0">
            <Col>
              <RequestFunding /> 
            </Col>
        </Row>
      </Container>
    </main>
  </Fragment>
  );
  
  export default Invest;
  