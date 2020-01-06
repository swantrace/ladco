import React, { Fragment } from "react"
import { Container } from "reactstrap"
import { SlideShow } from "../../Elements/index"
import slidePrairiePointe1 from "../../../assets/images/slide-praire-pointe-1.jpg"
import slidePrairiePointe2 from "../../../assets/images/slide-praire-pointe-2.jpg"
import slidePrairiePointe3 from "../../../assets/images/slide-praire-pointe-3.jpg"
import "./style.scss"

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
      <div className="prairie-pointe-slideshow-wrapper">
        <SlideShow settings={settings}>
          <div>
            <img src={slidePrairiePointe1} />
          </div>
          <div>
            <img src={slidePrairiePointe2} />
          </div>
          <div>
            <img src={slidePrairiePointe3} />
          </div>
        </SlideShow>
      </div>
      {props.children}
    </Fragment>
  )
}

export default PrairiePointe
