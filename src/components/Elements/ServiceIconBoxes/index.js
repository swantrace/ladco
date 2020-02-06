import React from "react"
import { Container, Row, Col } from "reactstrap"
import "./style.scss"
import { Link } from "gatsby"

export default ({ service_icon_box }) => {
  return (
    <Container className="service-icon-boxes my-4" fluid="xl">
      <Row>
        {service_icon_box.map(
          ({ icon, title, content, link_target, link_text }) => (
            <Col className="service-icon-box col-lg-5th-1" key={title}>
              <div
                className="icon-box  animated-block group1 transparent-animation fadeIn animated"
                data-animation="fadeIn"
                style={{ animationDelay: "0s" }}
              >
                <span className={`icon ${icon} icon-4x`}></span>
                <div className="clearfix"></div>
                <h2>{title}</h2>
                <p>{content}</p>
                <Link
                  to={link_target.split("?")[0]}
                  state={{ tab: link_target.split("?")[1] }}
                >
                  {link_text}
                  <i className="icon icon-point-right"></i>
                </Link>
              </div>
            </Col>
          )
        )}
      </Row>
    </Container>
  )
}
