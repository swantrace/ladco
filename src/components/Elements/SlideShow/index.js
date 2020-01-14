import React from "react"
import Slider from "react-slick"
import "./slick.css"
import "./slickTheme.css"

export default ({ settings, children, className }) => (
  <Slider {...settings} className={className}>
    {children}
  </Slider>
)
