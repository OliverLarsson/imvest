import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Container, Row, Col, Form, FormGroup, Label, Input } from 'reactstrap';
import { Link } from 'react-router-dom';

const ModalView = () => {

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button outline color="success" onClick={toggle}>Sign In</Button>
      <Modal isOpen={modal} toggle={toggle}>
      <ModalHeader toggle={toggle}>Sign in to continue</ModalHeader>
        <ModalBody>
        <Form>
        <Row form>
          <Col lg={12}>
        <FormGroup>
            <Label for="email">Email </Label>
            <Input type="email" name="email" id="email" placeholder="Email"/>
        </FormGroup>
        </Col>
        </Row>
        <Row form>
          <Col lg={12}>
            <FormGroup>
              <Label for="password1">Password </Label>
              <Input type="password" name="password1" id="password1" placeholder="password"/>
            </FormGroup>
          </Col>
        </Row>
        <Row form style={{paddingTop:"2rem"}}>
          <Col md={6}>
            <FormGroup>
            <Link to="/signup"><Button outline color="success" onClick={toggle} style={{"width":"100%"}}>Sign Up</Button></Link>
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
            <Link to="/invest"><Button color="success" onClick={toggle} style={{"width":"100%"}}>Sign In</Button></Link>
            </FormGroup>
          </Col>
        </Row>
        </Form>
        </ModalBody>
        <ModalFooter>
          <Link color="secondary">Forgot Password?</Link>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ModalView;