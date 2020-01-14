import React, { Fragment } from "react"
import { SlideShow } from "../../Elements/index"
import slideRoyalWood1 from "../../../assets/images/slide-royal-wood-1.jpg"
import slideRoyalWood2 from "../../../assets/images/slide-royal-wood-2.jpg"
import "./style.scss"

const Royalwood = props => {
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
          <img src={slideRoyalWood1} alt="" />
        </div>
        <div>
          <img src={slideRoyalWood2} alt="" />
        </div>
      </SlideShow>
      {props.children}
    </Fragment>
  )
}

export default Royalwood
