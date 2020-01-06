import React from "react"
import Slider from "react-slick"
import Element, { h } from "@skatejs/element-react"
import css from "shadow-css"
import "./slick.css"
import "./slick-theme.css"

export default ({ settings, children, className }) => (
  <Slider {...settings} className={className}>
    {children}
  </Slider>
)
