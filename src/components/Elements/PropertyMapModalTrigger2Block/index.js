import React from "react"
import { Container, Row, Col } from "reactstrap"
import "./style.scss"

export default ({ title, content, target_link }) => (
  <Container className="mt-5 property-map-modal-trigger-2" fluid={true}>
    <Row>
      <Col>
        <div
          className="punch_text03 alternative_punch animated-block  group2 transparent-animation fadeIn animated"
          data-animation="fadeIn"
          style={{ animationDelay: "0s" }}
        >
          <Container fluid="xl">
            <Row>
              <Col className="left" md="9">
                <h1>
                  {title}
                  <em>{content}</em>
                </h1>
              </Col>
              <Col className="right" md="3">
                <a
                  href={target_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ fontWeight: "bolder", fontFamily: "Open Sans" }}
                >
                  <i
                    className="icon icon-leaf2"
                    style={{
                      position: "relative",
                      top: "13px",
                      fontWeight: "bolder",
                      fontSize: "1.5em",
                    }}
                  ></i>
                  &nbsp; View Now
                </a>
              </Col>
            </Row>
          </Container>
        </div>
      </Col>
    </Row>
  </Container>
)
