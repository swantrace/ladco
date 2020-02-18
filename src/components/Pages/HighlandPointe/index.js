// import React from "react"
//import ComingSoon from "react-coming-soon"
import React, { Fragment } from "react"
import logo from "../../../assets/images/hp-logo.png"
import background from "../../../assets/images/map-of-winnipeg.jpg"
import "./style.scss"

const HighlandPointe = props => {
  // return (
  //   <ComingSoon
  //     bgColor="#fff"
  //     textColor="#000"
  //     illustration="development"
  //   />
  // )
  const settings = {
    bgColor: "#fff",
    textColor: "#000",
    height: "100%",
    width: "100%",
  }
  return (
    <Fragment>
      <div className="highland-pointe-comingSoon-wrapper">
        <img className="highland-logo" src={logo} alt="" />
        {props.children}
      </div>
    </Fragment>
  )
}

export default HighlandPointe
