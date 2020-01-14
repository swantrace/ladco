import React from "react"
import { Container, Row, Col } from "reactstrap"
import "./style.scss"

export default ({ service_icon_box }) => {
  return (
    <Container className="my-4" fluid="xl">
      <Row>
        {service_icon_box.map(
          ({ icon, title, content, link_target, link_text }) => (
            <Col className="my-1" key={title}>
              <div
                className="icon-box  animated-block group1 transparent-animation fadeIn animated"
                data-animation="fadeIn"
                style={{ animationDelay: "0s" }}
              >
                <span className={`icon ${icon} icon-4x`}></span>
                <div className="clearfix"></div>
                <h2>{title}</h2>
                <p>{content}</p>
                <a href={link_target} target="_self">
                  {link_text}
                  <i className="icon icon-point-right"></i>
                </a>
              </div>
            </Col>
          )
        )}
      </Row>
    </Container>
  )
}
