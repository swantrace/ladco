import React from "react"
import { Container, Row, Col } from "reactstrap"
import "./style.scss"

export default ({ content }) => (
  <Container fluid="xl" className="about-us-introduction my-5">
    <Row>
      <Col className="text-center justify-content-center d-flex">
        <div
          dangerouslySetInnerHTML={{ __html: content }}
          style={{ maxWidth: "900px" }}
        ></div>
      </Col>
    </Row>
  </Container>
)
