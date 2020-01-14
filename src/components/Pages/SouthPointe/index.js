import React, { Fragment } from "react"
import { SlideShow } from "../../Elements/index"
import slideSouthPointe1 from "../../../assets/images/slide-south-pointe-1.jpg"
import slideSouthPointe2 from "../../../assets/images/slide-south-pointe-2.jpg"
import "./style.scss"

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
      <SlideShow settings={settings}>
        <div>
          <img src={slideSouthPointe1} alt="" />
        </div>
        <div>
          <img src={slideSouthPointe2} alt="" />
        </div>
      </SlideShow>
      {props.children}
    </Fragment>
  )
}

export default SouthPointe
