import React from "react"
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component"
import { Container, Row, Col } from "reactstrap"
import "react-vertical-timeline-component/style.min.css"
import "./style.scss"

export default ({ timeline }) => {
  const Icon = ({ icon }) => <span className={`icon ${icon} icon-2x`}></span>
  return (
    <Container className="about-us-timeline" fluid="xl">
      <Row>
        <Col>
          <VerticalTimeline animate={true}>
            {timeline.map(({ date, icon, milestone }, index) => (
              <VerticalTimelineElement
                key={index}
                date={date}
                iconStyle={{ background: "#859e40", color: "#fff" }}
                icon={<Icon icon={icon} />}
              >
                <h2>{milestone}</h2>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </Col>
      </Row>
    </Container>
  )
}
