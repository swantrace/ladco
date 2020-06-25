import React, { Fragment } from "react"
import SlideShow from "../../Elements/SlideShow/index"
import slideHome1 from "../../../assets/images/slide-home-1.jpg"
import {Helmet} from 'react-helmet'
import "./style.scss"

const TITLE = 'Ladco Company Limited'
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
      <Helmet>
        <title>{ TITLE }</title>
      </Helmet>
      <div className="home-slideshow-wrapper">
        <SlideShow settings={settings}>
          <div>
            <img src={slideHome1} alt="" />
            <h1 className="caption">LADCO COMPANY LIMITED</h1>
            <h3 className="caption">
              A name Winnipeg has trusted for over 100 years.
            </h3>
          </div>
        </SlideShow>
      </div>

      {props.children}
    </Fragment>
  )
}

export default Home
