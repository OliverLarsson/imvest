import React, { Fragment } from 'react';
import { Container, Row, Col, Form, FormGroup, Label } from 'reactstrap';

import SideCard from './SideCard';
import FeatureCard from './FeatureCard';
import SideCard2 from './SideCard2';

const Main = () => (
    <Fragment >
      <header className="my-5 py-5" style={{backgroundImage: "url('https://mdbootstrap.com/img/Photos/Others/architecture.jpg')", "background-repeat": "no-repeat", "background-size": "cover", "background-position": "center"}}>
      <Container className="px-5" style={{height: '100vh'}}>
          <Row noGutters className="pt-2 pt-md-5 w-100 px-4 px-xl-0 position-relative" style={{width:"100vh"}}>
            <Col xs={{ order: 2 }} md={{ size: 4, order: 1 }} tag="mid" className="pb-5 mb-5 pb-md-0 mb-md-0 mx-auto mx-md-0">
              
            </Col>
            <Col xs={{ order: 1 }} md={{ size: 8, offset: 1 }} tag="aside" className="pb-5 mb-5 pb-md-0 mb-md-0 mx-auto mx-md-0">
              <SideCard />
            </Col>
          </Row>
        </Container>
      </header>
      <main className="my-5 py-5">
        <Container className="px-0" style={{height: '100vh'}}>
          <Row noGutters className="pt-2 pt-md-5 w-100 px-4 px-xl-0 position-relative">
          <Col xs={{ order: 2 }} md={{ size: 4, order: 1 }} tag="aside" className="pb-5 mb-5 pb-md-0 mb-md-0 mx-auto mx-md-0">
          <SideCard2 /> 
          </Col>
          
          <Col xs={{ order: 1 }} md={{ size: 7, offset: 1 }} tag="section" className="py-5 mb-5 py-md-0 mb-md-0">
            <Container>
            <FormGroup>
            <Label for="exampleEmail">Popular</Label>
              <Row form>
                <Col style={{padding:".1rem"}}>
                <FeatureCard />
                </Col>
                <Col style={{padding:".1rem"}}>
                <FeatureCard />
                </Col>
                <Col style={{padding:".1rem"}}>
                <FeatureCard />
                </Col>
              </Row>
              </FormGroup>
              <FormGroup>
              <Label for="exampleEmail">New</Label>
              <Row form>
                <Col style={{padding:".1rem"}}>
                <FeatureCard />
                </Col>
                <Col style={{padding:".1rem"}}>
                <FeatureCard />
                </Col>
                <Col style={{padding:".1rem"}}>
                <FeatureCard />
                </Col>
              </Row>
              </FormGroup>
        
            </Container>
          </Col>
          </Row>
        </Container>
        <Container className="px-0" style={{height: '100vh', backgroundColor: '#F6F8FC'}}>
          <Row noGutters className="pt-2 pt-md-5 w-100 px-4 px-xl-0 position-relative">
          
            <Col xs={{ order: 2 }} md={{ size: 8, order: 2 }} tag="aside" className="pb-5 mb-5 pb-md-0 mb-md-0 mx-auto mx-md-0">
              
            </Col>
            
          </Row>
        </Container>
        <Container className="px-0" style={{height: '100vh', backgroundColor: '#F6F8FC'}}>
          <Row noGutters className="pt-2 pt-md-5 w-100 px-4 px-xl-0 position-relative">
          
            <Col xs={{ order: 2 }} md={{ size: 8, order: 2 }} tag="aside" className="pb-5 mb-5 pb-md-0 mb-md-0 mx-auto mx-md-0">
              
            </Col>
            
          </Row>
        </Container>
        <Container className="px-0" style={{height: '100vh', backgroundColor: '#F6F8FC'}}>
          <Row noGutters className="pt-2 pt-md-5 w-100 px-4 px-xl-0 position-relative">
          
            <Col xs={{ order: 2 }} md={{ size: 8, order: 2 }} tag="aside" className="pb-5 mb-5 pb-md-0 mb-md-0 mx-auto mx-md-0">
              
            </Col>
            
          </Row>
        </Container>
        </main>
        <footer style={{height: '100vh', backgroundColor: '#343936'}}>
        </footer>
        
    </Fragment>
  );
  
  export default Main;
  