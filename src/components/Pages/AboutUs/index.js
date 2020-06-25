import React, { Fragment } from "react"
import { Helmet } from 'react-helmet'
import "./style.scss"

const TITLE = 'Ladco Company Limited | About Us'
const AboutUs = props => {
  return (
    <Fragment>
      <Helmet>
        <title>{ TITLE }</title>
      </Helmet>
      {props.children}
    </Fragment>
  )
}

export default AboutUs
