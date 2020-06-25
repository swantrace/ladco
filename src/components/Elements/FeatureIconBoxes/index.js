import React from "react"
import { Container, Row, Col } from "reactstrap"
import "./style.scss"

export default ({ feature_icon_box }) => (
  <Container className="mt-4 mb-5 feature-icon-boxes" fluid="xl">
    <Row>
      <Col>
        <ul className="fullimage_box2 " data-animation="">
          <li>
            <i className={`icon ${feature_icon_box[0].icon} icon-3x`}></i>
          </li>
          <li>
            <h3>{feature_icon_box[0].title}</h3>
          </li>
          <li>
            <p></p>
          </li>
        </ul>
        <div className="clearfix" style={{ height: "30px" }}></div>

        <ul className="fullimage_box2 " data-animation="">
          <li>
            <i className={`icon ${feature_icon_box[1].icon} icon-3x`}></i>
          </li>
          <li>
            <h3>{feature_icon_box[1].title}</h3>
          </li>
          <li>
            <p></p>
          </li>
        </ul>
      </Col>
      <Col>
        <div className="clearfix" style={{ height: "70px" }}></div>
        <img
          src={"https://ladco.mb.ca/backend/wp-content/uploads/2020/01/newlogo.png"}
          className="wp-post-image aligncenter dont_scale"
          alt=""
          title="Founded 1919"
        />
        <h2
          className="aligncenter animated-block group4 transparent-animation fadeIn animated"
          data-animation="fadeIn"
          style={{ animationDelay: "0s" }}
        >
          Founded 1919
        </h2>
        <div className="clearfix" style={{ height: "60px" }}></div>
        <ul className="fullimage_box2 " data-animation="">
          <li>
            <i className={`icon ${feature_icon_box[2].icon} icon-3x`}></i>
          </li>
          <li>
            <h3>{feature_icon_box[2].title}</h3>
          </li>
          <li>
            <p></p>
          </li>
        </ul>
        <div className="clearfix" style={{ height: "30px" }}></div>
      </Col>
      <Col>
        <ul className="fullimage_box2 " data-animation="">
          <li>
            <i className={`icon ${feature_icon_box[3].icon} icon-3x`}></i>
          </li>
          <li>
            <h3>{feature_icon_box[3].title}</h3>
          </li>
          <li>
            <p></p>
          </li>
        </ul>
        <div className="clearfix" style={{ height: "30px" }}></div>
        <ul className="fullimage_box2 " data-animation="">
          <li>
            <i className={`icon ${feature_icon_box[4].icon} icon-3x`}></i>
          </li>
          <li>
            <h3>{feature_icon_box[4].title}</h3>
          </li>
          <li>
            <p></p>
          </li>
        </ul>
      </Col>
    </Row>
  </Container>
)
