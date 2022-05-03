import React from "react"
import { portfolio } from "../dummydata"
import Common from "./common/Common"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const Portfolio = () => {
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
      <section className='portfolio creative'>
        <div className='container'>
          <Slider {...settings}>
            {portfolio.map((val) => {
              return (
                <>
                  <div className='itemContent flex'>
                    <Common title='portfolio' />
                    <div className='contentRight'>
                      <img src={val.cover} alt='' />
                    </div>
                    <div className='contentLeft'>
                      <h1>{val.title}</h1>
                      <p>{val.desc}</p>
                      <ul>
                        <li>
                          <i className='fa fa-minus'></i>
                          {val.p1}
                        </li>
                        <li>
                          <i className='fa fa-minus'></i>
                          {val.p2}
                        </li>
                        <li>
                          <i className='fa fa-minus'></i>
                          {val.p3}
                        </li>
                        <li>
                          <i className='fa fa-minus'></i>
                          {val.p4}
                        </li>
                        <li>
                          <i className='fa fa-minus'></i>
                          {val.p5}
                        </li>
                      </ul>
                      <button className='primary-btn'>
                        VIEW WEBSITE <i className='fa fa-long-arrow-alt-right'></i>
                      </button>
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

export default Portfolio
