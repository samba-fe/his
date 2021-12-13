import React from 'react';
import logo from '../../assets/images/logo.png';
import arrowDown from '../../assets/images/arrow-down.png';
import healthCare from '../../assets/images/healthcare.png';
import notifications from '../../assets/images/notification.png';
import avatar from '../../assets/images/avatar.png';
import HeaderDropDowns from '../../Components/HeaderDropDowns';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Breadcrumb } from 'react-bootstrap'
import './details.css';

function Details (){
  return (
    <Container fluid>
      <div className='header-section'>
        <div className='header'>
          <Row>
            <Col md="6">
              <div>
                <Row>
                  <Col md="3">
                    <img src={logo} className="logo" alt="logo" />
                  </Col>
                  <Col md="9">
                    <HeaderDropDowns />
                  </Col>
                </Row>
              </div>
            </Col>
            <Col md="6">
              <div className="header-right">
                <div className="healthcare-logo">
                  <img src={healthCare} className="logo" alt="Healthcare" />
                </div>
                <div className="notifications-logo">
                  <img src={notifications} className="notifications" alt="Notifications" />
                </div>
                <div className="avatar-logo">
                  <img src={avatar} className="avatar" alt="Avatar" />
                </div>
                <div className="arrow-down-logo">
                  <img src={arrowDown} className="arrow-down" alt="Options" />
                </div>
              </div>
            </Col>
          </Row>
        </div>

        <div className="top-header">
          <Row>
            <Col md="12">
              <div className='breadcrumb'>
                <Breadcrumb>
                  <Breadcrumb.Item href="/">Admin</Breadcrumb.Item>
                  <Breadcrumb.Item href="/Dashboard">Billings</Breadcrumb.Item>
                  <Breadcrumb.Item active>Details</Breadcrumb.Item>
                </Breadcrumb>
              </div>
            </Col>
          </Row>
        </div>
      </div>

      <div className='content'></div>
    </Container>
  )
}

export default Details;
