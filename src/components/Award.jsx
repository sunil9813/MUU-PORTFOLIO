import React from "react"
import { award } from "../dummydata"
import Common from "./common/Common"

const Award = () => {
  return (
    <>
      <section className='award creative'>
        <div className='container'>
          <div className='itemContent'>
            <Common title='award' />
            {award.map((val) => {
              return (
                <>
                  <div className='content flex'>
                    <div className='contentLeft'>
                      <h1>{val.title}</h1>
                      <p>{val.desc}</p>
                      <div className='box grid'>
                        <div className='img'>
                          <img src={val.img1} alt='' />
                        </div>
                        <div className='img'>
                          <img src={val.img2} alt='' />
                        </div>
                        <div className='img'>
                          <img src={val.img3} alt='' />
                        </div>
                        <div className='img'>
                          <img src={val.img4} alt='' />
                        </div>
                      </div>
                    </div>
                    <div className='contentRight'>
                      <img src={val.cover} alt='' />
                    </div>
                  </div>
                </>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}

export default Award
