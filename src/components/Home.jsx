import React from "react"
import Slider from "react-slick"
import { homedata } from "../dummydata"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const Home = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  }
  return (
    <>
      <section className='home'>
        <div className='container'>
          <Slider {...settings}>
            {homedata.map((val) => {
              const { name, desc, signature, cover } = val
              return (
                <>
                  <div className='itemContent flexSB'>
                    <div className='left'>
                      <h1>{name}</h1>
                      <p>{desc}</p>
                      <img src={signature} alt='' />
                    </div>
                    <div className='right'>
                      <img src={cover} alt='' />
                    </div>
                  </div>
                </>
              )
            })}
          </Slider>
        </div>
      </section>
    </>
  )
}

export default Home
