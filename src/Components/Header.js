import React from 'react';
import logo from '../assets/images/logo.png';
import arrowDown from '../assets/images/arrow-down.png';
import healthCare from '../assets/images/healthcare.png';
import notifications from '../assets/images/notification.png';
import avatar from '../assets/images/avatar.png';
import HeaderDropDowns from './HeaderDropDowns';
import { Row, Col, Breadcrumb } from 'react-bootstrap'
import moment from 'moment';

const currentDate = moment()
const syncDate = "Today, " + currentDate.format('Do MMM') + " @ " + currentDate.format('HH:mm');

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <div>
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
            <Col md="9">
              <div className='breadcrumb'>
                <Breadcrumb>
                <Breadcrumb.Item href="/">Admin</Breadcrumb.Item>
                  <Breadcrumb.Item active>Billings</Breadcrumb.Item>
                </Breadcrumb>
              </div>
            </Col>
            <Col md="3">
              <div className="right-sync">
                <div>
                  <span className="text">Last Sync at: </span>
                  <span className="date">{syncDate}</span>
                </div>
                <div>
                  <span className="text">Last Sync from: </span>
                  <span className="date">Some data source</span>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    )
  }
}