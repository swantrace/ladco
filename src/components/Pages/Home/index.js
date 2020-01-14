import React, { Fragment } from "react"
import { SlideShow } from "../../Elements/index"
import slideHome1 from "../../../assets/images/slide-home-1.jpg"
import "./style.scss"

const Home = props => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    autoplay: true,
    adaptiveHeight: true,
  }
  return (
    <Fragment>
      <SlideShow settings={settings}>
        <div>
          <img src={slideHome1} alt="" />
        </div>
      </SlideShow>
      {props.children}
    </Fragment>
  )
}

export default Home
