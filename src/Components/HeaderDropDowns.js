import React from 'react';
import { Row, Col, Dropdown } from 'react-bootstrap'

export default class HeaderDropDowns extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clinicalTitle: "Clinical",
      businessDevelopementTitle: "Business Development",
      adminTitle: "Admin",
    }
    this.clinicalSelect = this.handleClinicalSelect.bind(this)
    this.businessDevelopementSelect = this.handlebusinessDevelopementSelect.bind(this)
    this.adminSelect = this.handleAdminSelect.bind(this)
  }

  handleClinicalSelect(e) {
    this.setState({ clinicalTitle: e })
  }

  handlebusinessDevelopementSelect(e) {
    this.setState({ businessDevelopementTitle: e })
  }

  handleAdminSelect(e) {
    this.setState({ adminTitle: e })
  }

  render() {
    return (
      <Row>
        <Col md="4">
          <div className="clinical">
            <Dropdown onSelect={this.clinicalSelect}>
              <Dropdown.Toggle size="sm" variant="secondary" id="dropdown-clinical">
                {this.state.clinicalTitle}
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item eventKey="Productivity">Productivity</Dropdown.Item>
                <Dropdown.Item eventKey="Census">Census</Dropdown.Item>
                <Dropdown.Item eventKey="PCC Census">PCC Census</Dropdown.Item>
                <Dropdown.Item eventKey="Pending Tasks">Pending Tasks</Dropdown.Item>
                <Dropdown.Item eventKey="Visit Planning">Visit Planning</Dropdown.Item>
                <Dropdown.Item eventKey="QA">QA</Dropdown.Item>
                <Dropdown.Item eventKey="Schedule deviation">Schedule deviation</Dropdown.Item>
                <Dropdown.Item eventKey="Incorrect MRNs">Incorrect MRNs</Dropdown.Item>
                <Dropdown.Item eventKey="Discharge Planning">Discharge Planning</Dropdown.Item>
                <Dropdown.Item eventKey="LUPA Risk">LUPA Risk</Dropdown.Item>
                <Dropdown.Item eventKey="Blank HIPPS">Blank HIPPS</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </Col>
        <Col md="4">
          <div className="business-developement">
            <Dropdown onSelect={this.businessDevelopementSelect}>
              <Dropdown.Toggle size="sm" variant="secondary" id="dropdown-business-developement">
                {this.state.businessDevelopementTitle}
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item eventKey="Intake">Intake</Dropdown.Item>
                <Dropdown.Item eventKey="Referrals">Referrals</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </Col>
        <Col md="4">
          <div className="admin">
            <Dropdown onSelect={this.adminSelect}>
              <Dropdown.Toggle size="sm" variant="secondary" id="dropdown-admin">
                {this.state.adminTitle}
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item eventKey="Billing">Billing</Dropdown.Item>
                <Dropdown.Item eventKey="Authorization">Authorization</Dropdown.Item>
                <Dropdown.Item eventKey="Orders">Orders</Dropdown.Item>
                <Dropdown.Item eventKey="RCD">RCD</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </Col>
      </Row>
    )
  }
}