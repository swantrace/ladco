import React, { Fragment } from "react"
import "./style.scss"

export default ({ timeline }) => (
  <Fragment>
    {timeline.map(({ date, icon, milestone }) => (
      <div>
        <p>{date}</p>
        <p>{icon}</p>
        <p>{milestone}</p>
      </div>
    ))}
  </Fragment>
)
