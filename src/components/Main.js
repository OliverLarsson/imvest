import React, { Fragment } from 'react';
import { Container, Row, Col, Form, FormGroup, Label, Media } from 'reactstrap';
import { Link } from 'react-router-dom';

import SideCard from './SideCard';
import FeatureCard from './FeatureCard';
import SideCard2 from './SideCard2';
import SideCard3 from './SideCard3';
import FooterCard from './FooterCard';
import FundInfo from './FundInfo';
import ReviewCard from './ReviewCard';
import Review from './Review';

const Main = () => (
    <Fragment >
      <header className="my-5 py-5" style={{backgroundImage: "url('https://mdbootstrap.com/img/Photos/Others/architecture.jpg')", "background-repeat": "no-repeat", "background-size": "cover", "background-position": "center"}}>
      <Container className="px-5" style={{height: '100vh'}}>
          <Row noGutters className="pt-md-5 w-100 px-4 px-xl-0 position-relative" style={{width:"100vh"}}>
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
            <Label for="popular">Popular</Label>
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
              <Label for="new">New</Label>
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
        <div style={{height: '100vh', backgroundColor: '#E6E6EE', paddingTop: '3rem'}}>
        <Container className="px-0" style={{height: '100vh'}}>
          <Row noGutters className="pt-2 pt-md-5 w-100 px-4 px-xl-0 position-relative">
          
            <Col xs={{ order: 2 }} md={{ size: 8, order: 1 }} tag="aside" className="pb-5 mb-5 pb-md-0 mb-md-0 mx-auto mx-md-0" style={{marginTop: '3rem'}}>
            <img src="https://cdn.pixabay.com/photo/2013/07/12/12/54/world-map-146505_960_720.png" alt="new" width="90%"/>
            </Col>
            <Col xs={{ order: 1 }} md={{ size: 4, order: 1 }} tag="aside" className="pb-5 mb-5 pb-md-0 mb-md-0 mx-auto mx-md-0" style={{marginTop: '1rem'}}>
              <SideCard3 /> 
            </Col>
            
          </Row>
        </Container>
        </div>
        <Container className="px-0" style={{height: '100vh', backgroundColor: '#F6F8FC', marginTop: '5rem'}}>
          <Row noGutters className="pt-2 pt-md-5 w-100 px-4 px-xl-0 position-relative" >
          
            <Col xs={{ order: 1 }} md={{ size: 5, offset: 1 }} tag="aside" className="pb-5 mb-5 pb-md-0 mb-md-0 mx-auto mx-md-0">
              <FundInfo />
            </Col>
        
            <Col xs={{ order: 2 }} md={{ size: 7, order:2 }} tag="aside" className="pb-5 mb-5 pb-md-0 mb-md-0 mx-auto mx-md-0" style={{paddingLeft:'1.5rem'}}>
            <div md-2/> 
            <img src="https://p0.piqsels.com/preview/507/805/98/people-sitting-in-front-of-computer-monitors.jpg" alt="new" width="100%"/>
            </Col>
            
          </Row>
        </Container>
        <div style={{height: '100vh', backgroundColor: '#E6E6EE'}}>
        <h1 style={{color: '#E6E6EE'}}> w</h1>
        <Review/>
          <Container className="justify-content-center text-center" >
            
          <Row style={{paddingTop:'3rem'}}>
          <Col xs={{ order: 2 }} md={{ size: 1, order: 1 }} tag="aside" className="pb-5 mb-5 pb-md-0 mb-md-0 mx-auto mx-md-0">
            
          </Col>
          <Col xs={{ order: 1 }} md={{ size: 10, offset: 0 }} tag="section" className="py-5 mb-5 py-md-0 mb-md-0">
            <Container>
              <Row form>
                <Col style={{padding:"1rem"}}>
                <ReviewCard />
                </Col>
                <Col style={{padding:"1rem"}}>
                <ReviewCard />
                </Col>
                <Col style={{padding:"1rem"}}>
                <ReviewCard />
                </Col>
                <Col style={{padding:"1rem"}}>
                <ReviewCard />
                </Col>
              </Row>
            </Container>
          </Col>

          <Col xs={{ order: 2 }} md={{ size: 1, order: 1 }} tag="aside" className="pb-5 mb-5 pb-md-0 mb-md-0 mx-auto mx-md-0">
              
          </Col>
            
          </Row>
        </Container>
        </div>
        <div style={{height: '100vh', backgroundColor: '#343936'}}>
        <Container className="px-0" style={{height: '100vh'}}>
          <Row noGutters className="pt-2 pt-md-5 w-100 px-4 px-xl-0 position-relative">
          
          <Col xs={{ order: 1 }} md={{ size: 6, offset: 1 }} tag="section" className="py-5 mb-5 py-md-0 mb-md-0">
            <Container style={{fontSize: '1rem'}}>

              <Row form>
                <Col style={{padding:"1rem"}}>
                <Link to='/' className="font-weight-bold text-light">Invest</Link>
                </Col>
                <Col style={{padding:"1rem"}}>
                <Link to='/' className="font-weight-bold text-light">About</Link>
                </Col>
              </Row>
              <Row form>
                <Col style={{padding:"1rem"}}>
                <Link to='/' className="font-weight-bold text-light">Impact</Link>
                </Col>
                <Col style={{padding:"1rem"}}>
                <Link to='/' className="font-weight-bold text-light">Careers</Link>
                </Col>
              </Row>
              <Row form>
                <Col style={{padding:"1rem"}}>
                <Link to='/' className="font-weight-bold text-light">Funding</Link>
                </Col>
                <Col style={{padding:"1rem"}}>
                <Link to='/' className="font-weight-bold text-light">Press</Link>
                </Col>
              </Row>
              <Row form>
                <Col style={{padding:"1rem"}}>
                <Link to='/' className="font-weight-bold text-light">Resources</Link>
                </Col>
                <Col style={{padding:"1rem"}}>
                <Link to='/' className="font-weight-bold text-light">Investing Basics</Link>
                </Col>
              </Row>
              <Row form>
                <Col style={{padding:"1rem"}}>
                <Link to='/' className="font-weight-bold text-light">Privacy Policy</Link>
                </Col>
                <Col style={{padding:"1rem"}}>
                <Link to='/' className="font-weight-bold text-light">Legal</Link>
                </Col>
              </Row>
            </Container>
          </Col>
          <Col xs={{ order: 2 }} md={{ size: 4, order: 1 }} tag="aside" className="pb-5 mb-5 pb-md-0 mb-md-0 mx-auto mx-md-0 text-center">
          <FooterCard />  
          </Col>
          </Row>
        </Container>
        </div>
        </main>
    </Fragment>
  );
  
  export default Main;
  