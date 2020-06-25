import React, { Fragment } from "react"
import SlideShow from "../../Elements/SlideShow/index"
import slidePrairiePointe1 from "../../../assets/images/slide-praire-pointe-1.jpg"
import slidePrairiePointe2 from "../../../assets/images/slide-praire-pointe-2.jpg"
import slidePrairiePointe3 from "../../../assets/images/slide-praire-pointe-3.jpg"
import { Helmet } from 'react-helmet'
import "./style.scss"

const TITLE = 'Ladco Company Limited | Prairie Pointe'
const PrairiePointe = props => {
  const settings = {
    dots: false,
    arrows: true,
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
      <div className="prairie-pointe-slideshow-wrapper">
        <SlideShow settings={settings}>
          <div>
            <img src={slidePrairiePointe1} style={{ width: "100%" }} alt="" />
            <h6 className="caption">Welcome to</h6>
            <h1 className="caption">Prairie Pointe</h1>
          </div>
          <div>
            <img src={slidePrairiePointe2} style={{ width: "100%" }} alt="" />
            <h6 className="caption">Welcome to</h6>
            <h1 className="caption">Prairie Pointe</h1>
          </div>
          <div>
            <img src={slidePrairiePointe3} style={{ width: "100%" }} alt="" />
            <h1 className="caption">Build YOUR Dream Home Today</h1>
          </div>
        </SlideShow>
      </div>
      {props.children}
    </Fragment>
  )
}

export default PrairiePointe
