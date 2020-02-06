import React from "react"
import { Container, Row, Col } from "reactstrap"
import "./style.scss"

export default ({ title, intro, content }) => (
  <Container fluid="xl" className="project-header mt-4">
    <Row>
      <Col>
        <div
          className="text-center"
          dangerouslySetInnerHTML={{ __html: title }}
        ></div>
        <div
          className="text-center"
          dangerouslySetInnerHTML={{ __html: intro }}
        ></div>
        <div
          className="text-left"
          dangerouslySetInnerHTML={{ __html: content }}
        ></div>
      </Col>
    </Row>
  </Container>
)
