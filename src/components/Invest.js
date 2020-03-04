import React, { Fragment } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Filter from './Filter'; 
import Results from './Results'; 

const Invest = () => (
    <Fragment>
      <main className="my-5 py-5" style={{backgroundColor: '#F6F8FC'}} >
        <Container className="px-0" style={{display: "flex"}}>
          <Row noGutters className="pt-2 pt-md-5 w-100 px-4 px-xl-0">
              <Col>
                <Filter /> 
              </Col>
          </Row>
        </Container>
        <Container>
          <Row noGutters className="pt-2 pt-md-5 w-100 px-4 px-xl-0">
              <Col>
                <Results />  
              </Col>
          </Row>
        </Container>
      </main>
    </Fragment>
  );
  
  export default Invest;
  