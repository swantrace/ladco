import React from "react"
import Slider from "react-slick"
import "./slick.css"
import "./slick-theme.css"

export default ({ settings, children, className }) => (
  <Slider {...settings} className={className}>
    {children}
  </Slider>
)
