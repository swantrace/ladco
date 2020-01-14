import React from "react"
import { Container, Row, Col } from "reactstrap"
import "./style.scss"

export default ({ content, target_link }) => (
  <Container fluid={true}>
    <Row>
      <Col>
        <div
          className="animated-block call-to-action-2  group1 transparent-animation fadeIn animated"
          data-animation="fadeIn"
          style={{ animationDelay: "0s" }}
        >
          <Container fluid="xl">
            <div className="sc-highlight">
              <div className="punch_text">
                <b>{content}</b>{" "}
                <a
                  href="#temp"
                  target="_self"
                  className="mappopup"
                  data-content={target_link}
                >
                  View now!
                </a>
              </div>
              <div className="clearfix"></div>
            </div>
          </Container>
        </div>
      </Col>
    </Row>
  </Container>
)
