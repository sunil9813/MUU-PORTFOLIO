import React from "react"
import { blog } from "../dummydata"
import Common from "./common/Common"

const Blog = () => {
  return (
    <>
      <section className='blog'>
        <div className='container'>
          <div className='itemContent'>
            <Common title='blog' />
            <div className='box'>
              {blog.map((val) => {
                return (
                  <>
                    <div className='img'>
                      <img src={val.cover} alt='' />
                    </div>
                  </>
                )
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Blog
