import React, { Fragment } from 'react';
import { Container, Row, Col } from 'reactstrap';

import Post from './Post';
import SideCard from './SideCard';

const Main = () => (
    <Fragment >
      
      <main className="my-5 py-5" style={{backgroundColor: '#F6F8FC'}}>
        <Container className="px-0">
          <Row noGutters className="pt-2 pt-md-5 w-100 px-4 px-xl-0 position-relative">
          
            <Col xs={{ order: 2 }} md={{ size: 8, order: 2 }} tag="aside" className="pb-5 mb-5 pb-md-0 mb-md-0 mx-auto mx-md-0">
              <SideCard />
            </Col>
            
          </Row>
        </Container>
      </main>
      
    </Fragment>
  );
  
  export default Main;
  