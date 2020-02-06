import React from "react"
import { Container, Row, Col } from "reactstrap"
import "./style.scss"

export default ({ title }) => (
  <Container fluid="xl" className="about-us-header">
    <Row>
      <Col className="text-center justify-content-center d-flex">
        <div
          dangerouslySetInnerHTML={{ __html: title }}
          style={{ maxWidth: "900px" }}
        ></div>
      </Col>
    </Row>
  </Container>
)
