import React, { Fragment } from "react"
import { Container } from "reactstrap"
import "./style.scss"

const Home = props => {
  const settings = {
    dots: true,
  }
  return <Fragment>{props.children}</Fragment>
}

export default Home
