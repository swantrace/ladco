import React from "react"
import { Container, Row, Col } from "reactstrap"
import "./style.scss"

export default ({ title, builders }) => (
  <Container className="builder-logo-listings" fluid="xl">
    <Row>
      <Col>
        <span
          className="text-center"
          dangerouslySetInnerHTML={{ __html: title }}
        ></span>
      </Col>
    </Row>
    <Row className="py-3" style={{ backgroundColor: "#eee" }}>
      {builders.map(builder => (
        <Col
          md="2"
          key={builder.slug}
          className="my-2 d-flex align-items-center justify-content-center"
        >
          <a href={`/suppliers/${builder.slug}`} style={{ maxHeight: "60px" }}>
            <img
              src={builder.logo}
              alt={builder.slug}
              style={{
                maxHeight: "60px",
                maxWidth: "100%",
                width: "auto",
              }}
            />
          </a>
        </Col>
      ))}
    </Row>
  </Container>
)
