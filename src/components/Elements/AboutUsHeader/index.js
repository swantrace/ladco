import React, { Fragment } from "react"
import "./style.scss"

export default ({ title }) => (
  <Fragment>
    <span
      dangerouslySetInnerHTML={{ __html: title }}
      className="text-center"
    ></span>
  </Fragment>
)
