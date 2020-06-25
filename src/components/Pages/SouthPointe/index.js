import React, { Fragment } from "react"
import SlideShow from "../../Elements/SlideShow/index"
import slideSouthPointe1 from "../../../assets/images/slide-south-pointe-1.jpg"
import slideSouthPointe2 from "../../../assets/images/slide-south-pointe-2.jpg"
import { Helmet } from 'react-helmet'
import "./style.scss"

const TITLE = 'Ladco Company Limited | South Pointe'
const SouthPointe = props => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    autoplay: true,
  }
  return (
    <Fragment>
      <Helmet>
        <title>{ TITLE }</title>
      </Helmet>
      <div className="south-pointe-slideshow-wrapper">
        <SlideShow settings={settings}>
          <div>
            <img src={slideSouthPointe1} alt="" />
            <h6 className="caption">Welcome to</h6>
            <h1 className="caption">South Pointe</h1>
          </div>
          <div>
            <img src={slideSouthPointe2} alt="" />
            <h1 className="caption">Build YOUR Dream Home Today</h1>
          </div>
        </SlideShow>
      </div>
      {props.children}
    </Fragment>
  )
}

export default SouthPointe
