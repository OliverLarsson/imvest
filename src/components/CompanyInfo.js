import React, { Fragment } from 'react';
import { Container, Row, Col } from 'reactstrap';

// Will probably need to be a function or class to adjust/load results 
const CompanyInfo = () => (
    <Fragment>
      <main className="my-5 py-5">
        <Container className="px-0">
          <Row noGutters className="pt-2 pt-md-5 w-100 px-4 px-xl-0 position-relative">
            <h1> Company Info </h1>
          </Row>
        </Container>
      </main>
    </Fragment>
  );
  
  export default CompanyInfo;