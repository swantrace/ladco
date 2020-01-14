import React from "react"
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component"
import "react-vertical-timeline-component/style.min.css"
import "./style.scss"

export default ({ timeline }) => (
  <VerticalTimeline animate={true}>
    {timeline.map(({ date, icon, milestone }) => (
      <VerticalTimelineElement
        date={date}
        iconStyle={{ background: "#859e40", color: "#fff" }}
        icon={() => `<span className="icon ${icon}"></span>`}
      >
        <h2>{milestone}</h2>
      </VerticalTimelineElement>
    ))}
  </VerticalTimeline>
)
