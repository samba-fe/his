import React from 'react';
import { Row, Col, Card, Dropdown, Accordion } from 'react-bootstrap'
import arrowRight from '../assets/images/arrow-right.png';
import { Link } from "react-router-dom";

export default class AccordianSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedSection: "A1",
      selectedKey: 0,
      accordians: [
        {
          id: "A1",
          title: "A1 Insurance Group",
          subtitle: "Episodic Payers",
          untitled_claims: "121",
          in_process: "22",
          rejected: "",
          paid_claims: "22",
          partially_paid: "",
          lupa: "02",
          case_mix: "04",
          denied: "24",
          write_offs: "",
          patient_responsibility: "",
          cards: [{
            code: "A1",
            title: "Medicare (Palmetto GBA)",
            revenue: "$23,565",
            claims: "27",
            type: "JM MAC SC/HHH-PA HCCLAIMPMT"
          }]
        },
        {
          id: "A2",
          title: "A2 Insurance Group",
          subtitle: "",
          untitled_claims: "221",
          rejected: "10",
          in_process: "44",
          paid_claims: "84",
          partially_paid: "35",
          lupa: "",
          case_mix: "",
          denied: "66",
          write_offs: "08",
          patient_responsibility: "",
          cards: [{
            code: "A2",
            title: "Superior Medicaid",
            revenue: "$45,525",
            claims: "31",
            type: "CENTENE CORP HCCLAIMPMT"
          },
          {
            code: "A2",
            title: "Molina Medicaid",
            revenue: "$15,525",
            claims: "02",
            type: "MOLINE HC OF TEX HCCLAIMPMT"
          }]
        },
        {
          id: "A3",
          title: "A3 Insurance Group",
          subtitle: "",
          untitled_claims: "121",
          rejected: "22",
          in_process: "22",
          paid_claims: "02",
          partially_paid: "04",
          lupa: "",
          case_mix: "",
          denied: "24",
          write_offs: "02",
          patient_responsibility: "20",
          cards: [{
            code: "A3",
            title: "AMBETTER FROM SUPERIOR HEALTH",
            revenue: "$10,775",
            claims: "32",
            type: "MARKET PLACE HCCLAIMPMT"
          },
          {
            code: "A3",
            title: "Superior Advantage",
            revenue: "$13,696",
            claims: "67",
            type: "CENTENE CORP HCCLAIMPMT"
          },
          {
            code: "A3",
            title: "OSCAR HEALTH",
            revenue: "$44,887",
            claims: "33",
            type: ""
          },
          {
            code: "A3",
            title: "UNITED HEALTHCARE Medicare HMO/PPO",
            revenue: "$7,225",
            claims: "03",
            type: "UNITEDHEALTHCARE HCCLAIMPMT"
          },
          {
            code: "A3",
            title: "UNITED HEALTHCARE",
            revenue: "$3,221",
            claims: "11",
            type: "UNITEDHEALTHCARE HCCLAIMPMT"
          },
          {
            code: "A3",
            title: "MOLINA HEALTHCARE OF TEXAS",
            revenue: "$7,652",
            claims: "18",
            type: "MOLINE OF TEX HCCLAIMPMT"
          },
          {
            code: "A3",
            title: "UMR",
            revenue: "$12,887",
            claims: "24",
            type: ""
          },
          {
            code: "A3",
            title: "Humana/Choice/Medicare/PFFS/ADVANTAGE",
            revenue: "$2,225",
            claims: "16",
            type: "JM MAC SC/HHH-PA HCCLAIMPMT"
          },
          {
            code: "A3",
            title: "AETNA",
            revenue: "$2,111",
            claims: "05",
            type: ""
          }]
        },
        {
          id: "A4",
          title: "A4 Insurance Group",
          subtitle: "Episodic Payers",
          untitled_claims: "243",
          in_process: "38",
          rejected: "",
          paid_claims: "31",
          partially_paid: "",
          lupa: "07",
          case_mix: "17",
          denied: "19",
          write_offs: "",
          patient_responsibility: "",
          cards: [{
            code: "A4",
            title: "Medicare (Palmetto GBA)",
            revenue: "$23,565",
            claims: "27",
            type: "JM MAC SC/HHH-PA HCCLAIMPMT"
          }]
        },
        {
          id: "A5",
          title: "A5 Insurance Group",
          subtitle: "",
          untitled_claims: "134",
          rejected: "21",
          in_process: "38",
          paid_claims: "43",
          partially_paid: "21",
          lupa: "",
          case_mix: "",
          denied: "34",
          write_offs: "11",
          patient_responsibility: "",
          cards: [{
            code: "A5",
            title: "Superior Medicaid",
            revenue: "$45,525",
            claims: "31",
            type: "CENTENE CORP HCCLAIMPMT"
          },
          {
            code: "A5",
            title: "Molina Medicaid",
            revenue: "$15,525",
            claims: "02",
            type: "MOLINE HC OF TEX HCCLAIMPMT"
          }]
        },
        {
          id: "A6",
          title: "A6 Insurance Group",
          subtitle: "",
          untitled_claims: "121",
          rejected: "22",
          in_process: "22",
          paid_claims: "02",
          partially_paid: "04",
          lupa: "",
          case_mix: "",
          denied: "24",
          write_offs: "02",
          patient_responsibility: "20",
          cards: [{
            code: "A6",
            title: "AMBETTER FROM SUPERIOR HEALTH",
            revenue: "$10,775",
            claims: "32",
            type: "MARKET PLACE HCCLAIMPMT"
          },
          {
            code: "A6",
            title: "Superior Advantage",
            revenue: "$13,696",
            claims: "67",
            type: "CENTENE CORP HCCLAIMPMT"
          },
          {
            code: "A6",
            title: "OSCAR HEALTH",
            revenue: "$44,887",
            claims: "33",
            type: ""
          },
          {
            code: "A6",
            title: "UNITED HEALTHCARE Medicare HMO/PPO",
            revenue: "$7,225",
            claims: "03",
            type: "UNITEDHEALTHCARE HCCLAIMPMT"
          },
          {
            code: "A6",
            title: "UNITED HEALTHCARE",
            revenue: "$3,221",
            claims: "11",
            type: "UNITEDHEALTHCARE HCCLAIMPMT"
          }]
        }
      ]
    }
    this.accordianSelect = this.handleAccordianSelect.bind(this)
  }

  handleAccordianSelect(e) {
    switch(e) {
      default:
      case "A1":
        this.setState({ selectedKey: 0 })
        break;
      case "A2":
        this.setState({ selectedKey: 1 })
        break;
      case "A3":
        this.setState({ selectedKey: 2 })
        break;
      case "A4":
        this.setState({ selectedKey: 3 })
        break;
      case "A5":
        this.setState({ selectedKey: 4 })
        break;
      case "A6":
        this.setState({ selectedKey: 5 })
        break;
    }
    let parent = document.getElementById(e);
    parent.querySelector('button').click()
    this.setState({ selectedSection: e })
  }

  render() {
    return (
      <div className="accordian-section">
        <div className="accordian-jump">
          <Row>
            <Col md="10">
              <div className="jump-text">Insurance wise Claims Overview</div>
            </Col>
            <Col md="2">
              <div className="jump-dropdown-section">
                <div className='jump-dropdown-text'>Jump to: </div>
                <div className="jump-dropdown">
                  <Dropdown onSelect={this.accordianSelect}>
                    <Dropdown.Toggle size="sm" variant="secondary" id="dropdown-accordian-section">
                      {this.state.selectedSection}
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item eventKey="A1" href="#A1">A1</Dropdown.Item>
                      <Dropdown.Item eventKey="A2" href="#A2">A2</Dropdown.Item>
                      <Dropdown.Item eventKey="A3" href="#A3">A3</Dropdown.Item>
                      <Dropdown.Item eventKey="A4" href="#A4">A4</Dropdown.Item>
                      <Dropdown.Item eventKey="A5" href="#A5">A5</Dropdown.Item>
                      <Dropdown.Item eventKey="A6" href="#A6">A6</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
              </div>
            </Col>
          </Row>
        </div>
        <Accordion defaultActiveKey={this.state.selectedKey}>
          {this.state.accordians.map((item, index) => (
            <Accordion.Item eventKey={index} key={index} id={item.id}>
              <Accordion.Header>
                <div className='acc-title-section'>
                  <div className='acc-title'>{item.title}</div>
                  <div className='acc-sub-title'>{item.subtitle}</div>
                </div>
                <div className='acc-stats-section'>
                  <div className='acc-stat'>
                    <div className='acc-stat-title'>Unbilled Claims</div>
                    <div className='acc-stat-count'>{item.untitled_claims}</div>
                  </div>
                  {item.rejected && (
                  <div className='acc-stat'>
                    <div className='acc-stat-title'>Rejected</div>
                    <div className='acc-stat-count'>{item.rejected}</div>
                  </div>
                  )}
                  {item.in_process && (
                  <div className='acc-stat'>
                    <div className='acc-stat-title'>In Process</div>
                    <div className='acc-stat-count'>{item.in_process}</div>
                  </div>
                  )}
                  {item.paid_claims && (
                  <div className='acc-stat'>
                    <div className='acc-stat-title'>Paid</div>
                    <div className='acc-stat-count'>{item.paid_claims}</div>
                  </div>
                  )}
                  {item.partially_paid && (
                  <div className='acc-stat'>
                    <div className='acc-stat-title'>Partially Paid</div>
                    <div className='acc-stat-count'>{item.partially_paid}</div>
                  </div>
                  )}
                  {item.lupa && (
                  <div className='acc-stat'>
                    <div className='acc-stat-title'>LUPA</div>
                    <div className='acc-stat-count'>{item.lupa}</div>
                  </div>
                  )}
                  {item.case_mix && (
                  <div className='acc-stat'>
                    <div className='acc-stat-title'>Case-mix</div>
                    <div className='acc-stat-count'>{item.case_mix}</div>
                  </div>
                  )}
                  {item.denied && (
                  <div className='acc-stat'>
                    <div className='acc-stat-title'>Denied</div>
                    <div className='acc-stat-count'>{item.denied}</div>
                  </div>
                  )}
                  {item.write_offs && (
                  <div className='acc-stat'>
                    <div className='acc-stat-title'>Write Offs</div>
                    <div className='acc-stat-count'>{item.write_offs}</div>
                  </div>
                  )}
                  {item.patient_responsibility && (
                  <div className='acc-stat'>
                    <div className='acc-stat-title'>Patient Responsibility</div>
                    <div className='acc-stat-count'>{item.patient_responsibility}</div>
                  </div>
                  )}
                </div>
              </Accordion.Header>
              <Accordion.Body>
                <Row>
                  {item.cards.map((card, cIndex) => (
                    <Col md="3" key={cIndex}>
                      <Card>
                        <Card.Body>
                          <Row>
                            <Col md="10"><div className="card-head">Insurance Code: {card.code}</div></Col>
                            <Col md="2">
                              <div className="card-arrow">
                                <Link to="/Details"><img src={arrowRight} alt="Right Arrow" /></Link>
                              </div>
                            </Col>
                          </Row>
                          <Row>
                            <Col md="12"><div className="card-title">{card.title}</div></Col>
                          </Row>
                          <Row>
                            <Col md="12"><div className="card-type">{card.type}</div></Col>
                          </Row>
                          <Row>
                            <Col md="6">
                              <div>
                                <div className='card-text'>Revenue Awaiting</div>
                                <div className='card-revenue'>{card.revenue}</div>
                              </div>
                            </Col>
                            <Col md="6">
                              <div>
                                <div className='card-text'>Actionable Claims</div>
                                <div className='card-count'>{card.claims}</div>
                              </div>
                            </Col>
                          </Row>
                        </Card.Body>
                      </Card>
                    </Col>
                  ))}
                </Row>
              </Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
      </div>
    )
  }
}