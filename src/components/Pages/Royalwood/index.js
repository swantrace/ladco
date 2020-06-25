import React, { Fragment } from "react"
import SlideShow from "../../Elements/SlideShow/index"
import slideRoyalWood1 from "../../../assets/images/slide-royal-wood-1.jpg"
import slideRoyalWood2 from "../../../assets/images/slide-royal-wood-2.jpg"
import { Helmet } from 'react-helmet'
import "./style.scss"

const TITLE = 'Ladco Company Limited | Royalwood'
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
      <Helmet>
        <title>{ TITLE }</title>
      </Helmet>
      <div className="royalwood-slideshow-wrapper">
        <SlideShow settings={settings}>
          <div>
            <img src={slideRoyalWood1} alt="" />
            <h1 className="caption">Beside REAL NATURE</h1>
          </div>
          <div>
            <img src={slideRoyalWood2} alt="" />
            <h1 className="caption">Fantastic NATURE, Living in the FOREST</h1>
          </div>
        </SlideShow>
      </div>
      {props.children}
    </Fragment>
  )
}

export default Royalwood
