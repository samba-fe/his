import React from 'react';
import graph from '../assets/images/graph.png';
import arrowRight from '../assets/images/arrow-right.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Card } from 'react-bootstrap'
import CalendarPicker from '../Components/CalendarPicker';
import Header from '../Components/Header';
import AccordianSection from '../Components/AccordianSection';
import './dashboard.css';
import { Link } from "react-router-dom";

const cardSections = [
  { title: "Revenue Expected", revenue: "$11,095,913" },
  { title: "Revenue Generated", revenue: "$9,050,511" },
  { title: "Revenue Awaiting", revenue: "$343,499" }
]

const cards = [
  { title: "Unbilled Claims", count: 396, revenue: "$35,212" },
  { title: "Rejected Claims", count: 106, revenue: "$2,125" },
  { title: "In Process Claims", count: 255, revenue: "$3,335" },
  { title: "Paid Claims", count: 114, revenue: "$41,225" },
  { title: "Partially Paid Claims", count: 96, revenue: "$22,245" },
  { title: "Denied Claims", count: 22, revenue: "$19,112" },
  { title: "Write Offs", count: 85, revenue: "$46,447" },
  { title: "Patient Responsibility", count: 44, revenue: "$32,778" }
]

function Dashboard (){
  return (
    <Container fluid>
      <div className='header-section'>
        <Header />

        <div className='page-header'>Billings Dashboard</div>
      </div>

      <div className='content'>
        <div className='sections'>
          <Row>
            <Col md="6">
              <CalendarPicker />

              <div className='plain-sections'>
                  {cardSections.map((item, index) => (
                    <div className='card-section' key={index}>
                      <div className='text'>{item.title}</div>
                      <div className='amount'>{item.revenue}</div>
                    </div>
                  ))}
              </div>

              <div className='cards'>
                <Row>
                  {cards.map((item, index) => (
                    <Col md="4" key={index}>
                      <Card>
                        <Card.Body>
                          <Row>
                            <Col md="9"><div className="card-title">{item.title}</div></Col>
                            <Col md="3">
                              <div className="card-arrow">
                                <Link to="/Details"><img src={arrowRight} alt="Right Arrow" /></Link>
                              </div>
                            </Col>
                          </Row>
                          <Row>
                            <Col md="6"><div className='card-count'>{item.count}</div></Col>
                            <Col md="6"><div className='card-revenue'>{item.revenue}</div></Col>
                          </Row>
                        </Card.Body>
                      </Card>
                    </Col>
                  ))}
                </Row>
              </div>
            </Col>
            <Col md="6">
              <div className='right-section'>
                <img src={graph} className="graph" alt="Graph" />
              </div>
            </Col>
          </Row>
        </div>
      </div>
      <AccordianSection />
    </Container>
  )
}

export default Dashboard;
